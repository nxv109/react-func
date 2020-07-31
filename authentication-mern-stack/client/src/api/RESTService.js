import appAxios from './appAxios';

export default {
	get(request) {
		return this.execute({
			method: 'GET',
			...request,
		})	
	},
	post(request) {
		return this.execute({
			method: 'POST',
			...request,
		})	
	},
	patch(request) {
		return this.execute({
			method: 'PATCH',
			...request,
		})	
	},
	put(request) {
		return this.execute({
			method: 'PUT',
			...request,
		})	
	},
	delete(request) {
		return this.execute({
			method: 'DELETE',
			...request,
		})	
	},
	async execute(request) {
		try {
      const response = await appAxios(request);
      return response?.data ?? {};
    } catch (error) {
      const formattedError = error.response?.data ?? {};
      return Promise.reject(formattedError);
    }
	},
}