function OtherSizeVisibility(executionContext) {
    var formContext = executionContext.getFormContext();
    var Multiselectoptionfield = formContext.getAttribute("cr9a6_size").getValue();

    if (Multiselectoptionfield == null) {
        // do nothing
    } else if (Multiselectoptionfield == 796040002) {
        formContext.getControl("cr9a6_sizeother").setVisible(true);
    } else {
        formContext.getControl("cr9a6_sizeother").setVisible(false);
    }
}