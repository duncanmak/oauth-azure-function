interface Context {
    invocationId: string;
    bindingData: any;
    bindings: any;
    log(text: any): void;
    done(err?: any, output?: {
        [s: string]: any;
    }): void;
}

export default function (context: Context) {
    const res = { status: 201, body: "Hello World!" };
    context.done (null, res);   
}
