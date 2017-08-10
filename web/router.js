function route(handle,pathname) {
    console.log('当前请求路由为 ' + pathname);
    if (typeof handle[pathname] === 'function') {
       return handle[pathname]();
    } else {
        console.log("No request handler found for " + pathname);
    }
}

exports.route = route;