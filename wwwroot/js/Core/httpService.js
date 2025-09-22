export const httpService = (() => {
    async function request(url, options = {}) {
        try {
            const response = await fetch(url, {
                headers: { 'Content-Type': 'application/json' },
                ...options
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            return await response.json();
        } catch (err) {
            console.error("HTTP Error:", err);
            throw err;
        }
    }

    function get(url) {
        return request(url, { method: 'GET' });
    }

    function post(url, body) {
        return request(url, { method: 'POST', body: JSON.stringify(body) });
    }

    function put(url, body) {
        return request(url, { method: 'PUT', body: JSON.stringify(body) });
    }

    function del(url) {
        return request(url, { method: 'DELETE' });
    }

    return { get, post, put, del };
})();
