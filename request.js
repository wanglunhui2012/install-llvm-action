const https = require('https');

test();

async function test(){
    let a = await check();
    console.log(a);
};

function check(){
    return new Promise((response,reject) => {
        https.get("https://github.com/llvm/llvm-project/releases/download/llvmorg-16.0.4/clang+llvm-16.0.4-x86_64-linux-gnu-ubuntu-22.04.tar.xz", {
            method: 'HEAD'
        }, (res) => {
            console.log(`STATUS: ${res.statusCode}`);
            console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
            res.setEncoding('utf8');
            res.on('data', (chunk) => {
                console.log(`BODY: ${chunk}`);
            });
            res.on('end', () => {
                console.log('No more data in response.')
                response(res.statusCode)
            })
        }).on('error', (e) => {
            console.log(`problem with request: ${e.message}`);
        });
    })
}

/*check(res => {
    console.log(res)
})

function check(callback){
    const request = https.request({
        hostname: 'github.com',
        path:'/llvm/llvm-project/releases/download/llvmorg-16.0.4/clang+llvm-16.0.4-x86_64-linux-gnu-ubuntu-22.04.tar.xz1',
        method: 'HEAD'
    }, (res) => {
        console.log(`STATUS: ${res.statusCode}`);
        console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
            console.log(`BODY: ${chunk}`);
        });
        res.on('end', () => {
            console.log('No more data in response.')
            callback(res.statusCode)
        })
    });

    request.on('error', (e) => {
        console.log(`problem with request: ${e.message}`);
    });

    request.end();
}*/


/*const https = require('https');

https.get('https://api.juejin.cn/tag_api/v1/query_category_briefs', res => {
    let list = [];
    res.on('data', chunk => {
        list.push(chunk);
    });
    res.on('end', () => {
        const { data } = JSON.parse(Buffer.concat(list).toString());
        data.forEach(item => {
            console.log(`{item.rank}.${item.category_name}`);
        })
    });
}).on('error', err => {
    console.log('Error: ', err.message);
});*/
