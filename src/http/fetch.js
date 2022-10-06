const Http = (url, option, data) => {
  let [FETCH_TIMEOUT, didTimeout, timeout] = [10000, false, null];

  return new Promise((resolve, reject) => {
    timeout = setTimeout(() => {
      didTimeout = true;
      reject(new Error("请求超时"));
    }, FETCH_TIMEOUT);

    const options = {
      method: option.method,
    };

    if (["get", "delete"].includes(option.method)) {
      if (data) {
        for (let [key, value] of Object.entries(data)) {
          url += `${url.indexOf("?") === -1 ? "?" : "&"}${key}=${value}`;
        }
      }
    }

    if (["post", "put"].includes(option.method)) {
      const actions = new Map([
        [
          "form",
          () => {
            let formData = new FormData();
            for (let key of Object.keys(data)) {
              if (
                Object.prototype.toString.call(data[key]) === "[object Array]"
              ) {
                data[key].map((item) => {
                  formData.append(key, item);
                });
              } else {
                formData.append(key, data[key]);
              }
            }
            options.body = formData;
          },
        ],
        [
          "json",
          () => {
            options.body = JSON.stringify(data);
            options.headers["Content-Type"] = "application/json";
          },
        ],
        [
          "default",
          () => {
            options.body = data;
            options.headers["Content-Type"] =
              "application/x-www-form-urlencoded";
          },
        ],
      ]);

      let action = actions.get(option.type) || actions.get("default");
      action();
    }

    fetch(url, { ...options })
      .then((response) => {
        if (option && option.dataType === "text") {
          return response.text();
        } else {
          return response.json();
        }
      })
      .then((response) => {
        if (timeout) clearTimeout(timeout);
        if (!didTimeout) {
          resolve(response);
        }
      })
      .catch((err) => {
        if (timeout) clearTimeout(timeout);
        if (didTimeout) return;
        reject(err);
      });
  })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      if (timeout) clearTimeout(timeout);
      console.log(err);
      console.log("请查看后端服务是否正常");
    });
};

export default Http;
