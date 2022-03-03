/*
 * @Author: Yang
 * @Date: 2022-03-03 17:22:53
 * @LastEditors: Yang
 * @LastEditTime: 2022-03-03 17:26:30
 * @FilePath: /ReactNativeDemo/src/Common/HttpRequest.js
 * @Description: 头部注释
 */


export default class HttpRequest {

    static get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => response.json())
                .then(result => resolve(result))
                .catch(error => reject(error))
        })
    }

    static post(url, params) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(params)
            })
                .then(response => response.json())
                .then(result => resolve(result))
                .catch(error => reject(error))
        })
    }
}