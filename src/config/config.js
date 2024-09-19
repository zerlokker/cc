module.exports = {
    server: {
        port: 5000,
        debug: false,
        version: '1.0',
        useHttps: false, // Default: false
    },
    proxy: {
        scrape: false, // Default: 'false' | Set to true to enable proxy scraping | false use proxies.txt
        protocol: 'http', // Default: 'http' | Proxy protocol, can be 'http', 'https', 'socks4', 'socks5'
        timeout: 5000
    },
    botsName: 'NELBOTS',
    botsAmount: 30
}
