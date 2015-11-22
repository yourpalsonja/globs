Everyone = new Mongo.Collection('everyone');

if (Meteor.isClient) {

    Template.createGlob.events ({
        'submit form': function(event) {
            event.preventDefault();

            var yourName = event.target.yourName.value;
            var designSkill = event.target.designSkill.value;
            var htmlSkill = event.target.htmlSkill.value;
            var cssSkill = event.target.cssSkill.value;
            var engineeringSkill = event.target.engineeringSkill.value;

            Everyone.insert({
                name: yourName,
                design: designSkill,
                html: htmlSkill,
                css: cssSkill,
                engineering: engineeringSkill
            })
        }
    });

    Template.displayGlob.helpers ({
        'glob': function() {
            return Everyone.find();
        }
    });
}
