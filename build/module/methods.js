export var Method;
(function (Method) {
    Method["BATCH"] = "batch";
    Method["CRM_COMPANY_FIELDS"] = "crm.company.fields";
    Method["CRM_COMPANY_ADD"] = "crm.company.add";
    Method["CRM_COMPANY_UPDATE"] = "crm.company.update";
    Method["CRM_COMPANY_GET"] = "crm.company.get";
    Method["CRM_COMPANY_LIST"] = "crm.company.list";
    Method["CRM_CONTACT_FIELDS"] = "crm.contact.fields";
    Method["CRM_CONTACT_ADD"] = "crm.contact.add";
    Method["CRM_CONTACT_UPDATE"] = "crm.contact.update";
    Method["CRM_CONTACT_GET"] = "crm.contact.get";
    Method["CRM_CONTACT_LIST"] = "crm.contact.list";
    Method["CRM_PRODUCT_FIELDS"] = "crm.product.fields";
    Method["CRM_PRODUCT_ADD"] = "crm.product.add";
    Method["CRM_PRODUCT_UPDATE"] = "crm.product.update";
    Method["CRM_PRODUCT_GET"] = "crm.product.get";
    Method["CRM_PRODUCT_LIST"] = "crm.product.list";
    Method["CRM_PRODUCT_DELETE"] = "crm.product.delete";
    Method["CRM_DEAL_FIELDS"] = "crm.deal.fields";
    Method["CRM_DEAL_ADD"] = "crm.deal.add";
    Method["CRM_DEAL_UPDATE"] = "crm.deal.update";
    Method["CRM_DEAL_GET"] = "crm.deal.get";
    Method["CRM_DEAL_LIST"] = "crm.deal.list";
    Method["CRM_DEAL_PRODUCTROWS_GET"] = "crm.deal.productrows.get";
    Method["CRM_DEAL_PRODUCTROWS_SET"] = "crm.deal.productrows.set";
    Method["CRM_LEAD_FIELDS"] = "crm.lead.fields";
    Method["CRM_LEAD_ADD"] = "crm.lead.add";
    Method["CRM_LEAD_UPDATE"] = "crm.lead.update";
    Method["CRM_LEAD_GET"] = "crm.lead.get";
    Method["CRM_LEAD_LIST"] = "crm.lead.list";
    Method["CRM_STATUS_FIELDS"] = "crm.status.fields";
    Method["CRM_STATUS_ADD"] = "crm.status.add";
    Method["CRM_STATUS_DELETE"] = "crm.status.delete";
    Method["CRM_STATUS_GET"] = "crm.status.get";
    Method["CRM_STATUS_LIST"] = "crm.status.list";
    Method["CRM_STATUS_UPDATE"] = "crm.status.update";
    Method["USER_FIELDS"] = "user.fields";
    Method["USER_GET"] = "user.get";
})(Method || (Method = {}));
const LISTABLE_METHODS = [
    Method.CRM_COMPANY_LIST,
    Method.CRM_CONTACT_LIST,
    Method.CRM_DEAL_LIST,
    Method.CRM_LEAD_LIST,
    Method.CRM_PRODUCT_LIST
];
