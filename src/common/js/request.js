import axios from 'axios'
const ajax = function (opt) {
    opt = opt || {};
    opt.method = opt.method.toUpperCase() || "POST";
    opt.url = opt.url || "";
    opt.data = opt.data || null;
    opt.success = opt.success || function () { };
    opt.fail = opt.fail || function () { };
    if (opt.method.toUpperCase() == "GET") {
        axios.get(opt.url).then(res => {
            console.log(res);
            if (res.status == 200) {
                opt.success(res.data);
            } else {
                opt.fail(res);
            }
        }).catch(err => {
            throw new Error(opt.url + "" + err);
        })
    } else if (opt.method.toUpperCase() == "POST") {
        axios.post(opt.url,opt.data).then(res => {
            if (res.status == 200) {
                opt.success(res.data);
            } else {
                opt.fail(res)
            }
        }).catch(err => {
            throw new Error(opt.url + "" + err);
        })
    }
}
export default ajax