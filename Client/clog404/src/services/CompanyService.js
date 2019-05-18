import Api from '@/services/Api'

export default {
    getAllCompanies(query){
        return Api().get('companies', {params:query})
    },
    addCompany(payload){
        return Api().post('companies', payload)
    }
}