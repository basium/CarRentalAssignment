import { joinURL } from 'ufo';
export default defineEventHandler(async (event) => {
    const proxyUrl = useRuntimeConfig().dmProxyUrl;
    
    const originalUrl = event.req.originalUrl || event.req.url || '/';
    const path = originalUrl.replace(/^\/api\//, '');    
    const target = joinURL(proxyUrl, path);

    return proxyRequest(event, target);
});
