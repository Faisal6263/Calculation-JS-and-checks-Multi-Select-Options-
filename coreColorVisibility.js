function coreColorVisibility(executionContext) {
    var formContext = executionContext.getFormContext();
    var Multiselectoptionfield = formContext.getAttribute("cr9a6_corecolor").getValue();

    if (Multiselectoptionfield == null) {
        // do nothing
    } else if (Multiselectoptionfield.includes(796040004)) {
        formContext.getControl("cr9a6_othercorecolor").setVisible(true);
    } else {
        formContext.getControl("cr9a6_othercorecolor").setVisible(false);
    }
}