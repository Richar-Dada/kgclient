export const baseUrl =  process.env.NODE_ENV === 'development' ? 'http://192.168.0.104:7001' : 'https://konggang.inakerr.com' 
const request = ({url = '', data = {}, method = 'GET', header = {
}}) => {
    return new Promise((resolve, reject) => {
        uni.request({
            method: method,
            url: baseUrl + url,
            data: data,
            header: header,
            dataType: 'json',  
        }).then((response) => {
            setTimeout(function() {
                uni.hideLoading();
            }, 200);
            let [error, res] = response;        
            resolve(res.data);
        }).catch(error => {
            let [err, res] = error;
            reject(err)
        })
    });
}
export default request