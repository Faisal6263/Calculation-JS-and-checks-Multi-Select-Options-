function calculationonForQTYFields(executionContext) {
    debugger;
    var formContext = executionContext.getFormContext();

    var SizeCR80Attribute = formContext.getAttribute("cr9a6_size");
    var MaterialAttribute = formContext.getAttribute("cr9a6_material");
    var FinalthicknessAttribute = formContext.getAttribute("cr9a6_finalthickness");
    var coreColorAttribute = formContext.getAttribute("cr9a6_corecolor");

    // Initialize the quantity fields with some default values or leave them blank
    var cr80Quantity1000 = 0;
    var cr80Quantity2000 = 0;
    var cr80Quantity3000 = 0;
    var cr80Quantity4000 = 0;

    // Check if the size attribute has a value
    if (SizeCR80Attribute) {
        var SizeCR80 = SizeCR80Attribute.getValue();
        // Check if the size attribute includes 796040000
        if (SizeCR80 && SizeCR80.includes(796040000)) {
            // Set the quantity fields based on the size attribute
            cr80Quantity1000 = 108.04;
        } else {
            // Set the quantity fields to some default values or leave them blank
            cr80Quantity1000 = 0;
        }
    } else {
        // Set the quantity fields to some default values or leave them blank
        cr80Quantity1000 = 0;
    }

    // Check if the material attribute has a value
    if (MaterialAttribute) {
        var Material = MaterialAttribute.getValue();
        // Check if the material attribute includes 796040000
        if (Material && Material.includes(796040000)) {
            // Set the quantity fields based on the material attribu

            cr80Quantity2000 = 87.01;

        } else {
            // Set the quantity fields to some default values or leave them blank
            cr80Quantity2000 = 0;
        }
    } else {
        // Set the quantity fields to some default values or leave them blank
        cr80Quantity2000 = 0;
    }


    // Check if the final thickness attribute has a value
    if (FinalthicknessAttribute) {
        var Finalthickness = FinalthicknessAttribute.getValue();
        // Check if the final thickness attribute includes 796040000
        if (Finalthickness && Finalthickness.includes(796040000)) {
            // Set the quantity fields based on the final thickness attribute
            cr80Quantity3000 = 82.33;


        } else {
            // Set the quantity fields to some default values or leave them blank
            cr80Quantity3000 = 0;
        }
    } else {
        // Set the quantity fields to some default values or leave them blank
        cr80Quantity3000 = 0;
    }

    // Check if the core color attribute has a value
    if (coreColorAttribute) {
        var coreColor = coreColorAttribute.getValue();
        // Check if the core color attribute includes 796040000
        if (coreColor && coreColor.includes(796040000)) {
            // Set the quantity fields based on the core color attribute
            cr80Quantity4000 = 75.79;

        } else {
            // Set the quantity fields to some default values or leave them blank
            cr80Quantity4000 = 0;
        }
    } else {
        // Set the quantity fields to some default values or leave them blank
        cr80Quantity4000 = 0;
    }

    // Set the values of the quantity fields in the form context
    formContext.getAttribute("cr9a6_qty1000").setValue(cr80Quantity1000);
    formContext.getAttribute("cr9a6_qty2000").setValue(cr80Quantity2000);
    formContext.getAttribute("cr9a6_qty3000").setValue(cr80Quantity3000);
    formContext.getAttribute("cr9a6_qty4000").setValue(cr80Quantity4000);
}












// Working code before any changes 


function calculationonForQTYFields(executionContext) {
    debugger;
    var formContext = executionContext.getFormContext();

    var SizeCR80Attribute = formContext.getAttribute("cr9a6_size");
    var MaterialAttribute = formContext.getAttribute("cr9a6_material");
    var FinalthicknessAttribute = formContext.getAttribute("cr9a6_finalthickness");
    var coreColorAttribute = formContext.getAttribute("cr9a6_corecolor");

    if (SizeCR80Attribute && MaterialAttribute && FinalthicknessAttribute && coreColorAttribute) {
        var SizeCR80 = SizeCR80Attribute.getValue();
        var Material = MaterialAttribute.getValue();
        var Finalthickness = FinalthicknessAttribute.getValue();
        var coreColor = coreColorAttribute.getValue();

        if (SizeCR80 && SizeCR80.includes(796040000) && Material && Material.includes(796040000) && Finalthickness && Finalthickness.includes(796040000) && coreColor && coreColor.includes(796040000)) {
            var cr80Quantity1000 = 108.04;
            var cr80Quantity2000 = 87.01;
            var cr80Quantity3000 = 82.33;
            var cr80Quantity4000 = 75.79;

            formContext.getAttribute("cr9a6_qty1000").setValue(cr80Quantity1000);
            formContext.getAttribute("cr9a6_qty2000").setValue(cr80Quantity2000);
            formContext.getAttribute("cr9a6_qty3000").setValue(cr80Quantity3000);
            formContext.getAttribute("cr9a6_qty4000").setValue(cr80Quantity4000);
        }
    }
}

// ends here
