export const config = {
    PollingInterval: !isNaN(Number(process.env.POLLING_INTERVAL)) ? Number(process.env.POLLING_INTERVAL) : 60 * 1000
};