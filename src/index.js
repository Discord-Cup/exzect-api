const fetch = require("node-fetch")


class DSCAPI {
    #baseURL = 'https://api.exzect.ru/api'
    #token = ""
    constructor({ token }) {
        this.#token = token
    }

    async getMe() {
        if (!this.#token) {
            throw new Error('Token not found!')
        }
        const res = await fetch(`${this.#baseURL}/user/me`, {
            headers: {
             Authorization: `Bearer: ${this.#token}`,
            }})

        const data = await res.json()
        if (!data.id) {
            return {
                message: "User not found!"
            }
        }
        return data
    }

    async getBot(id, field) {
        if (!id) {
            throw new Error('ID must be provided!')
        }
        const res = await fetch(`${this.#baseURL}/bot/${id}`)
        const data = await res.json()
        if (!data.id) {
            return {
                message: "Bot not found!"
            }
        }
        if (field) return data[field]
        return data
    }

    async getBotOwner(id, field) {
        if (!id) {
            throw new Error('ID must be provided!')
        }
        const res = await fetch(`${this.#baseURL}/bot/${id}/owner`)
        const data = await res.json()
        if (!data.id) {
            return {
                message: "Bot not found!"
            }
        }
        if (field) return data[field]
        return data
    }

    async getBotComments(id) {
        if (!id) {
            throw new Error('ID must be provided!')
        }
        const res = await fetch(`${this.#baseURL}/bot/${id}/comments`)
        const data = await res.json()
        if (!data.id) {
            return {
                message: "Bot not found!"
            }
        }
        return data
    }

    async getBotReports(id) {
        if (!id) {
            throw new Error('ID must be provided!')
        }
        const res = await fetch(`${this.#baseURL}/bot/${id}/reports`)
        const data = await res.json()
        if (!data.id) {
            return {
                message: "Bot not found!"
            }
        }
        return data
    }

    async getUser(id, field) {
        if (!id) {
            throw new Error('ID must be provided!')
        }
        const res = await fetch(`${this.#baseURL}/user/${id}`)
        const data = await res.json()
        if (!data.id) {
            return {
                message: "User not found!"
            }
        }
        if (field) return data[field]
        return data
    }

    async getUserBots(id, field) {
        if (!id) {
            throw new Error('ID must be provided!')
        }
        const res = await fetch(`${this.#baseURL}/user/${id}/bots`)
        const data = await res.json()
        if (!data.id) {
            return {
                message: "User not found!"
            }
        }
        if (field) return data[field]
        return data
    }

    async getUserComments(id) {
        if (!id) {
            throw new Error('ID must be provided!')
        }
        const res = await fetch(`${this.#baseURL}/user/${id}/comments`)
        const data = await res.json()
        if (!data.id) {
            return {
                message: "User not found!"
            }
        }
        return data
    }

    async getUserReports(id) {
        if (!id) {
            throw new Error('ID must be provided!')
        }
        const res = await fetch(`${this.#baseURL}/user/${id}/reports`)
        const data = await res.json()
        if (!data.id) {
            return {
                message: "User not found!"
            }
        }
        return data
    }
}

module.exports = DSCAPI