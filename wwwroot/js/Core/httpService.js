
export const httpService = (() => {
    async function request(url, options = {}) {
        try {
            const response = await fetch(url, {
                headers: { 'Content-Type': 'application/json' },
                ...options
            });
            let resultText = await response.text();
            if (!response.ok) {
                return {
                    success: false,
                    error: resultText
                };
            }

            return {
                success: true,
                data: resultText
            };
        } catch (err) {
            console.error("HTTP Error:", err);
            return {
                success: false,
                error: "Error de conexión"
            };
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
