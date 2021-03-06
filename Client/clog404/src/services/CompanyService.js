import Api from '@/services/Api'

export default {
    getAllCompanies(query){
        return Api().get('companies', {params:query})
    },
    getOneCompany(id){
        return Api().get(`/company/${id}`)
    },
    addCompany(payload){
        return Api().post('companies', payload)
    },
    addDriver(companyId, payload){
        return Api().post(`company/${companyId}/drivers`, payload)
    },
    getCompaniesnames(query){
        return Api().get('companies/name', {params:query})
    },
    addShipment(companyId, payload){
        return Api().post(`company/${companyId}/shipments`, payload)
    }
}