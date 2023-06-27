import pkg from "../package.json" assert { type: "json" };

export function banner() {
    let text = `

    ███████╗██╗░░░██╗███╗░░░███╗  ███████╗░█████╗░██╗░░░██╗░█████╗░███████╗████████╗
    ██╔════╝██║░░░██║████╗░████║  ██╔════╝██╔══██╗██║░░░██║██╔══██╗██╔════╝╚══██╔══╝
    █████╗░░╚██╗░██╔╝██╔████╔██║  █████╗░░███████║██║░░░██║██║░░╚═╝█████╗░░░░░██║░░░
    ██╔══╝░░░╚████╔╝░██║╚██╔╝██║  ██╔══╝░░██╔══██║██║░░░██║██║░░██╗██╔══╝░░░░░██║░░░
    ███████╗░░╚██╔╝░░██║░╚═╝░██║  ██║░░░░░██║░░██║╚██████╔╝╚█████╔╝███████╗░░░██║░░░
    ╚══════╝░░░╚═╝░░░╚═╝░░░░░╚═╝  ╚═╝░░░░░╚═╝░░╚═╝░╚═════╝░░╚════╝░╚══════╝░░░╚═╝░░░

`
    text += `                               EOS EVM Faucet v${pkg.version}\n`
    return text;
}