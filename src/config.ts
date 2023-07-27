export const config = {
    PollingInterval: !isNaN(Number(process.env.POLLING_INTERVAL)) ? Number(process.env.POLLING_INTERVAL) : 60 * 1000,
    APIDomain: process.env.API_DOMAIN || "http://localhost:3000",
    doneListLimit: !isNaN(Number(process.env.DONE_LIST_LIMIT)) ? Number(process.env.DONE_LIST_LIMIT) : 10,
};