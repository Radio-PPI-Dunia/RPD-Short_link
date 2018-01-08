import {Mongo} from "meteor/mongo";
import {Meteor} from "meteor/meteor";
import SimpleSchema from "simpl-schema";
import shortid from 'shortid';

export const Links = new Mongo.Collection('shortlinks');

if (Meteor.isServer) {
    Meteor.publish('links', function () {
        return Links.find({userId: this.userId});
    })
}

Meteor.methods({
    'links.insert'(url) {
        if (!this.userId) {
            throw new Meteor.Error('User is not authorized');
        }

        // validation
        new SimpleSchema({
            url: {
                type: String,
                label: 'Your link',
                regEx: SimpleSchema.RegEx.Url
            }
        }).validate({url});

        Links.insert({
            _id: shortid.generate(),
            url,
            userId: this.userId,
            visible: true
        })
    },
    'links.setVisible'(_id, visible){
        if (!this.userId){
            throw new Meteor.Error('User is authorized')
        }

        new SimpleSchema({
            _id: {
                type: String,
                min: 1
            },
            visible: {
                type: Boolean
            }
        }).validate({ _id, visible })

        Links.update({
            _id,
            userId: this.userId,
        }, {
            $set: { visible }
        })
    }
});