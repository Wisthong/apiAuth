const { Schema, model, Types } = require("mongoose");

const TracksSchema = Schema(
    {
        name: {
            type: String,
            require: true
        },
        album: {
            type: String,
            require: true
        },

        cover: {
            type: String,
            validate: {
                validator: (req) => {
                    return true;
                },
                message: "ERROR_URL",
            },
        },

        artist: {
            name: {
                type: String,
            },
            nickname: {
                type: String,
            },
            nationality: {
                type: String,
            },
        },

        duration: {
            start: {
                type: Number,
            },
            end: {
                type: Number,
            }

        },
        mediaId: {
            type: String
            // type: Types.ObjectId
        }

    },
    {
        timestamps: true,
        versionKey: false,
    }
);

module.exports = model("tracks", TracksSchema);
