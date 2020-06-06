using myCompany.hr.lms from '../db/Students';

service LMSService {

    @readonly
    entity Students as projection on lms.Students;

}
