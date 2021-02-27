
export const submitForm = (formData) => {
    //I dont care about the form select object getting passed in.
    delete formData.formSelect;
    return {
        type: "FORMS",
        payload: formData
    }
}