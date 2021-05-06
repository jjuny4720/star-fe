const promise = fetch('/json.json');
console.log(promise);

promise.then(res => {
    console.log('res: ', res);
    const textPromise = res.text();
    console.log('textpromise: ', textPromise);

    textPromise.then(data => console.log('data: ', data));
})

function callback(data) {
    console.log('callback: ', data);
}
