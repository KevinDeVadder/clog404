import Api from '@/services/Api'

export default {
    getAllCompanies(query){
        return Api().get('companies', {params:query})
    },
    addCompany(payload){
        return Api().post('companies', payload)
    },
    addDriver(companyId, payload){
        return Api().post(`company/${companyId}/drivers`, payload)
    }
}