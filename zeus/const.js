"use strict";
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnTypes = exports.AllTypesProps = void 0;
exports.AllTypesProps = {
    RootQuery: {
        badge: {
            id: {
                type: "ID",
                array: false,
                arrayRequired: false,
                required: true
            },
            idType: {
                type: "BadgeIdType",
                array: false,
                arrayRequired: false,
                required: false
            },
            asPreview: {
                type: "Boolean",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        badgeBy: {
            id: {
                type: "ID",
                array: false,
                arrayRequired: false,
                required: false
            },
            badgeId: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            uri: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            slug: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        badges: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            where: {
                type: "RootQueryToBadgeConnectionWhereArgs",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        categories: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            where: {
                type: "RootQueryToCategoryConnectionWhereArgs",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        category: {
            id: {
                type: "ID",
                array: false,
                arrayRequired: false,
                required: true
            },
            idType: {
                type: "CategoryIdType",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        comment: {
            id: {
                type: "ID",
                array: false,
                arrayRequired: false,
                required: true
            }
        },
        comments: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            where: {
                type: "RootQueryToCommentConnectionWhereArgs",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        contentNode: {
            id: {
                type: "ID",
                array: false,
                arrayRequired: false,
                required: true
            },
            idType: {
                type: "ContentNodeIdTypeEnum",
                array: false,
                arrayRequired: false,
                required: false
            },
            contentType: {
                type: "ContentTypeEnum",
                array: false,
                arrayRequired: false,
                required: false
            },
            asPreview: {
                type: "Boolean",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        contentNodes: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            where: {
                type: "RootQueryToContentNodeConnectionWhereArgs",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        contentType: {
            id: {
                type: "ID",
                array: false,
                arrayRequired: false,
                required: true
            },
            idType: {
                type: "ContentTypeIdTypeEnum",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        contentTypes: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        hero: {
            id: {
                type: "ID",
                array: false,
                arrayRequired: false,
                required: true
            },
            idType: {
                type: "HeroIdType",
                array: false,
                arrayRequired: false,
                required: false
            },
            asPreview: {
                type: "Boolean",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        heroBy: {
            id: {
                type: "ID",
                array: false,
                arrayRequired: false,
                required: false
            },
            heroId: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            uri: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            slug: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        heroes: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            where: {
                type: "RootQueryToHeroConnectionWhereArgs",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        mediaItem: {
            id: {
                type: "ID",
                array: false,
                arrayRequired: false,
                required: true
            },
            idType: {
                type: "MediaItemIdType",
                array: false,
                arrayRequired: false,
                required: false
            },
            asPreview: {
                type: "Boolean",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        mediaItemBy: {
            id: {
                type: "ID",
                array: false,
                arrayRequired: false,
                required: false
            },
            mediaItemId: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            uri: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            slug: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        mediaItems: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            where: {
                type: "RootQueryToMediaItemConnectionWhereArgs",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        menu: {
            id: {
                type: "ID",
                array: false,
                arrayRequired: false,
                required: true
            },
            idType: {
                type: "MenuNodeIdTypeEnum",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        menuItem: {
            id: {
                type: "ID",
                array: false,
                arrayRequired: false,
                required: true
            },
            idType: {
                type: "MenuItemNodeIdTypeEnum",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        menuItems: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            where: {
                type: "RootQueryToMenuItemConnectionWhereArgs",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        menus: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            where: {
                type: "RootQueryToMenuConnectionWhereArgs",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        movie: {
            id: {
                type: "ID",
                array: false,
                arrayRequired: false,
                required: true
            },
            idType: {
                type: "MovieIdType",
                array: false,
                arrayRequired: false,
                required: false
            },
            asPreview: {
                type: "Boolean",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        movieBy: {
            id: {
                type: "ID",
                array: false,
                arrayRequired: false,
                required: false
            },
            movieId: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            uri: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            slug: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        movies: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            where: {
                type: "RootQueryToMovieConnectionWhereArgs",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        node: {
            id: {
                type: "ID",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        nodeByUri: {
            uri: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: true
            }
        },
        page: {
            id: {
                type: "ID",
                array: false,
                arrayRequired: false,
                required: true
            },
            idType: {
                type: "PageIdType",
                array: false,
                arrayRequired: false,
                required: false
            },
            asPreview: {
                type: "Boolean",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        pageBy: {
            id: {
                type: "ID",
                array: false,
                arrayRequired: false,
                required: false
            },
            pageId: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            uri: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        pages: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            where: {
                type: "RootQueryToPageConnectionWhereArgs",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        plugin: {
            id: {
                type: "ID",
                array: false,
                arrayRequired: false,
                required: true
            }
        },
        plugins: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        post: {
            id: {
                type: "ID",
                array: false,
                arrayRequired: false,
                required: true
            },
            idType: {
                type: "PostIdType",
                array: false,
                arrayRequired: false,
                required: false
            },
            asPreview: {
                type: "Boolean",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        postBy: {
            id: {
                type: "ID",
                array: false,
                arrayRequired: false,
                required: false
            },
            postId: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            uri: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            slug: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        postFormat: {
            id: {
                type: "ID",
                array: false,
                arrayRequired: false,
                required: true
            },
            idType: {
                type: "PostFormatIdType",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        postFormats: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            where: {
                type: "RootQueryToPostFormatConnectionWhereArgs",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        posts: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            where: {
                type: "RootQueryToPostConnectionWhereArgs",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        registeredScripts: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        registeredStylesheets: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        revisions: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            where: {
                type: "RootQueryToContentRevisionUnionConnectionWhereArgs",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        tag: {
            id: {
                type: "ID",
                array: false,
                arrayRequired: false,
                required: true
            },
            idType: {
                type: "TagIdType",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        tags: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            where: {
                type: "RootQueryToTagConnectionWhereArgs",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        taxonomies: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        taxonomy: {
            id: {
                type: "ID",
                array: false,
                arrayRequired: false,
                required: true
            },
            idType: {
                type: "TaxonomyIdTypeEnum",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        termNode: {
            id: {
                type: "ID",
                array: false,
                arrayRequired: false,
                required: true
            },
            idType: {
                type: "TermNodeIdTypeEnum",
                array: false,
                arrayRequired: false,
                required: false
            },
            taxonomy: {
                type: "TaxonomyEnum",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        terms: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            where: {
                type: "RootQueryToTermNodeConnectionWhereArgs",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        theme: {
            id: {
                type: "ID",
                array: false,
                arrayRequired: false,
                required: true
            }
        },
        themes: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        user: {
            id: {
                type: "ID",
                array: false,
                arrayRequired: false,
                required: true
            },
            idType: {
                type: "UserNodeIdTypeEnum",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        userRole: {
            id: {
                type: "ID",
                array: false,
                arrayRequired: false,
                required: true
            }
        },
        userRoles: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        users: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            where: {
                type: "RootQueryToUserConnectionWhereArgs",
                array: false,
                arrayRequired: false,
                required: false
            }
        }
    },
    BadgeIdType: "enum",
    Badge: {
        enqueuedScripts: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        enqueuedStylesheets: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        heroes: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        title: {
            format: {
                type: "PostObjectFieldFormatEnum",
                array: false,
                arrayRequired: false,
                required: false
            }
        }
    },
    ContentNode: {
        enqueuedScripts: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        enqueuedStylesheets: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            }
        }
    },
    ContentType: {
        connectedTaxonomies: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        contentNodes: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            where: {
                type: "ContentTypeToContentNodeConnectionWhereArgs",
                array: false,
                arrayRequired: false,
                required: false
            }
        }
    },
    Taxonomy: {
        connectedContentTypes: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            }
        }
    },
    ContentTypeToContentNodeConnectionWhereArgs: {
        contentTypes: {
            type: "ContentTypeEnum",
            array: true,
            arrayRequired: false,
            required: false
        },
        dateQuery: {
            type: "DateQueryInput",
            array: false,
            arrayRequired: false,
            required: false
        },
        hasPassword: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        },
        id: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        in: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        mimeType: {
            type: "MimeTypeEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        name: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        nameIn: {
            type: "String",
            array: true,
            arrayRequired: false,
            required: false
        },
        notIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        orderby: {
            type: "PostObjectsConnectionOrderbyInput",
            array: true,
            arrayRequired: false,
            required: false
        },
        parent: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: false
        },
        parentIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        parentNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        password: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        search: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        stati: {
            type: "PostStatusEnum",
            array: true,
            arrayRequired: false,
            required: false
        },
        status: {
            type: "PostStatusEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        title: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        }
    },
    ContentTypeEnum: "enum",
    DateQueryInput: {
        after: {
            type: "DateInput",
            array: false,
            arrayRequired: false,
            required: false
        },
        before: {
            type: "DateInput",
            array: false,
            arrayRequired: false,
            required: false
        },
        column: {
            type: "PostObjectsConnectionDateColumnEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        compare: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        day: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        hour: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        inclusive: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        },
        minute: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        month: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        relation: {
            type: "RelationEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        second: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        week: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        year: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        }
    },
    DateInput: {
        day: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        month: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        year: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        }
    },
    PostObjectsConnectionDateColumnEnum: "enum",
    RelationEnum: "enum",
    MimeTypeEnum: "enum",
    PostObjectsConnectionOrderbyInput: {
        field: {
            type: "PostObjectsConnectionOrderbyEnum",
            array: false,
            arrayRequired: false,
            required: true
        },
        order: {
            type: "OrderEnum",
            array: false,
            arrayRequired: false,
            required: true
        }
    },
    PostObjectsConnectionOrderbyEnum: "enum",
    OrderEnum: "enum",
    PostStatusEnum: "enum",
    User: {
        avatar: {
            size: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            forceDefault: {
                type: "Boolean",
                array: false,
                arrayRequired: false,
                required: false
            },
            rating: {
                type: "AvatarRatingEnum",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        badges: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            where: {
                type: "UserToBadgeConnectionWhereArgs",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        comments: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            where: {
                type: "UserToCommentConnectionWhereArgs",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        enqueuedScripts: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        enqueuedStylesheets: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        heroes: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            where: {
                type: "UserToHeroConnectionWhereArgs",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        mediaItems: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            where: {
                type: "UserToMediaItemConnectionWhereArgs",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        pages: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            where: {
                type: "UserToPageConnectionWhereArgs",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        posts: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            where: {
                type: "UserToPostConnectionWhereArgs",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        revisions: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            where: {
                type: "UserToContentRevisionUnionConnectionWhereArgs",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        roles: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            }
        }
    },
    AvatarRatingEnum: "enum",
    UserToBadgeConnectionWhereArgs: {
        author: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        authorIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        authorName: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        authorNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        dateQuery: {
            type: "DateQueryInput",
            array: false,
            arrayRequired: false,
            required: false
        },
        hasPassword: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        },
        id: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        in: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        mimeType: {
            type: "MimeTypeEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        name: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        nameIn: {
            type: "String",
            array: true,
            arrayRequired: false,
            required: false
        },
        notIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        orderby: {
            type: "PostObjectsConnectionOrderbyInput",
            array: true,
            arrayRequired: false,
            required: false
        },
        parent: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: false
        },
        parentIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        parentNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        password: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        search: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        stati: {
            type: "PostStatusEnum",
            array: true,
            arrayRequired: false,
            required: false
        },
        status: {
            type: "PostStatusEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        title: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        }
    },
    UserToCommentConnectionWhereArgs: {
        authorEmail: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        authorIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        authorNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        authorUrl: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        commentIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        commentNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        commentType: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        commentTypeIn: {
            type: "String",
            array: true,
            arrayRequired: false,
            required: false
        },
        commentTypeNotIn: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        contentAuthor: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        contentAuthorIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        contentAuthorNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        contentId: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: false
        },
        contentIdIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        contentIdNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        contentName: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        contentParent: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        contentStatus: {
            type: "PostStatusEnum",
            array: true,
            arrayRequired: false,
            required: false
        },
        contentType: {
            type: "ContentTypeEnum",
            array: true,
            arrayRequired: false,
            required: false
        },
        includeUnapproved: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        karma: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        order: {
            type: "OrderEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        orderby: {
            type: "CommentsConnectionOrderbyEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        parent: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        parentIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        parentNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        search: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        status: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        userId: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: false
        }
    },
    CommentsConnectionOrderbyEnum: "enum",
    Comment: {
        content: {
            format: {
                type: "PostObjectFieldFormatEnum",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        parent: {
            where: {
                type: "CommentToParentCommentConnectionWhereArgs",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        replies: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            where: {
                type: "CommentToCommentConnectionWhereArgs",
                array: false,
                arrayRequired: false,
                required: false
            }
        }
    },
    PostObjectFieldFormatEnum: "enum",
    CommentToParentCommentConnectionWhereArgs: {
        authorEmail: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        authorIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        authorNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        authorUrl: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        commentIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        commentNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        commentType: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        commentTypeIn: {
            type: "String",
            array: true,
            arrayRequired: false,
            required: false
        },
        commentTypeNotIn: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        contentAuthor: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        contentAuthorIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        contentAuthorNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        contentId: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: false
        },
        contentIdIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        contentIdNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        contentName: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        contentParent: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        contentStatus: {
            type: "PostStatusEnum",
            array: true,
            arrayRequired: false,
            required: false
        },
        contentType: {
            type: "ContentTypeEnum",
            array: true,
            arrayRequired: false,
            required: false
        },
        includeUnapproved: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        karma: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        order: {
            type: "OrderEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        orderby: {
            type: "CommentsConnectionOrderbyEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        parent: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        parentIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        parentNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        search: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        status: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        userId: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: false
        }
    },
    CommentToCommentConnectionWhereArgs: {
        authorEmail: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        authorIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        authorNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        authorUrl: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        commentIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        commentNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        commentType: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        commentTypeIn: {
            type: "String",
            array: true,
            arrayRequired: false,
            required: false
        },
        commentTypeNotIn: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        contentAuthor: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        contentAuthorIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        contentAuthorNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        contentId: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: false
        },
        contentIdIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        contentIdNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        contentName: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        contentParent: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        contentStatus: {
            type: "PostStatusEnum",
            array: true,
            arrayRequired: false,
            required: false
        },
        contentType: {
            type: "ContentTypeEnum",
            array: true,
            arrayRequired: false,
            required: false
        },
        includeUnapproved: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        karma: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        order: {
            type: "OrderEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        orderby: {
            type: "CommentsConnectionOrderbyEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        parent: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        parentIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        parentNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        search: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        status: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        userId: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: false
        }
    },
    UserToHeroConnectionWhereArgs: {
        author: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        authorIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        authorName: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        authorNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        dateQuery: {
            type: "DateQueryInput",
            array: false,
            arrayRequired: false,
            required: false
        },
        hasPassword: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        },
        id: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        in: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        mimeType: {
            type: "MimeTypeEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        name: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        nameIn: {
            type: "String",
            array: true,
            arrayRequired: false,
            required: false
        },
        notIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        orderby: {
            type: "PostObjectsConnectionOrderbyInput",
            array: true,
            arrayRequired: false,
            required: false
        },
        parent: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: false
        },
        parentIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        parentNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        password: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        search: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        stati: {
            type: "PostStatusEnum",
            array: true,
            arrayRequired: false,
            required: false
        },
        status: {
            type: "PostStatusEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        title: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        }
    },
    Hero: {
        awards: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        enqueuedScripts: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        enqueuedStylesheets: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        title: {
            format: {
                type: "PostObjectFieldFormatEnum",
                array: false,
                arrayRequired: false,
                required: false
            }
        }
    },
    NodeWithTitle: {
        title: {
            format: {
                type: "PostObjectFieldFormatEnum",
                array: false,
                arrayRequired: false,
                required: false
            }
        }
    },
    UserToMediaItemConnectionWhereArgs: {
        author: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        authorIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        authorName: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        authorNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        dateQuery: {
            type: "DateQueryInput",
            array: false,
            arrayRequired: false,
            required: false
        },
        hasPassword: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        },
        id: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        in: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        mimeType: {
            type: "MimeTypeEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        name: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        nameIn: {
            type: "String",
            array: true,
            arrayRequired: false,
            required: false
        },
        notIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        orderby: {
            type: "PostObjectsConnectionOrderbyInput",
            array: true,
            arrayRequired: false,
            required: false
        },
        parent: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: false
        },
        parentIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        parentNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        password: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        search: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        stati: {
            type: "PostStatusEnum",
            array: true,
            arrayRequired: false,
            required: false
        },
        status: {
            type: "PostStatusEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        title: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        }
    },
    MediaItem: {
        ancestors: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            where: {
                type: "HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        caption: {
            format: {
                type: "PostObjectFieldFormatEnum",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        children: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            where: {
                type: "HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        comments: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            where: {
                type: "MediaItemToCommentConnectionWhereArgs",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        description: {
            format: {
                type: "PostObjectFieldFormatEnum",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        enqueuedScripts: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        enqueuedStylesheets: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        fileSize: {
            size: {
                type: "MediaItemSizeEnum",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        sizes: {
            size: {
                type: "MediaItemSizeEnum",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        sourceUrl: {
            size: {
                type: "MediaItemSizeEnum",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        srcSet: {
            size: {
                type: "MediaItemSizeEnum",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        title: {
            format: {
                type: "PostObjectFieldFormatEnum",
                array: false,
                arrayRequired: false,
                required: false
            }
        }
    },
    HierarchicalContentNode: {
        ancestors: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            where: {
                type: "HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        children: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            where: {
                type: "HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs",
                array: false,
                arrayRequired: false,
                required: false
            }
        }
    },
    HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs: {
        contentTypes: {
            type: "ContentTypeEnum",
            array: true,
            arrayRequired: false,
            required: false
        },
        dateQuery: {
            type: "DateQueryInput",
            array: false,
            arrayRequired: false,
            required: false
        },
        hasPassword: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        },
        id: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        in: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        mimeType: {
            type: "MimeTypeEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        name: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        nameIn: {
            type: "String",
            array: true,
            arrayRequired: false,
            required: false
        },
        notIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        orderby: {
            type: "PostObjectsConnectionOrderbyInput",
            array: true,
            arrayRequired: false,
            required: false
        },
        parent: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: false
        },
        parentIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        parentNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        password: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        search: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        stati: {
            type: "PostStatusEnum",
            array: true,
            arrayRequired: false,
            required: false
        },
        status: {
            type: "PostStatusEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        title: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        }
    },
    HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs: {
        contentTypes: {
            type: "ContentTypeEnum",
            array: true,
            arrayRequired: false,
            required: false
        },
        dateQuery: {
            type: "DateQueryInput",
            array: false,
            arrayRequired: false,
            required: false
        },
        hasPassword: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        },
        id: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        in: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        mimeType: {
            type: "MimeTypeEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        name: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        nameIn: {
            type: "String",
            array: true,
            arrayRequired: false,
            required: false
        },
        notIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        orderby: {
            type: "PostObjectsConnectionOrderbyInput",
            array: true,
            arrayRequired: false,
            required: false
        },
        parent: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: false
        },
        parentIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        parentNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        password: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        search: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        stati: {
            type: "PostStatusEnum",
            array: true,
            arrayRequired: false,
            required: false
        },
        status: {
            type: "PostStatusEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        title: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        }
    },
    MediaItemToCommentConnectionWhereArgs: {
        authorEmail: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        authorIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        authorNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        authorUrl: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        commentIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        commentNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        commentType: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        commentTypeIn: {
            type: "String",
            array: true,
            arrayRequired: false,
            required: false
        },
        commentTypeNotIn: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        contentAuthor: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        contentAuthorIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        contentAuthorNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        contentId: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: false
        },
        contentIdIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        contentIdNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        contentName: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        contentParent: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        contentStatus: {
            type: "PostStatusEnum",
            array: true,
            arrayRequired: false,
            required: false
        },
        contentType: {
            type: "ContentTypeEnum",
            array: true,
            arrayRequired: false,
            required: false
        },
        includeUnapproved: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        karma: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        order: {
            type: "OrderEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        orderby: {
            type: "CommentsConnectionOrderbyEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        parent: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        parentIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        parentNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        search: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        status: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        userId: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: false
        }
    },
    MediaItemSizeEnum: "enum",
    UserToPageConnectionWhereArgs: {
        author: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        authorIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        authorName: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        authorNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        dateQuery: {
            type: "DateQueryInput",
            array: false,
            arrayRequired: false,
            required: false
        },
        hasPassword: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        },
        id: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        in: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        mimeType: {
            type: "MimeTypeEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        name: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        nameIn: {
            type: "String",
            array: true,
            arrayRequired: false,
            required: false
        },
        notIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        orderby: {
            type: "PostObjectsConnectionOrderbyInput",
            array: true,
            arrayRequired: false,
            required: false
        },
        parent: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: false
        },
        parentIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        parentNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        password: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        search: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        stati: {
            type: "PostStatusEnum",
            array: true,
            arrayRequired: false,
            required: false
        },
        status: {
            type: "PostStatusEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        title: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        }
    },
    Page: {
        ancestors: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            where: {
                type: "HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        children: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            where: {
                type: "HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        comments: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            where: {
                type: "PageToCommentConnectionWhereArgs",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        content: {
            format: {
                type: "PostObjectFieldFormatEnum",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        enqueuedScripts: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        enqueuedStylesheets: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        revisions: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            where: {
                type: "PageToRevisionConnectionWhereArgs",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        title: {
            format: {
                type: "PostObjectFieldFormatEnum",
                array: false,
                arrayRequired: false,
                required: false
            }
        }
    },
    NodeWithContentEditor: {
        content: {
            format: {
                type: "PostObjectFieldFormatEnum",
                array: false,
                arrayRequired: false,
                required: false
            }
        }
    },
    NodeWithFeaturedImage: {
        enqueuedScripts: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        enqueuedStylesheets: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            }
        }
    },
    PageToCommentConnectionWhereArgs: {
        authorEmail: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        authorIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        authorNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        authorUrl: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        commentIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        commentNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        commentType: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        commentTypeIn: {
            type: "String",
            array: true,
            arrayRequired: false,
            required: false
        },
        commentTypeNotIn: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        contentAuthor: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        contentAuthorIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        contentAuthorNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        contentId: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: false
        },
        contentIdIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        contentIdNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        contentName: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        contentParent: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        contentStatus: {
            type: "PostStatusEnum",
            array: true,
            arrayRequired: false,
            required: false
        },
        contentType: {
            type: "ContentTypeEnum",
            array: true,
            arrayRequired: false,
            required: false
        },
        includeUnapproved: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        karma: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        order: {
            type: "OrderEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        orderby: {
            type: "CommentsConnectionOrderbyEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        parent: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        parentIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        parentNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        search: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        status: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        userId: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: false
        }
    },
    PageToRevisionConnectionWhereArgs: {
        author: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        authorIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        authorName: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        authorNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        dateQuery: {
            type: "DateQueryInput",
            array: false,
            arrayRequired: false,
            required: false
        },
        hasPassword: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        },
        id: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        in: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        mimeType: {
            type: "MimeTypeEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        name: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        nameIn: {
            type: "String",
            array: true,
            arrayRequired: false,
            required: false
        },
        notIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        orderby: {
            type: "PostObjectsConnectionOrderbyInput",
            array: true,
            arrayRequired: false,
            required: false
        },
        parent: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: false
        },
        parentIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        parentNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        password: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        search: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        stati: {
            type: "PostStatusEnum",
            array: true,
            arrayRequired: false,
            required: false
        },
        status: {
            type: "PostStatusEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        title: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        }
    },
    UserToPostConnectionWhereArgs: {
        author: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        authorIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        authorName: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        authorNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        categoryId: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        categoryIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        categoryName: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        categoryNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        dateQuery: {
            type: "DateQueryInput",
            array: false,
            arrayRequired: false,
            required: false
        },
        hasPassword: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        },
        id: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        in: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        mimeType: {
            type: "MimeTypeEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        name: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        nameIn: {
            type: "String",
            array: true,
            arrayRequired: false,
            required: false
        },
        notIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        orderby: {
            type: "PostObjectsConnectionOrderbyInput",
            array: true,
            arrayRequired: false,
            required: false
        },
        parent: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: false
        },
        parentIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        parentNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        password: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        search: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        stati: {
            type: "PostStatusEnum",
            array: true,
            arrayRequired: false,
            required: false
        },
        status: {
            type: "PostStatusEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        tag: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        tagId: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        tagIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        tagNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        tagSlugAnd: {
            type: "String",
            array: true,
            arrayRequired: false,
            required: false
        },
        tagSlugIn: {
            type: "String",
            array: true,
            arrayRequired: false,
            required: false
        },
        title: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        }
    },
    Post: {
        categories: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            where: {
                type: "PostToCategoryConnectionWhereArgs",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        comments: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            where: {
                type: "PostToCommentConnectionWhereArgs",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        content: {
            format: {
                type: "PostObjectFieldFormatEnum",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        enqueuedScripts: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        enqueuedStylesheets: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        excerpt: {
            format: {
                type: "PostObjectFieldFormatEnum",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        postFormats: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            where: {
                type: "PostToPostFormatConnectionWhereArgs",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        revisions: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            where: {
                type: "PostToRevisionConnectionWhereArgs",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        tags: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            where: {
                type: "PostToTagConnectionWhereArgs",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        terms: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            where: {
                type: "PostToTermNodeConnectionWhereArgs",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        title: {
            format: {
                type: "PostObjectFieldFormatEnum",
                array: false,
                arrayRequired: false,
                required: false
            }
        }
    },
    NodeWithExcerpt: {
        excerpt: {
            format: {
                type: "PostObjectFieldFormatEnum",
                array: false,
                arrayRequired: false,
                required: false
            }
        }
    },
    PostToCategoryConnectionWhereArgs: {
        cacheDomain: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        childOf: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        childless: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        },
        descriptionLike: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        exclude: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        excludeTree: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        hideEmpty: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        },
        hierarchical: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        },
        include: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        name: {
            type: "String",
            array: true,
            arrayRequired: false,
            required: false
        },
        nameLike: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        objectIds: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        order: {
            type: "OrderEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        orderby: {
            type: "TermObjectsConnectionOrderbyEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        padCounts: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        },
        parent: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        search: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        slug: {
            type: "String",
            array: true,
            arrayRequired: false,
            required: false
        },
        termTaxonomId: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        updateTermMetaCache: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        }
    },
    TermObjectsConnectionOrderbyEnum: "enum",
    Category: {
        ancestors: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        children: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            where: {
                type: "CategoryToCategoryConnectionWhereArgs",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        contentNodes: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            where: {
                type: "CategoryToContentNodeConnectionWhereArgs",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        enqueuedScripts: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        enqueuedStylesheets: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        posts: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            where: {
                type: "CategoryToPostConnectionWhereArgs",
                array: false,
                arrayRequired: false,
                required: false
            }
        }
    },
    TermNode: {
        enqueuedScripts: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        enqueuedStylesheets: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            }
        }
    },
    CategoryToCategoryConnectionWhereArgs: {
        cacheDomain: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        childOf: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        childless: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        },
        descriptionLike: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        exclude: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        excludeTree: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        hideEmpty: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        },
        hierarchical: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        },
        include: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        name: {
            type: "String",
            array: true,
            arrayRequired: false,
            required: false
        },
        nameLike: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        objectIds: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        order: {
            type: "OrderEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        orderby: {
            type: "TermObjectsConnectionOrderbyEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        padCounts: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        },
        parent: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        search: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        slug: {
            type: "String",
            array: true,
            arrayRequired: false,
            required: false
        },
        termTaxonomId: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        updateTermMetaCache: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        }
    },
    CategoryToContentNodeConnectionWhereArgs: {
        contentTypes: {
            type: "ContentTypesOfCategoryEnum",
            array: true,
            arrayRequired: false,
            required: false
        },
        dateQuery: {
            type: "DateQueryInput",
            array: false,
            arrayRequired: false,
            required: false
        },
        hasPassword: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        },
        id: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        in: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        mimeType: {
            type: "MimeTypeEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        name: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        nameIn: {
            type: "String",
            array: true,
            arrayRequired: false,
            required: false
        },
        notIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        orderby: {
            type: "PostObjectsConnectionOrderbyInput",
            array: true,
            arrayRequired: false,
            required: false
        },
        parent: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: false
        },
        parentIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        parentNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        password: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        search: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        stati: {
            type: "PostStatusEnum",
            array: true,
            arrayRequired: false,
            required: false
        },
        status: {
            type: "PostStatusEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        title: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        }
    },
    ContentTypesOfCategoryEnum: "enum",
    CategoryToPostConnectionWhereArgs: {
        author: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        authorIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        authorName: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        authorNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        categoryId: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        categoryIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        categoryName: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        categoryNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        dateQuery: {
            type: "DateQueryInput",
            array: false,
            arrayRequired: false,
            required: false
        },
        hasPassword: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        },
        id: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        in: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        mimeType: {
            type: "MimeTypeEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        name: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        nameIn: {
            type: "String",
            array: true,
            arrayRequired: false,
            required: false
        },
        notIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        orderby: {
            type: "PostObjectsConnectionOrderbyInput",
            array: true,
            arrayRequired: false,
            required: false
        },
        parent: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: false
        },
        parentIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        parentNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        password: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        search: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        stati: {
            type: "PostStatusEnum",
            array: true,
            arrayRequired: false,
            required: false
        },
        status: {
            type: "PostStatusEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        tag: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        tagId: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        tagIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        tagNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        tagSlugAnd: {
            type: "String",
            array: true,
            arrayRequired: false,
            required: false
        },
        tagSlugIn: {
            type: "String",
            array: true,
            arrayRequired: false,
            required: false
        },
        title: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        }
    },
    PostToCommentConnectionWhereArgs: {
        authorEmail: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        authorIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        authorNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        authorUrl: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        commentIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        commentNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        commentType: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        commentTypeIn: {
            type: "String",
            array: true,
            arrayRequired: false,
            required: false
        },
        commentTypeNotIn: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        contentAuthor: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        contentAuthorIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        contentAuthorNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        contentId: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: false
        },
        contentIdIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        contentIdNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        contentName: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        contentParent: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        contentStatus: {
            type: "PostStatusEnum",
            array: true,
            arrayRequired: false,
            required: false
        },
        contentType: {
            type: "ContentTypeEnum",
            array: true,
            arrayRequired: false,
            required: false
        },
        includeUnapproved: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        karma: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        order: {
            type: "OrderEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        orderby: {
            type: "CommentsConnectionOrderbyEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        parent: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        parentIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        parentNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        search: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        status: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        userId: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: false
        }
    },
    PostToPostFormatConnectionWhereArgs: {
        cacheDomain: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        childOf: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        childless: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        },
        descriptionLike: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        exclude: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        excludeTree: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        hideEmpty: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        },
        hierarchical: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        },
        include: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        name: {
            type: "String",
            array: true,
            arrayRequired: false,
            required: false
        },
        nameLike: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        objectIds: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        order: {
            type: "OrderEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        orderby: {
            type: "TermObjectsConnectionOrderbyEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        padCounts: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        },
        parent: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        search: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        slug: {
            type: "String",
            array: true,
            arrayRequired: false,
            required: false
        },
        termTaxonomId: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        updateTermMetaCache: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        }
    },
    PostFormat: {
        contentNodes: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            where: {
                type: "PostFormatToContentNodeConnectionWhereArgs",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        enqueuedScripts: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        enqueuedStylesheets: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        posts: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            where: {
                type: "PostFormatToPostConnectionWhereArgs",
                array: false,
                arrayRequired: false,
                required: false
            }
        }
    },
    PostFormatToContentNodeConnectionWhereArgs: {
        contentTypes: {
            type: "ContentTypesOfPostFormatEnum",
            array: true,
            arrayRequired: false,
            required: false
        },
        dateQuery: {
            type: "DateQueryInput",
            array: false,
            arrayRequired: false,
            required: false
        },
        hasPassword: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        },
        id: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        in: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        mimeType: {
            type: "MimeTypeEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        name: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        nameIn: {
            type: "String",
            array: true,
            arrayRequired: false,
            required: false
        },
        notIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        orderby: {
            type: "PostObjectsConnectionOrderbyInput",
            array: true,
            arrayRequired: false,
            required: false
        },
        parent: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: false
        },
        parentIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        parentNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        password: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        search: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        stati: {
            type: "PostStatusEnum",
            array: true,
            arrayRequired: false,
            required: false
        },
        status: {
            type: "PostStatusEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        title: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        }
    },
    ContentTypesOfPostFormatEnum: "enum",
    PostFormatToPostConnectionWhereArgs: {
        author: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        authorIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        authorName: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        authorNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        categoryId: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        categoryIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        categoryName: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        categoryNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        dateQuery: {
            type: "DateQueryInput",
            array: false,
            arrayRequired: false,
            required: false
        },
        hasPassword: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        },
        id: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        in: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        mimeType: {
            type: "MimeTypeEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        name: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        nameIn: {
            type: "String",
            array: true,
            arrayRequired: false,
            required: false
        },
        notIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        orderby: {
            type: "PostObjectsConnectionOrderbyInput",
            array: true,
            arrayRequired: false,
            required: false
        },
        parent: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: false
        },
        parentIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        parentNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        password: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        search: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        stati: {
            type: "PostStatusEnum",
            array: true,
            arrayRequired: false,
            required: false
        },
        status: {
            type: "PostStatusEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        tag: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        tagId: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        tagIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        tagNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        tagSlugAnd: {
            type: "String",
            array: true,
            arrayRequired: false,
            required: false
        },
        tagSlugIn: {
            type: "String",
            array: true,
            arrayRequired: false,
            required: false
        },
        title: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        }
    },
    PostToRevisionConnectionWhereArgs: {
        author: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        authorIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        authorName: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        authorNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        categoryId: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        categoryIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        categoryName: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        categoryNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        dateQuery: {
            type: "DateQueryInput",
            array: false,
            arrayRequired: false,
            required: false
        },
        hasPassword: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        },
        id: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        in: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        mimeType: {
            type: "MimeTypeEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        name: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        nameIn: {
            type: "String",
            array: true,
            arrayRequired: false,
            required: false
        },
        notIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        orderby: {
            type: "PostObjectsConnectionOrderbyInput",
            array: true,
            arrayRequired: false,
            required: false
        },
        parent: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: false
        },
        parentIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        parentNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        password: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        search: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        stati: {
            type: "PostStatusEnum",
            array: true,
            arrayRequired: false,
            required: false
        },
        status: {
            type: "PostStatusEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        tag: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        tagId: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        tagIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        tagNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        tagSlugAnd: {
            type: "String",
            array: true,
            arrayRequired: false,
            required: false
        },
        tagSlugIn: {
            type: "String",
            array: true,
            arrayRequired: false,
            required: false
        },
        title: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        }
    },
    PostToTagConnectionWhereArgs: {
        cacheDomain: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        childOf: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        childless: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        },
        descriptionLike: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        exclude: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        excludeTree: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        hideEmpty: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        },
        hierarchical: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        },
        include: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        name: {
            type: "String",
            array: true,
            arrayRequired: false,
            required: false
        },
        nameLike: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        objectIds: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        order: {
            type: "OrderEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        orderby: {
            type: "TermObjectsConnectionOrderbyEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        padCounts: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        },
        parent: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        search: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        slug: {
            type: "String",
            array: true,
            arrayRequired: false,
            required: false
        },
        termTaxonomId: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        updateTermMetaCache: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        }
    },
    Tag: {
        contentNodes: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            where: {
                type: "TagToContentNodeConnectionWhereArgs",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        enqueuedScripts: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        enqueuedStylesheets: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        posts: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            where: {
                type: "TagToPostConnectionWhereArgs",
                array: false,
                arrayRequired: false,
                required: false
            }
        }
    },
    TagToContentNodeConnectionWhereArgs: {
        contentTypes: {
            type: "ContentTypesOfTagEnum",
            array: true,
            arrayRequired: false,
            required: false
        },
        dateQuery: {
            type: "DateQueryInput",
            array: false,
            arrayRequired: false,
            required: false
        },
        hasPassword: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        },
        id: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        in: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        mimeType: {
            type: "MimeTypeEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        name: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        nameIn: {
            type: "String",
            array: true,
            arrayRequired: false,
            required: false
        },
        notIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        orderby: {
            type: "PostObjectsConnectionOrderbyInput",
            array: true,
            arrayRequired: false,
            required: false
        },
        parent: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: false
        },
        parentIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        parentNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        password: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        search: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        stati: {
            type: "PostStatusEnum",
            array: true,
            arrayRequired: false,
            required: false
        },
        status: {
            type: "PostStatusEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        title: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        }
    },
    ContentTypesOfTagEnum: "enum",
    TagToPostConnectionWhereArgs: {
        author: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        authorIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        authorName: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        authorNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        categoryId: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        categoryIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        categoryName: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        categoryNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        dateQuery: {
            type: "DateQueryInput",
            array: false,
            arrayRequired: false,
            required: false
        },
        hasPassword: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        },
        id: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        in: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        mimeType: {
            type: "MimeTypeEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        name: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        nameIn: {
            type: "String",
            array: true,
            arrayRequired: false,
            required: false
        },
        notIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        orderby: {
            type: "PostObjectsConnectionOrderbyInput",
            array: true,
            arrayRequired: false,
            required: false
        },
        parent: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: false
        },
        parentIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        parentNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        password: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        search: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        stati: {
            type: "PostStatusEnum",
            array: true,
            arrayRequired: false,
            required: false
        },
        status: {
            type: "PostStatusEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        tag: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        tagId: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        tagIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        tagNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        tagSlugAnd: {
            type: "String",
            array: true,
            arrayRequired: false,
            required: false
        },
        tagSlugIn: {
            type: "String",
            array: true,
            arrayRequired: false,
            required: false
        },
        title: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        }
    },
    PostToTermNodeConnectionWhereArgs: {
        cacheDomain: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        childOf: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        childless: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        },
        descriptionLike: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        exclude: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        excludeTree: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        hideEmpty: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        },
        hierarchical: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        },
        include: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        name: {
            type: "String",
            array: true,
            arrayRequired: false,
            required: false
        },
        nameLike: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        objectIds: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        order: {
            type: "OrderEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        orderby: {
            type: "TermObjectsConnectionOrderbyEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        padCounts: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        },
        parent: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        search: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        slug: {
            type: "String",
            array: true,
            arrayRequired: false,
            required: false
        },
        taxonomies: {
            type: "TaxonomyEnum",
            array: true,
            arrayRequired: false,
            required: false
        },
        termTaxonomId: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        updateTermMetaCache: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        }
    },
    TaxonomyEnum: "enum",
    UserToContentRevisionUnionConnectionWhereArgs: {
        contentTypes: {
            type: "ContentTypeEnum",
            array: true,
            arrayRequired: false,
            required: false
        },
        dateQuery: {
            type: "DateQueryInput",
            array: false,
            arrayRequired: false,
            required: false
        },
        hasPassword: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        },
        id: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        in: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        mimeType: {
            type: "MimeTypeEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        name: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        nameIn: {
            type: "String",
            array: true,
            arrayRequired: false,
            required: false
        },
        notIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        orderby: {
            type: "PostObjectsConnectionOrderbyInput",
            array: true,
            arrayRequired: false,
            required: false
        },
        parent: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: false
        },
        parentIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        parentNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        password: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        search: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        stati: {
            type: "PostStatusEnum",
            array: true,
            arrayRequired: false,
            required: false
        },
        status: {
            type: "PostStatusEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        title: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        }
    },
    RootQueryToBadgeConnectionWhereArgs: {
        author: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        authorIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        authorName: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        authorNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        dateQuery: {
            type: "DateQueryInput",
            array: false,
            arrayRequired: false,
            required: false
        },
        hasPassword: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        },
        id: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        in: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        mimeType: {
            type: "MimeTypeEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        name: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        nameIn: {
            type: "String",
            array: true,
            arrayRequired: false,
            required: false
        },
        notIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        orderby: {
            type: "PostObjectsConnectionOrderbyInput",
            array: true,
            arrayRequired: false,
            required: false
        },
        parent: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: false
        },
        parentIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        parentNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        password: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        search: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        stati: {
            type: "PostStatusEnum",
            array: true,
            arrayRequired: false,
            required: false
        },
        status: {
            type: "PostStatusEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        title: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        }
    },
    RootQueryToCategoryConnectionWhereArgs: {
        cacheDomain: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        childOf: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        childless: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        },
        descriptionLike: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        exclude: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        excludeTree: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        hideEmpty: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        },
        hierarchical: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        },
        include: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        name: {
            type: "String",
            array: true,
            arrayRequired: false,
            required: false
        },
        nameLike: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        objectIds: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        order: {
            type: "OrderEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        orderby: {
            type: "TermObjectsConnectionOrderbyEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        padCounts: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        },
        parent: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        search: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        slug: {
            type: "String",
            array: true,
            arrayRequired: false,
            required: false
        },
        termTaxonomId: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        updateTermMetaCache: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        }
    },
    CategoryIdType: "enum",
    RootQueryToCommentConnectionWhereArgs: {
        authorEmail: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        authorIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        authorNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        authorUrl: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        commentIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        commentNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        commentType: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        commentTypeIn: {
            type: "String",
            array: true,
            arrayRequired: false,
            required: false
        },
        commentTypeNotIn: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        contentAuthor: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        contentAuthorIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        contentAuthorNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        contentId: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: false
        },
        contentIdIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        contentIdNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        contentName: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        contentParent: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        contentStatus: {
            type: "PostStatusEnum",
            array: true,
            arrayRequired: false,
            required: false
        },
        contentType: {
            type: "ContentTypeEnum",
            array: true,
            arrayRequired: false,
            required: false
        },
        includeUnapproved: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        karma: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        order: {
            type: "OrderEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        orderby: {
            type: "CommentsConnectionOrderbyEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        parent: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        parentIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        parentNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        search: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        status: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        userId: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: false
        }
    },
    ContentNodeIdTypeEnum: "enum",
    RootQueryToContentNodeConnectionWhereArgs: {
        contentTypes: {
            type: "ContentTypeEnum",
            array: true,
            arrayRequired: false,
            required: false
        },
        dateQuery: {
            type: "DateQueryInput",
            array: false,
            arrayRequired: false,
            required: false
        },
        hasPassword: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        },
        id: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        in: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        mimeType: {
            type: "MimeTypeEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        name: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        nameIn: {
            type: "String",
            array: true,
            arrayRequired: false,
            required: false
        },
        notIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        orderby: {
            type: "PostObjectsConnectionOrderbyInput",
            array: true,
            arrayRequired: false,
            required: false
        },
        parent: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: false
        },
        parentIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        parentNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        password: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        search: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        stati: {
            type: "PostStatusEnum",
            array: true,
            arrayRequired: false,
            required: false
        },
        status: {
            type: "PostStatusEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        title: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        }
    },
    ContentTypeIdTypeEnum: "enum",
    HeroIdType: "enum",
    RootQueryToHeroConnectionWhereArgs: {
        author: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        authorIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        authorName: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        authorNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        dateQuery: {
            type: "DateQueryInput",
            array: false,
            arrayRequired: false,
            required: false
        },
        hasPassword: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        },
        id: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        in: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        mimeType: {
            type: "MimeTypeEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        name: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        nameIn: {
            type: "String",
            array: true,
            arrayRequired: false,
            required: false
        },
        notIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        orderby: {
            type: "PostObjectsConnectionOrderbyInput",
            array: true,
            arrayRequired: false,
            required: false
        },
        parent: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: false
        },
        parentIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        parentNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        password: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        search: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        stati: {
            type: "PostStatusEnum",
            array: true,
            arrayRequired: false,
            required: false
        },
        status: {
            type: "PostStatusEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        title: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        }
    },
    MediaItemIdType: "enum",
    RootQueryToMediaItemConnectionWhereArgs: {
        author: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        authorIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        authorName: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        authorNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        dateQuery: {
            type: "DateQueryInput",
            array: false,
            arrayRequired: false,
            required: false
        },
        hasPassword: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        },
        id: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        in: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        mimeType: {
            type: "MimeTypeEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        name: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        nameIn: {
            type: "String",
            array: true,
            arrayRequired: false,
            required: false
        },
        notIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        orderby: {
            type: "PostObjectsConnectionOrderbyInput",
            array: true,
            arrayRequired: false,
            required: false
        },
        parent: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: false
        },
        parentIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        parentNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        password: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        search: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        stati: {
            type: "PostStatusEnum",
            array: true,
            arrayRequired: false,
            required: false
        },
        status: {
            type: "PostStatusEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        title: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        }
    },
    MenuNodeIdTypeEnum: "enum",
    Menu: {
        menuItems: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            where: {
                type: "MenuToMenuItemConnectionWhereArgs",
                array: false,
                arrayRequired: false,
                required: false
            }
        }
    },
    MenuLocationEnum: "enum",
    MenuToMenuItemConnectionWhereArgs: {
        id: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        location: {
            type: "MenuLocationEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        parentDatabaseId: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        parentId: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: false
        }
    },
    MenuItem: {
        childItems: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            where: {
                type: "MenuItemToMenuItemConnectionWhereArgs",
                array: false,
                arrayRequired: false,
                required: false
            }
        }
    },
    MenuItemToMenuItemConnectionWhereArgs: {
        id: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        location: {
            type: "MenuLocationEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        parentDatabaseId: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        parentId: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: false
        }
    },
    Movie: {
        content: {
            format: {
                type: "PostObjectFieldFormatEnum",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        enqueuedScripts: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        enqueuedStylesheets: {
            first: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            last: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            },
            after: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            },
            before: {
                type: "String",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        title: {
            format: {
                type: "PostObjectFieldFormatEnum",
                array: false,
                arrayRequired: false,
                required: false
            }
        }
    },
    MenuItemNodeIdTypeEnum: "enum",
    RootQueryToMenuItemConnectionWhereArgs: {
        id: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        location: {
            type: "MenuLocationEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        parentDatabaseId: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        parentId: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: false
        }
    },
    RootQueryToMenuConnectionWhereArgs: {
        id: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        location: {
            type: "MenuLocationEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        slug: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        }
    },
    MovieIdType: "enum",
    RootQueryToMovieConnectionWhereArgs: {
        dateQuery: {
            type: "DateQueryInput",
            array: false,
            arrayRequired: false,
            required: false
        },
        hasPassword: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        },
        id: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        in: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        mimeType: {
            type: "MimeTypeEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        name: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        nameIn: {
            type: "String",
            array: true,
            arrayRequired: false,
            required: false
        },
        notIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        orderby: {
            type: "PostObjectsConnectionOrderbyInput",
            array: true,
            arrayRequired: false,
            required: false
        },
        parent: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: false
        },
        parentIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        parentNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        password: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        search: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        stati: {
            type: "PostStatusEnum",
            array: true,
            arrayRequired: false,
            required: false
        },
        status: {
            type: "PostStatusEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        title: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        }
    },
    PageIdType: "enum",
    RootQueryToPageConnectionWhereArgs: {
        author: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        authorIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        authorName: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        authorNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        dateQuery: {
            type: "DateQueryInput",
            array: false,
            arrayRequired: false,
            required: false
        },
        hasPassword: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        },
        id: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        in: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        mimeType: {
            type: "MimeTypeEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        name: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        nameIn: {
            type: "String",
            array: true,
            arrayRequired: false,
            required: false
        },
        notIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        orderby: {
            type: "PostObjectsConnectionOrderbyInput",
            array: true,
            arrayRequired: false,
            required: false
        },
        parent: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: false
        },
        parentIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        parentNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        password: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        search: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        stati: {
            type: "PostStatusEnum",
            array: true,
            arrayRequired: false,
            required: false
        },
        status: {
            type: "PostStatusEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        title: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        }
    },
    PostIdType: "enum",
    PostFormatIdType: "enum",
    RootQueryToPostFormatConnectionWhereArgs: {
        cacheDomain: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        childOf: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        childless: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        },
        descriptionLike: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        exclude: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        excludeTree: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        hideEmpty: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        },
        hierarchical: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        },
        include: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        name: {
            type: "String",
            array: true,
            arrayRequired: false,
            required: false
        },
        nameLike: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        objectIds: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        order: {
            type: "OrderEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        orderby: {
            type: "TermObjectsConnectionOrderbyEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        padCounts: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        },
        parent: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        search: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        slug: {
            type: "String",
            array: true,
            arrayRequired: false,
            required: false
        },
        termTaxonomId: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        updateTermMetaCache: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        }
    },
    RootQueryToPostConnectionWhereArgs: {
        author: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        authorIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        authorName: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        authorNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        categoryId: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        categoryIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        categoryName: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        categoryNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        dateQuery: {
            type: "DateQueryInput",
            array: false,
            arrayRequired: false,
            required: false
        },
        hasPassword: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        },
        id: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        in: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        mimeType: {
            type: "MimeTypeEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        name: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        nameIn: {
            type: "String",
            array: true,
            arrayRequired: false,
            required: false
        },
        notIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        orderby: {
            type: "PostObjectsConnectionOrderbyInput",
            array: true,
            arrayRequired: false,
            required: false
        },
        parent: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: false
        },
        parentIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        parentNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        password: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        search: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        stati: {
            type: "PostStatusEnum",
            array: true,
            arrayRequired: false,
            required: false
        },
        status: {
            type: "PostStatusEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        tag: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        tagId: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        tagIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        tagNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        tagSlugAnd: {
            type: "String",
            array: true,
            arrayRequired: false,
            required: false
        },
        tagSlugIn: {
            type: "String",
            array: true,
            arrayRequired: false,
            required: false
        },
        title: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        }
    },
    RootQueryToContentRevisionUnionConnectionWhereArgs: {
        contentTypes: {
            type: "ContentTypeEnum",
            array: true,
            arrayRequired: false,
            required: false
        },
        dateQuery: {
            type: "DateQueryInput",
            array: false,
            arrayRequired: false,
            required: false
        },
        hasPassword: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        },
        id: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        in: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        mimeType: {
            type: "MimeTypeEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        name: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        nameIn: {
            type: "String",
            array: true,
            arrayRequired: false,
            required: false
        },
        notIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        orderby: {
            type: "PostObjectsConnectionOrderbyInput",
            array: true,
            arrayRequired: false,
            required: false
        },
        parent: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: false
        },
        parentIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        parentNotIn: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        password: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        search: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        stati: {
            type: "PostStatusEnum",
            array: true,
            arrayRequired: false,
            required: false
        },
        status: {
            type: "PostStatusEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        title: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        }
    },
    TagIdType: "enum",
    RootQueryToTagConnectionWhereArgs: {
        cacheDomain: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        childOf: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        childless: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        },
        descriptionLike: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        exclude: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        excludeTree: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        hideEmpty: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        },
        hierarchical: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        },
        include: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        name: {
            type: "String",
            array: true,
            arrayRequired: false,
            required: false
        },
        nameLike: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        objectIds: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        order: {
            type: "OrderEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        orderby: {
            type: "TermObjectsConnectionOrderbyEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        padCounts: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        },
        parent: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        search: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        slug: {
            type: "String",
            array: true,
            arrayRequired: false,
            required: false
        },
        termTaxonomId: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        updateTermMetaCache: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        }
    },
    TaxonomyIdTypeEnum: "enum",
    TermNodeIdTypeEnum: "enum",
    RootQueryToTermNodeConnectionWhereArgs: {
        cacheDomain: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        childOf: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        childless: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        },
        descriptionLike: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        exclude: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        excludeTree: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        hideEmpty: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        },
        hierarchical: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        },
        include: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        name: {
            type: "String",
            array: true,
            arrayRequired: false,
            required: false
        },
        nameLike: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        objectIds: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        order: {
            type: "OrderEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        orderby: {
            type: "TermObjectsConnectionOrderbyEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        padCounts: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        },
        parent: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        search: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        slug: {
            type: "String",
            array: true,
            arrayRequired: false,
            required: false
        },
        taxonomies: {
            type: "TaxonomyEnum",
            array: true,
            arrayRequired: false,
            required: false
        },
        termTaxonomId: {
            type: "ID",
            array: true,
            arrayRequired: false,
            required: false
        },
        updateTermMetaCache: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        }
    },
    UserNodeIdTypeEnum: "enum",
    RootQueryToUserConnectionWhereArgs: {
        exclude: {
            type: "Int",
            array: true,
            arrayRequired: false,
            required: false
        },
        hasPublishedPosts: {
            type: "ContentTypeEnum",
            array: true,
            arrayRequired: false,
            required: false
        },
        include: {
            type: "Int",
            array: true,
            arrayRequired: false,
            required: false
        },
        login: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        loginIn: {
            type: "String",
            array: true,
            arrayRequired: false,
            required: false
        },
        loginNotIn: {
            type: "String",
            array: true,
            arrayRequired: false,
            required: false
        },
        nicename: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        nicenameIn: {
            type: "String",
            array: true,
            arrayRequired: false,
            required: false
        },
        nicenameNotIn: {
            type: "String",
            array: true,
            arrayRequired: false,
            required: false
        },
        orderby: {
            type: "UsersConnectionOrderbyInput",
            array: true,
            arrayRequired: false,
            required: false
        },
        role: {
            type: "UserRoleEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        roleIn: {
            type: "UserRoleEnum",
            array: true,
            arrayRequired: false,
            required: false
        },
        roleNotIn: {
            type: "UserRoleEnum",
            array: true,
            arrayRequired: false,
            required: false
        },
        search: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        searchColumns: {
            type: "UsersConnectionSearchColumnEnum",
            array: true,
            arrayRequired: false,
            required: false
        }
    },
    UsersConnectionOrderbyInput: {
        field: {
            type: "UsersConnectionOrderbyEnum",
            array: false,
            arrayRequired: false,
            required: true
        },
        order: {
            type: "OrderEnum",
            array: false,
            arrayRequired: false,
            required: false
        }
    },
    UsersConnectionOrderbyEnum: "enum",
    UserRoleEnum: "enum",
    UsersConnectionSearchColumnEnum: "enum",
    RootMutation: {
        createBadge: {
            input: {
                type: "CreateBadgeInput",
                array: false,
                arrayRequired: false,
                required: true
            }
        },
        createCategory: {
            input: {
                type: "CreateCategoryInput",
                array: false,
                arrayRequired: false,
                required: true
            }
        },
        createComment: {
            input: {
                type: "CreateCommentInput",
                array: false,
                arrayRequired: false,
                required: true
            }
        },
        createHero: {
            input: {
                type: "CreateHeroInput",
                array: false,
                arrayRequired: false,
                required: true
            }
        },
        createMediaItem: {
            input: {
                type: "CreateMediaItemInput",
                array: false,
                arrayRequired: false,
                required: true
            }
        },
        createMovie: {
            input: {
                type: "CreateMovieInput",
                array: false,
                arrayRequired: false,
                required: true
            }
        },
        createPage: {
            input: {
                type: "CreatePageInput",
                array: false,
                arrayRequired: false,
                required: true
            }
        },
        createPost: {
            input: {
                type: "CreatePostInput",
                array: false,
                arrayRequired: false,
                required: true
            }
        },
        createPostFormat: {
            input: {
                type: "CreatePostFormatInput",
                array: false,
                arrayRequired: false,
                required: true
            }
        },
        createTag: {
            input: {
                type: "CreateTagInput",
                array: false,
                arrayRequired: false,
                required: true
            }
        },
        createUser: {
            input: {
                type: "CreateUserInput",
                array: false,
                arrayRequired: false,
                required: true
            }
        },
        deleteBadge: {
            input: {
                type: "DeleteBadgeInput",
                array: false,
                arrayRequired: false,
                required: true
            }
        },
        deleteCategory: {
            input: {
                type: "DeleteCategoryInput",
                array: false,
                arrayRequired: false,
                required: true
            }
        },
        deleteComment: {
            input: {
                type: "DeleteCommentInput",
                array: false,
                arrayRequired: false,
                required: true
            }
        },
        deleteHero: {
            input: {
                type: "DeleteHeroInput",
                array: false,
                arrayRequired: false,
                required: true
            }
        },
        deleteMediaItem: {
            input: {
                type: "DeleteMediaItemInput",
                array: false,
                arrayRequired: false,
                required: true
            }
        },
        deleteMovie: {
            input: {
                type: "DeleteMovieInput",
                array: false,
                arrayRequired: false,
                required: true
            }
        },
        deletePage: {
            input: {
                type: "DeletePageInput",
                array: false,
                arrayRequired: false,
                required: true
            }
        },
        deletePost: {
            input: {
                type: "DeletePostInput",
                array: false,
                arrayRequired: false,
                required: true
            }
        },
        deletePostFormat: {
            input: {
                type: "DeletePostFormatInput",
                array: false,
                arrayRequired: false,
                required: true
            }
        },
        deleteTag: {
            input: {
                type: "DeleteTagInput",
                array: false,
                arrayRequired: false,
                required: true
            }
        },
        deleteUser: {
            input: {
                type: "DeleteUserInput",
                array: false,
                arrayRequired: false,
                required: true
            }
        },
        generateAuthorizationCode: {
            input: {
                type: "GenerateAuthorizationCodeInput",
                array: false,
                arrayRequired: false,
                required: true
            }
        },
        increaseCount: {
            count: {
                type: "Int",
                array: false,
                arrayRequired: false,
                required: false
            }
        },
        registerUser: {
            input: {
                type: "RegisterUserInput",
                array: false,
                arrayRequired: false,
                required: true
            }
        },
        resetUserPassword: {
            input: {
                type: "ResetUserPasswordInput",
                array: false,
                arrayRequired: false,
                required: true
            }
        },
        restoreComment: {
            input: {
                type: "RestoreCommentInput",
                array: false,
                arrayRequired: false,
                required: true
            }
        },
        sendPasswordResetEmail: {
            input: {
                type: "SendPasswordResetEmailInput",
                array: false,
                arrayRequired: false,
                required: true
            }
        },
        updateBadge: {
            input: {
                type: "UpdateBadgeInput",
                array: false,
                arrayRequired: false,
                required: true
            }
        },
        updateCategory: {
            input: {
                type: "UpdateCategoryInput",
                array: false,
                arrayRequired: false,
                required: true
            }
        },
        updateComment: {
            input: {
                type: "UpdateCommentInput",
                array: false,
                arrayRequired: false,
                required: true
            }
        },
        updateHero: {
            input: {
                type: "UpdateHeroInput",
                array: false,
                arrayRequired: false,
                required: true
            }
        },
        updateMediaItem: {
            input: {
                type: "UpdateMediaItemInput",
                array: false,
                arrayRequired: false,
                required: true
            }
        },
        updateMovie: {
            input: {
                type: "UpdateMovieInput",
                array: false,
                arrayRequired: false,
                required: true
            }
        },
        updatePage: {
            input: {
                type: "UpdatePageInput",
                array: false,
                arrayRequired: false,
                required: true
            }
        },
        updatePost: {
            input: {
                type: "UpdatePostInput",
                array: false,
                arrayRequired: false,
                required: true
            }
        },
        updatePostFormat: {
            input: {
                type: "UpdatePostFormatInput",
                array: false,
                arrayRequired: false,
                required: true
            }
        },
        updateSettings: {
            input: {
                type: "UpdateSettingsInput",
                array: false,
                arrayRequired: false,
                required: true
            }
        },
        updateTag: {
            input: {
                type: "UpdateTagInput",
                array: false,
                arrayRequired: false,
                required: true
            }
        },
        updateUser: {
            input: {
                type: "UpdateUserInput",
                array: false,
                arrayRequired: false,
                required: true
            }
        }
    },
    CreateBadgeInput: {
        authorId: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: false
        },
        clientMutationId: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        date: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        menuOrder: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        password: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        slug: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        status: {
            type: "PostStatusEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        title: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        }
    },
    CreateCategoryInput: {
        aliasOf: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        clientMutationId: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        description: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        name: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: true
        },
        parentId: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: false
        },
        slug: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        }
    },
    CreateCommentInput: {
        approved: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        author: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        authorEmail: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        authorUrl: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        clientMutationId: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        commentOn: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        content: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        date: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        parent: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: false
        },
        type: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        }
    },
    CreateHeroInput: {
        authorId: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: false
        },
        clientMutationId: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        date: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        menuOrder: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        password: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        slug: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        status: {
            type: "PostStatusEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        title: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        }
    },
    CreateMediaItemInput: {
        altText: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        authorId: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: false
        },
        caption: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        clientMutationId: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        commentStatus: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        date: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        dateGmt: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        description: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        filePath: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        fileType: {
            type: "MimeTypeEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        parentId: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: false
        },
        pingStatus: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        slug: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        status: {
            type: "MediaItemStatusEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        title: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        }
    },
    MediaItemStatusEnum: "enum",
    CreateMovieInput: {
        clientMutationId: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        content: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        date: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        menuOrder: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        password: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        slug: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        status: {
            type: "PostStatusEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        title: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        }
    },
    CreatePageInput: {
        authorId: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: false
        },
        clientMutationId: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        commentStatus: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        content: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        date: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        menuOrder: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        parentId: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: false
        },
        password: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        slug: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        status: {
            type: "PostStatusEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        title: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        }
    },
    CreatePostInput: {
        authorId: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: false
        },
        categories: {
            type: "PostCategoriesInput",
            array: false,
            arrayRequired: false,
            required: false
        },
        clientMutationId: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        commentStatus: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        content: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        date: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        excerpt: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        menuOrder: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        password: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        pingStatus: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        pinged: {
            type: "String",
            array: true,
            arrayRequired: false,
            required: false
        },
        postFormats: {
            type: "PostPostFormatsInput",
            array: false,
            arrayRequired: false,
            required: false
        },
        slug: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        status: {
            type: "PostStatusEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        tags: {
            type: "PostTagsInput",
            array: false,
            arrayRequired: false,
            required: false
        },
        title: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        toPing: {
            type: "String",
            array: true,
            arrayRequired: false,
            required: false
        }
    },
    PostCategoriesInput: {
        append: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        },
        nodes: {
            type: "PostCategoriesNodeInput",
            array: true,
            arrayRequired: false,
            required: false
        }
    },
    PostCategoriesNodeInput: {
        description: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        id: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: false
        },
        name: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        slug: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        }
    },
    PostPostFormatsInput: {
        append: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        },
        nodes: {
            type: "PostPostFormatsNodeInput",
            array: true,
            arrayRequired: false,
            required: false
        }
    },
    PostPostFormatsNodeInput: {
        description: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        id: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: false
        },
        name: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        slug: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        }
    },
    PostTagsInput: {
        append: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        },
        nodes: {
            type: "PostTagsNodeInput",
            array: true,
            arrayRequired: false,
            required: false
        }
    },
    PostTagsNodeInput: {
        description: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        id: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: false
        },
        name: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        slug: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        }
    },
    CreatePostFormatInput: {
        aliasOf: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        clientMutationId: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        description: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        name: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: true
        },
        slug: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        }
    },
    CreateTagInput: {
        aliasOf: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        clientMutationId: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        description: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        name: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: true
        },
        slug: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        }
    },
    CreateUserInput: {
        aim: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        clientMutationId: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        description: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        displayName: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        email: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        firstName: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        jabber: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        lastName: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        locale: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        nicename: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        nickname: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        password: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        registered: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        richEditing: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        roles: {
            type: "String",
            array: true,
            arrayRequired: false,
            required: false
        },
        username: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: true
        },
        websiteUrl: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        yim: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        }
    },
    DeleteBadgeInput: {
        clientMutationId: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        forceDelete: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        },
        id: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: true
        }
    },
    DeleteCategoryInput: {
        clientMutationId: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        id: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: true
        }
    },
    DeleteCommentInput: {
        clientMutationId: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        forceDelete: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        },
        id: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: true
        }
    },
    DeleteHeroInput: {
        clientMutationId: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        forceDelete: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        },
        id: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: true
        }
    },
    DeleteMediaItemInput: {
        clientMutationId: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        forceDelete: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        },
        id: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: true
        }
    },
    DeleteMovieInput: {
        clientMutationId: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        forceDelete: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        },
        id: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: true
        }
    },
    DeletePageInput: {
        clientMutationId: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        forceDelete: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        },
        id: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: true
        }
    },
    DeletePostInput: {
        clientMutationId: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        forceDelete: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        },
        id: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: true
        }
    },
    DeletePostFormatInput: {
        clientMutationId: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        id: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: true
        }
    },
    DeleteTagInput: {
        clientMutationId: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        id: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: true
        }
    },
    DeleteUserInput: {
        clientMutationId: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        id: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: true
        },
        reassignId: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: false
        }
    },
    GenerateAuthorizationCodeInput: {
        clientMutationId: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        email: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        password: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        username: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        }
    },
    RegisterUserInput: {
        aim: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        clientMutationId: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        description: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        displayName: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        email: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        firstName: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        jabber: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        lastName: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        locale: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        nicename: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        nickname: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        password: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        registered: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        richEditing: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        username: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: true
        },
        websiteUrl: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        yim: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        }
    },
    ResetUserPasswordInput: {
        clientMutationId: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        key: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        login: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        password: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        }
    },
    RestoreCommentInput: {
        clientMutationId: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        id: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: true
        }
    },
    SendPasswordResetEmailInput: {
        clientMutationId: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        username: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: true
        }
    },
    UpdateBadgeInput: {
        authorId: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: false
        },
        clientMutationId: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        date: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        id: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: true
        },
        menuOrder: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        password: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        slug: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        status: {
            type: "PostStatusEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        title: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        }
    },
    UpdateCategoryInput: {
        aliasOf: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        clientMutationId: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        description: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        id: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: true
        },
        name: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        parentId: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: false
        },
        slug: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        }
    },
    UpdateCommentInput: {
        approved: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        author: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        authorEmail: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        authorUrl: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        clientMutationId: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        commentOn: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        content: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        date: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        id: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: true
        },
        parent: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: false
        },
        type: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        }
    },
    UpdateHeroInput: {
        authorId: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: false
        },
        clientMutationId: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        date: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        id: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: true
        },
        menuOrder: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        password: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        slug: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        status: {
            type: "PostStatusEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        title: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        }
    },
    UpdateMediaItemInput: {
        altText: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        authorId: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: false
        },
        caption: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        clientMutationId: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        commentStatus: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        date: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        dateGmt: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        description: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        filePath: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        fileType: {
            type: "MimeTypeEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        id: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: true
        },
        parentId: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: false
        },
        pingStatus: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        slug: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        status: {
            type: "MediaItemStatusEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        title: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        }
    },
    UpdateMovieInput: {
        clientMutationId: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        content: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        date: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        id: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: true
        },
        menuOrder: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        password: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        slug: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        status: {
            type: "PostStatusEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        title: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        }
    },
    UpdatePageInput: {
        authorId: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: false
        },
        clientMutationId: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        commentStatus: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        content: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        date: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        id: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: true
        },
        menuOrder: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        parentId: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: false
        },
        password: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        slug: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        status: {
            type: "PostStatusEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        title: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        }
    },
    UpdatePostInput: {
        authorId: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: false
        },
        categories: {
            type: "PostCategoriesInput",
            array: false,
            arrayRequired: false,
            required: false
        },
        clientMutationId: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        commentStatus: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        content: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        date: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        excerpt: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        id: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: true
        },
        menuOrder: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        password: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        pingStatus: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        pinged: {
            type: "String",
            array: true,
            arrayRequired: false,
            required: false
        },
        postFormats: {
            type: "PostPostFormatsInput",
            array: false,
            arrayRequired: false,
            required: false
        },
        slug: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        status: {
            type: "PostStatusEnum",
            array: false,
            arrayRequired: false,
            required: false
        },
        tags: {
            type: "PostTagsInput",
            array: false,
            arrayRequired: false,
            required: false
        },
        title: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        toPing: {
            type: "String",
            array: true,
            arrayRequired: false,
            required: false
        }
    },
    UpdatePostFormatInput: {
        aliasOf: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        clientMutationId: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        description: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        id: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: true
        },
        name: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        slug: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        }
    },
    UpdateSettingsInput: {
        clientMutationId: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        discussionSettingsDefaultCommentStatus: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        discussionSettingsDefaultPingStatus: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        generalSettingsDateFormat: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        generalSettingsDescription: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        generalSettingsEmail: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        generalSettingsLanguage: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        generalSettingsStartOfWeek: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        generalSettingsTimeFormat: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        generalSettingsTimezone: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        generalSettingsTitle: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        generalSettingsUrl: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        readingSettingsPostsPerPage: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        writingSettingsDefaultCategory: {
            type: "Int",
            array: false,
            arrayRequired: false,
            required: false
        },
        writingSettingsDefaultPostFormat: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        writingSettingsUseSmilies: {
            type: "Boolean",
            array: false,
            arrayRequired: false,
            required: false
        }
    },
    UpdateTagInput: {
        aliasOf: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        clientMutationId: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        description: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        id: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: true
        },
        name: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        slug: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        }
    },
    UpdateUserInput: {
        aim: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        clientMutationId: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        description: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        displayName: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        email: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        firstName: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        id: {
            type: "ID",
            array: false,
            arrayRequired: false,
            required: true
        },
        jabber: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        lastName: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        locale: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        nicename: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        nickname: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        password: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        registered: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        richEditing: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        roles: {
            type: "String",
            array: true,
            arrayRequired: false,
            required: false
        },
        websiteUrl: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        },
        yim: {
            type: "String",
            array: false,
            arrayRequired: false,
            required: false
        }
    }
};
exports.ReturnTypes = {
    RootQuery: {
        allSettings: "Settings",
        badge: "Badge",
        badgeBy: "Badge",
        badges: "RootQueryToBadgeConnection",
        categories: "RootQueryToCategoryConnection",
        category: "Category",
        comment: "Comment",
        comments: "RootQueryToCommentConnection",
        contentNode: "ContentNode",
        contentNodes: "RootQueryToContentNodeConnection",
        contentType: "ContentType",
        contentTypes: "RootQueryToContentTypeConnection",
        discussionSettings: "DiscussionSettings",
        generalSettings: "GeneralSettings",
        hero: "Hero",
        heroBy: "Hero",
        heroes: "RootQueryToHeroConnection",
        mediaItem: "MediaItem",
        mediaItemBy: "MediaItem",
        mediaItems: "RootQueryToMediaItemConnection",
        menu: "Menu",
        menuItem: "MenuItem",
        menuItems: "RootQueryToMenuItemConnection",
        menus: "RootQueryToMenuConnection",
        movie: "Movie",
        movieBy: "Movie",
        movies: "RootQueryToMovieConnection",
        node: "Node",
        nodeByUri: "UniformResourceIdentifiable",
        page: "Page",
        pageBy: "Page",
        pages: "RootQueryToPageConnection",
        plugin: "Plugin",
        plugins: "RootQueryToPluginConnection",
        post: "Post",
        postBy: "Post",
        postFormat: "PostFormat",
        postFormats: "RootQueryToPostFormatConnection",
        posts: "RootQueryToPostConnection",
        readingSettings: "ReadingSettings",
        registeredScripts: "RootQueryToEnqueuedScriptConnection",
        registeredStylesheets: "RootQueryToEnqueuedStylesheetConnection",
        revisions: "RootQueryToContentRevisionUnionConnection",
        tag: "Tag",
        tags: "RootQueryToTagConnection",
        taxonomies: "RootQueryToTaxonomyConnection",
        taxonomy: "Taxonomy",
        termNode: "TermNode",
        terms: "RootQueryToTermNodeConnection",
        theme: "Theme",
        themes: "RootQueryToThemeConnection",
        user: "User",
        userRole: "UserRole",
        userRoles: "RootQueryToUserRoleConnection",
        users: "RootQueryToUserConnection",
        viewer: "User",
        writingSettings: "WritingSettings"
    },
    Settings: {
        discussionSettingsDefaultCommentStatus: "String",
        discussionSettingsDefaultPingStatus: "String",
        generalSettingsDateFormat: "String",
        generalSettingsDescription: "String",
        generalSettingsEmail: "String",
        generalSettingsLanguage: "String",
        generalSettingsStartOfWeek: "Int",
        generalSettingsTimeFormat: "String",
        generalSettingsTimezone: "String",
        generalSettingsTitle: "String",
        generalSettingsUrl: "String",
        readingSettingsPostsPerPage: "Int",
        writingSettingsDefaultCategory: "Int",
        writingSettingsDefaultPostFormat: "String",
        writingSettingsUseSmilies: "Boolean"
    },
    Badge: {
        author: "NodeWithAuthorToUserConnectionEdge",
        authorDatabaseId: "Int",
        authorId: "ID",
        badgeId: "Int",
        conditionalTags: "ConditionalTags",
        contentType: "ContentNodeToContentTypeConnectionEdge",
        databaseId: "Int",
        date: "String",
        dateGmt: "String",
        description: "String",
        desiredSlug: "String",
        editingLockedBy: "ContentNodeToEditLockConnectionEdge",
        enclosure: "String",
        enqueuedScripts: "ContentNodeToEnqueuedScriptConnection",
        enqueuedStylesheets: "ContentNodeToEnqueuedStylesheetConnection",
        guid: "String",
        heroes: "BadgeToHeroConnection",
        id: "ID",
        isContentNode: "Boolean",
        isPreview: "Boolean",
        isRestricted: "Boolean",
        isTermNode: "Boolean",
        lastEditedBy: "ContentNodeToEditLastConnectionEdge",
        link: "String",
        modified: "String",
        modifiedGmt: "String",
        name: "String",
        preview: "BadgeToPreviewConnectionEdge",
        previewRevisionDatabaseId: "Int",
        previewRevisionId: "ID",
        slug: "String",
        status: "String",
        template: "ContentTemplate",
        templates: "String",
        tier: "String",
        title: "String",
        uri: "String"
    },
    Node: {
        "...on Badge": "Badge",
        "...on ContentNode": "ContentNode",
        "...on ContentType": "ContentType",
        "...on Taxonomy": "Taxonomy",
        "...on User": "User",
        "...on Comment": "Comment",
        "...on EnqueuedScript": "EnqueuedScript",
        "...on EnqueuedStylesheet": "EnqueuedStylesheet",
        "...on Hero": "Hero",
        "...on MediaItem": "MediaItem",
        "...on Page": "Page",
        "...on NodeWithFeaturedImage": "NodeWithFeaturedImage",
        "...on Post": "Post",
        "...on Category": "Category",
        "...on TermNode": "TermNode",
        "...on PostFormat": "PostFormat",
        "...on Tag": "Tag",
        "...on UserRole": "UserRole",
        "...on Menu": "Menu",
        "...on MenuItem": "MenuItem",
        "...on Movie": "Movie",
        "...on Plugin": "Plugin",
        "...on Theme": "Theme",
        "...on CommentAuthor": "CommentAuthor",
        id: "ID"
    },
    ContentNode: {
        "...on Badge": "Badge",
        "...on Hero": "Hero",
        "...on MediaItem": "MediaItem",
        "...on Page": "Page",
        "...on NodeWithFeaturedImage": "NodeWithFeaturedImage",
        "...on Post": "Post",
        "...on Movie": "Movie",
        conditionalTags: "ConditionalTags",
        contentType: "ContentNodeToContentTypeConnectionEdge",
        databaseId: "Int",
        date: "String",
        dateGmt: "String",
        desiredSlug: "String",
        editingLockedBy: "ContentNodeToEditLockConnectionEdge",
        enclosure: "String",
        enqueuedScripts: "ContentNodeToEnqueuedScriptConnection",
        enqueuedStylesheets: "ContentNodeToEnqueuedStylesheetConnection",
        guid: "String",
        id: "ID",
        isContentNode: "Boolean",
        isPreview: "Boolean",
        isRestricted: "Boolean",
        isTermNode: "Boolean",
        lastEditedBy: "ContentNodeToEditLastConnectionEdge",
        link: "String",
        modified: "String",
        modifiedGmt: "String",
        previewRevisionDatabaseId: "Int",
        previewRevisionId: "ID",
        slug: "String",
        status: "String",
        template: "ContentTemplate",
        templates: "String",
        uri: "String"
    },
    UniformResourceIdentifiable: {
        "...on Badge": "Badge",
        "...on ContentNode": "ContentNode",
        "...on ContentType": "ContentType",
        "...on User": "User",
        "...on Hero": "Hero",
        "...on MediaItem": "MediaItem",
        "...on Page": "Page",
        "...on NodeWithFeaturedImage": "NodeWithFeaturedImage",
        "...on Post": "Post",
        "...on Category": "Category",
        "...on TermNode": "TermNode",
        "...on PostFormat": "PostFormat",
        "...on Tag": "Tag",
        "...on Movie": "Movie",
        conditionalTags: "ConditionalTags",
        id: "ID",
        isContentNode: "Boolean",
        isTermNode: "Boolean",
        templates: "String",
        uri: "String"
    },
    ConditionalTags: {
        isArchive: "Boolean",
        isAttachment: "Boolean",
        isAuthor: "Boolean",
        isCategory: "Boolean",
        isDate: "Boolean",
        isDay: "Boolean",
        isFrontPage: "Boolean",
        isHome: "Boolean",
        isMonth: "Boolean",
        isMultiAuthor: "Boolean",
        isPage: "Boolean",
        isPageTemplate: "Boolean",
        isPostTypeArchive: "Boolean",
        isPreview: "Boolean",
        isPrivacyPolicy: "Boolean",
        isSearch: "Boolean",
        isSingle: "Boolean",
        isSingular: "Boolean",
        isSticky: "Boolean",
        isTag: "Boolean",
        isTax: "Boolean",
        isYear: "Boolean"
    },
    ContentNodeToContentTypeConnectionEdge: {
        node: "ContentType"
    },
    ContentType: {
        canExport: "Boolean",
        conditionalTags: "ConditionalTags",
        connectedTaxonomies: "ContentTypeToTaxonomyConnection",
        contentNodes: "ContentTypeToContentNodeConnection",
        deleteWithUser: "Boolean",
        description: "String",
        excludeFromSearch: "Boolean",
        graphqlPluralName: "String",
        graphqlSingleName: "String",
        hasArchive: "Boolean",
        hierarchical: "Boolean",
        id: "ID",
        isContentNode: "Boolean",
        isFrontPage: "Boolean",
        isPostsPage: "Boolean",
        isRestricted: "Boolean",
        isTermNode: "Boolean",
        label: "String",
        labels: "PostTypeLabelDetails",
        menuIcon: "String",
        menuPosition: "Int",
        name: "String",
        public: "Boolean",
        publiclyQueryable: "Boolean",
        restBase: "String",
        restControllerClass: "String",
        showInAdminBar: "Boolean",
        showInGraphql: "Boolean",
        showInMenu: "Boolean",
        showInNavMenus: "Boolean",
        showInRest: "Boolean",
        showUi: "Boolean",
        templates: "String",
        uri: "String"
    },
    ContentTypeToTaxonomyConnection: {
        edges: "ContentTypeToTaxonomyConnectionEdge",
        nodes: "Taxonomy",
        pageInfo: "WPPageInfo"
    },
    ContentTypeToTaxonomyConnectionEdge: {
        cursor: "String",
        node: "Taxonomy"
    },
    Taxonomy: {
        connectedContentTypes: "TaxonomyToContentTypeConnection",
        description: "String",
        graphqlPluralName: "String",
        graphqlSingleName: "String",
        hierarchical: "Boolean",
        id: "ID",
        isRestricted: "Boolean",
        label: "String",
        name: "String",
        public: "Boolean",
        restBase: "String",
        restControllerClass: "String",
        showCloud: "Boolean",
        showInAdminColumn: "Boolean",
        showInGraphql: "Boolean",
        showInMenu: "Boolean",
        showInNavMenus: "Boolean",
        showInQuickEdit: "Boolean",
        showInRest: "Boolean",
        showUi: "Boolean"
    },
    TaxonomyToContentTypeConnection: {
        edges: "TaxonomyToContentTypeConnectionEdge",
        nodes: "ContentType",
        pageInfo: "WPPageInfo"
    },
    TaxonomyToContentTypeConnectionEdge: {
        cursor: "String",
        node: "ContentType"
    },
    WPPageInfo: {
        endCursor: "String",
        hasNextPage: "Boolean",
        hasPreviousPage: "Boolean",
        startCursor: "String"
    },
    ContentTypeToContentNodeConnection: {
        edges: "ContentTypeToContentNodeConnectionEdge",
        nodes: "ContentNode",
        pageInfo: "WPPageInfo"
    },
    ContentTypeToContentNodeConnectionEdge: {
        cursor: "String",
        node: "ContentNode"
    },
    PostTypeLabelDetails: {
        addNew: "String",
        addNewItem: "String",
        allItems: "String",
        archives: "String",
        attributes: "String",
        editItem: "String",
        featuredImage: "String",
        filterItemsList: "String",
        insertIntoItem: "String",
        itemsList: "String",
        itemsListNavigation: "String",
        menuName: "String",
        name: "String",
        newItem: "String",
        notFound: "String",
        notFoundInTrash: "String",
        parentItemColon: "String",
        removeFeaturedImage: "String",
        searchItems: "String",
        setFeaturedImage: "String",
        singularName: "String",
        uploadedToThisItem: "String",
        useFeaturedImage: "String",
        viewItem: "String",
        viewItems: "String"
    },
    ContentNodeToEditLockConnectionEdge: {
        lockTimestamp: "String",
        node: "User"
    },
    User: {
        avatar: "Avatar",
        badges: "UserToBadgeConnection",
        capKey: "String",
        capabilities: "String",
        comments: "UserToCommentConnection",
        conditionalTags: "ConditionalTags",
        databaseId: "Int",
        description: "String",
        email: "String",
        enqueuedScripts: "UserToEnqueuedScriptConnection",
        enqueuedStylesheets: "UserToEnqueuedStylesheetConnection",
        extraCapabilities: "String",
        firstName: "String",
        heroes: "UserToHeroConnection",
        id: "ID",
        isContentNode: "Boolean",
        isRestricted: "Boolean",
        isTermNode: "Boolean",
        lastName: "String",
        locale: "String",
        mediaItems: "UserToMediaItemConnection",
        name: "String",
        nicename: "String",
        nickname: "String",
        pages: "UserToPageConnection",
        posts: "UserToPostConnection",
        registeredDate: "String",
        revisions: "UserToContentRevisionUnionConnection",
        roles: "UserToUserRoleConnection",
        slug: "String",
        templates: "String",
        uri: "String",
        url: "String",
        userId: "Int",
        username: "String"
    },
    Commenter: {
        "...on User": "User",
        "...on CommentAuthor": "CommentAuthor",
        databaseId: "Int",
        email: "String",
        id: "ID",
        isRestricted: "Boolean",
        name: "String",
        url: "String"
    },
    DatabaseIdentifier: {
        "...on Badge": "Badge",
        "...on User": "User",
        "...on Comment": "Comment",
        "...on Hero": "Hero",
        "...on MediaItem": "MediaItem",
        "...on Page": "Page",
        "...on NodeWithFeaturedImage": "NodeWithFeaturedImage",
        "...on Post": "Post",
        "...on Category": "Category",
        "...on PostFormat": "PostFormat",
        "...on Tag": "Tag",
        "...on Menu": "Menu",
        "...on MenuItem": "MenuItem",
        "...on Movie": "Movie",
        databaseId: "Int"
    },
    Avatar: {
        default: "String",
        extraAttr: "String",
        forceDefault: "Boolean",
        foundAvatar: "Boolean",
        height: "Int",
        isRestricted: "Boolean",
        rating: "String",
        scheme: "String",
        size: "Int",
        url: "String",
        width: "Int"
    },
    UserToBadgeConnection: {
        edges: "UserToBadgeConnectionEdge",
        nodes: "Badge",
        pageInfo: "WPPageInfo"
    },
    UserToBadgeConnectionEdge: {
        cursor: "String",
        node: "Badge"
    },
    UserToCommentConnection: {
        edges: "UserToCommentConnectionEdge",
        nodes: "Comment",
        pageInfo: "WPPageInfo"
    },
    UserToCommentConnectionEdge: {
        cursor: "String",
        node: "Comment"
    },
    Comment: {
        agent: "String",
        approved: "Boolean",
        author: "CommentToCommenterConnectionEdge",
        authorIp: "String",
        commentId: "Int",
        commentedOn: "CommentToContentNodeConnectionEdge",
        content: "String",
        databaseId: "Int",
        date: "String",
        dateGmt: "String",
        id: "ID",
        isRestricted: "Boolean",
        karma: "Int",
        parent: "CommentToParentCommentConnectionEdge",
        parentDatabaseId: "Int",
        parentId: "ID",
        replies: "CommentToCommentConnection",
        type: "String"
    },
    CommentToCommenterConnectionEdge: {
        node: "Commenter"
    },
    CommentToContentNodeConnectionEdge: {
        node: "ContentNode"
    },
    CommentToParentCommentConnectionEdge: {
        node: "Comment"
    },
    CommentToCommentConnection: {
        edges: "CommentToCommentConnectionEdge",
        nodes: "Comment",
        pageInfo: "WPPageInfo"
    },
    CommentToCommentConnectionEdge: {
        cursor: "String",
        node: "Comment"
    },
    UserToEnqueuedScriptConnection: {
        edges: "UserToEnqueuedScriptConnectionEdge",
        nodes: "EnqueuedScript",
        pageInfo: "WPPageInfo"
    },
    UserToEnqueuedScriptConnectionEdge: {
        cursor: "String",
        node: "EnqueuedScript"
    },
    EnqueuedScript: {
        args: "Boolean",
        dependencies: "EnqueuedScript",
        extra: "String",
        handle: "String",
        id: "ID",
        src: "String",
        version: "String"
    },
    EnqueuedAsset: {
        "...on EnqueuedScript": "EnqueuedScript",
        "...on EnqueuedStylesheet": "EnqueuedStylesheet",
        args: "Boolean",
        dependencies: "EnqueuedScript",
        extra: "String",
        handle: "String",
        id: "ID",
        src: "String",
        version: "String"
    },
    UserToEnqueuedStylesheetConnection: {
        edges: "UserToEnqueuedStylesheetConnectionEdge",
        nodes: "EnqueuedStylesheet",
        pageInfo: "WPPageInfo"
    },
    UserToEnqueuedStylesheetConnectionEdge: {
        cursor: "String",
        node: "EnqueuedStylesheet"
    },
    EnqueuedStylesheet: {
        args: "Boolean",
        dependencies: "EnqueuedScript",
        extra: "String",
        handle: "String",
        id: "ID",
        src: "String",
        version: "String"
    },
    UserToHeroConnection: {
        edges: "UserToHeroConnectionEdge",
        nodes: "Hero",
        pageInfo: "WPPageInfo"
    },
    UserToHeroConnectionEdge: {
        cursor: "String",
        node: "Hero"
    },
    Hero: {
        author: "NodeWithAuthorToUserConnectionEdge",
        authorDatabaseId: "Int",
        authorId: "ID",
        awards: "HeroToBadgeConnection",
        conditionalTags: "ConditionalTags",
        contentType: "ContentNodeToContentTypeConnectionEdge",
        databaseId: "Int",
        date: "String",
        dateGmt: "String",
        desiredSlug: "String",
        editingLockedBy: "ContentNodeToEditLockConnectionEdge",
        enclosure: "String",
        enqueuedScripts: "ContentNodeToEnqueuedScriptConnection",
        enqueuedStylesheets: "ContentNodeToEnqueuedStylesheetConnection",
        guid: "String",
        heroId: "Int",
        id: "ID",
        isContentNode: "Boolean",
        isPreview: "Boolean",
        isRestricted: "Boolean",
        isTermNode: "Boolean",
        lastEditedBy: "ContentNodeToEditLastConnectionEdge",
        link: "String",
        modified: "String",
        modifiedGmt: "String",
        name: "String",
        preview: "HeroToPreviewConnectionEdge",
        previewRevisionDatabaseId: "Int",
        previewRevisionId: "ID",
        slug: "String",
        status: "String",
        template: "ContentTemplate",
        templates: "String",
        title: "String",
        uri: "String"
    },
    NodeWithTemplate: {
        "...on Badge": "Badge",
        "...on Hero": "Hero",
        "...on MediaItem": "MediaItem",
        "...on Page": "Page",
        "...on Post": "Post",
        "...on Movie": "Movie",
        template: "ContentTemplate"
    },
    ContentTemplate: {
        "...on DefaultTemplate": "DefaultTemplate",
        "...on CoverTemplate": "CoverTemplate",
        "...on FullWidthTemplate": "FullWidthTemplate",
        templateName: "String"
    },
    NodeWithTitle: {
        "...on Badge": "Badge",
        "...on Hero": "Hero",
        "...on MediaItem": "MediaItem",
        "...on Page": "Page",
        "...on Post": "Post",
        "...on Movie": "Movie",
        title: "String"
    },
    NodeWithAuthor: {
        "...on Badge": "Badge",
        "...on Hero": "Hero",
        "...on MediaItem": "MediaItem",
        "...on Page": "Page",
        "...on Post": "Post",
        author: "NodeWithAuthorToUserConnectionEdge",
        authorDatabaseId: "Int",
        authorId: "ID"
    },
    NodeWithAuthorToUserConnectionEdge: {
        node: "User"
    },
    HeroToBadgeConnection: {
        edges: "HeroToBadgeConnectionEdge",
        nodes: "Badge",
        pageInfo: "WPPageInfo"
    },
    HeroToBadgeConnectionEdge: {
        cursor: "String",
        node: "Badge"
    },
    ContentNodeToEnqueuedScriptConnection: {
        edges: "ContentNodeToEnqueuedScriptConnectionEdge",
        nodes: "EnqueuedScript",
        pageInfo: "WPPageInfo"
    },
    ContentNodeToEnqueuedScriptConnectionEdge: {
        cursor: "String",
        node: "EnqueuedScript"
    },
    ContentNodeToEnqueuedStylesheetConnection: {
        edges: "ContentNodeToEnqueuedStylesheetConnectionEdge",
        nodes: "EnqueuedStylesheet",
        pageInfo: "WPPageInfo"
    },
    ContentNodeToEnqueuedStylesheetConnectionEdge: {
        cursor: "String",
        node: "EnqueuedStylesheet"
    },
    ContentNodeToEditLastConnectionEdge: {
        node: "User"
    },
    HeroToPreviewConnectionEdge: {
        node: "Hero"
    },
    UserToMediaItemConnection: {
        edges: "UserToMediaItemConnectionEdge",
        nodes: "MediaItem",
        pageInfo: "WPPageInfo"
    },
    UserToMediaItemConnectionEdge: {
        cursor: "String",
        node: "MediaItem"
    },
    MediaItem: {
        altText: "String",
        ancestors: "HierarchicalContentNodeToContentNodeAncestorsConnection",
        author: "NodeWithAuthorToUserConnectionEdge",
        authorDatabaseId: "Int",
        authorId: "ID",
        caption: "String",
        children: "HierarchicalContentNodeToContentNodeChildrenConnection",
        commentCount: "Int",
        commentStatus: "String",
        comments: "MediaItemToCommentConnection",
        conditionalTags: "ConditionalTags",
        contentType: "ContentNodeToContentTypeConnectionEdge",
        databaseId: "Int",
        date: "String",
        dateGmt: "String",
        description: "String",
        desiredSlug: "String",
        editingLockedBy: "ContentNodeToEditLockConnectionEdge",
        enclosure: "String",
        enqueuedScripts: "ContentNodeToEnqueuedScriptConnection",
        enqueuedStylesheets: "ContentNodeToEnqueuedStylesheetConnection",
        fileSize: "Int",
        guid: "String",
        id: "ID",
        isContentNode: "Boolean",
        isPreview: "Boolean",
        isRestricted: "Boolean",
        isTermNode: "Boolean",
        lastEditedBy: "ContentNodeToEditLastConnectionEdge",
        link: "String",
        mediaDetails: "MediaDetails",
        mediaItemId: "Int",
        mediaItemUrl: "String",
        mediaType: "String",
        mimeType: "String",
        modified: "String",
        modifiedGmt: "String",
        parent: "HierarchicalContentNodeToParentContentNodeConnectionEdge",
        parentDatabaseId: "Int",
        parentId: "ID",
        previewRevisionDatabaseId: "Int",
        previewRevisionId: "ID",
        sizes: "String",
        slug: "String",
        sourceUrl: "String",
        srcSet: "String",
        status: "String",
        template: "ContentTemplate",
        templates: "String",
        title: "String",
        uri: "String"
    },
    NodeWithComments: {
        "...on MediaItem": "MediaItem",
        "...on Page": "Page",
        "...on Post": "Post",
        commentCount: "Int",
        commentStatus: "String"
    },
    HierarchicalContentNode: {
        "...on MediaItem": "MediaItem",
        "...on Page": "Page",
        ancestors: "HierarchicalContentNodeToContentNodeAncestorsConnection",
        children: "HierarchicalContentNodeToContentNodeChildrenConnection",
        parent: "HierarchicalContentNodeToParentContentNodeConnectionEdge",
        parentDatabaseId: "Int",
        parentId: "ID"
    },
    HierarchicalContentNodeToContentNodeAncestorsConnection: {
        edges: "HierarchicalContentNodeToContentNodeAncestorsConnectionEdge",
        nodes: "ContentNode",
        pageInfo: "WPPageInfo"
    },
    HierarchicalContentNodeToContentNodeAncestorsConnectionEdge: {
        cursor: "String",
        node: "ContentNode"
    },
    HierarchicalContentNodeToContentNodeChildrenConnection: {
        edges: "HierarchicalContentNodeToContentNodeChildrenConnectionEdge",
        nodes: "ContentNode",
        pageInfo: "WPPageInfo"
    },
    HierarchicalContentNodeToContentNodeChildrenConnectionEdge: {
        cursor: "String",
        node: "ContentNode"
    },
    HierarchicalContentNodeToParentContentNodeConnectionEdge: {
        node: "ContentNode"
    },
    MediaItemToCommentConnection: {
        edges: "MediaItemToCommentConnectionEdge",
        nodes: "Comment",
        pageInfo: "WPPageInfo"
    },
    MediaItemToCommentConnectionEdge: {
        cursor: "String",
        node: "Comment"
    },
    MediaDetails: {
        file: "String",
        height: "Int",
        meta: "MediaItemMeta",
        sizes: "MediaSize",
        width: "Int"
    },
    MediaItemMeta: {
        aperture: "Float",
        camera: "String",
        caption: "String",
        copyright: "String",
        createdTimestamp: "Int",
        credit: "String",
        focalLength: "Float",
        iso: "Int",
        keywords: "String",
        orientation: "String",
        shutterSpeed: "Float",
        title: "String"
    },
    MediaSize: {
        file: "String",
        fileSize: "Int",
        height: "String",
        mimeType: "String",
        name: "String",
        sourceUrl: "String",
        width: "String"
    },
    UserToPageConnection: {
        edges: "UserToPageConnectionEdge",
        nodes: "Page",
        pageInfo: "WPPageInfo"
    },
    UserToPageConnectionEdge: {
        cursor: "String",
        node: "Page"
    },
    Page: {
        ancestors: "HierarchicalContentNodeToContentNodeAncestorsConnection",
        author: "NodeWithAuthorToUserConnectionEdge",
        authorDatabaseId: "Int",
        authorId: "ID",
        children: "HierarchicalContentNodeToContentNodeChildrenConnection",
        commentCount: "Int",
        commentStatus: "String",
        comments: "PageToCommentConnection",
        conditionalTags: "ConditionalTags",
        content: "String",
        contentType: "ContentNodeToContentTypeConnectionEdge",
        databaseId: "Int",
        date: "String",
        dateGmt: "String",
        desiredSlug: "String",
        editingLockedBy: "ContentNodeToEditLockConnectionEdge",
        enclosure: "String",
        enqueuedScripts: "ContentNodeToEnqueuedScriptConnection",
        enqueuedStylesheets: "ContentNodeToEnqueuedStylesheetConnection",
        featuredImage: "NodeWithFeaturedImageToMediaItemConnectionEdge",
        featuredImageDatabaseId: "Int",
        featuredImageId: "ID",
        guid: "String",
        id: "ID",
        isContentNode: "Boolean",
        isFrontPage: "Boolean",
        isPostsPage: "Boolean",
        isPreview: "Boolean",
        isPrivacyPage: "Boolean",
        isRestricted: "Boolean",
        isRevision: "Boolean",
        isTermNode: "Boolean",
        lastEditedBy: "ContentNodeToEditLastConnectionEdge",
        link: "String",
        menuOrder: "Int",
        modified: "String",
        modifiedGmt: "String",
        pageId: "Int",
        parent: "HierarchicalContentNodeToParentContentNodeConnectionEdge",
        parentDatabaseId: "Int",
        parentId: "ID",
        preview: "PageToPreviewConnectionEdge",
        previewRevisionDatabaseId: "Int",
        previewRevisionId: "ID",
        revisionOf: "NodeWithRevisionsToContentNodeConnectionEdge",
        revisions: "PageToRevisionConnection",
        slug: "String",
        status: "String",
        template: "ContentTemplate",
        templates: "String",
        title: "String",
        uri: "String"
    },
    NodeWithContentEditor: {
        "...on Page": "Page",
        "...on Post": "Post",
        "...on Movie": "Movie",
        content: "String"
    },
    NodeWithFeaturedImage: {
        "...on Page": "Page",
        "...on Post": "Post",
        "...on Movie": "Movie",
        conditionalTags: "ConditionalTags",
        contentType: "ContentNodeToContentTypeConnectionEdge",
        databaseId: "Int",
        date: "String",
        dateGmt: "String",
        desiredSlug: "String",
        editingLockedBy: "ContentNodeToEditLockConnectionEdge",
        enclosure: "String",
        enqueuedScripts: "ContentNodeToEnqueuedScriptConnection",
        enqueuedStylesheets: "ContentNodeToEnqueuedStylesheetConnection",
        featuredImage: "NodeWithFeaturedImageToMediaItemConnectionEdge",
        featuredImageDatabaseId: "Int",
        featuredImageId: "ID",
        guid: "String",
        id: "ID",
        isContentNode: "Boolean",
        isPreview: "Boolean",
        isRestricted: "Boolean",
        isTermNode: "Boolean",
        lastEditedBy: "ContentNodeToEditLastConnectionEdge",
        link: "String",
        modified: "String",
        modifiedGmt: "String",
        previewRevisionDatabaseId: "Int",
        previewRevisionId: "ID",
        slug: "String",
        status: "String",
        template: "ContentTemplate",
        templates: "String",
        uri: "String"
    },
    NodeWithFeaturedImageToMediaItemConnectionEdge: {
        node: "MediaItem"
    },
    NodeWithRevisions: {
        "...on Page": "Page",
        "...on Post": "Post",
        isRevision: "Boolean",
        revisionOf: "NodeWithRevisionsToContentNodeConnectionEdge"
    },
    NodeWithRevisionsToContentNodeConnectionEdge: {
        node: "ContentNode"
    },
    NodeWithPageAttributes: {
        "...on Page": "Page",
        menuOrder: "Int"
    },
    MenuItemLinkable: {
        "...on Page": "Page",
        "...on Post": "Post",
        "...on Category": "Category",
        "...on Tag": "Tag",
        "...on Movie": "Movie",
        databaseId: "Int",
        id: "ID",
        uri: "String"
    },
    PageToCommentConnection: {
        edges: "PageToCommentConnectionEdge",
        nodes: "Comment",
        pageInfo: "WPPageInfo"
    },
    PageToCommentConnectionEdge: {
        cursor: "String",
        node: "Comment"
    },
    PageToPreviewConnectionEdge: {
        node: "Page"
    },
    PageToRevisionConnection: {
        edges: "PageToRevisionConnectionEdge",
        nodes: "Page",
        pageInfo: "WPPageInfo"
    },
    PageToRevisionConnectionEdge: {
        cursor: "String",
        node: "Page"
    },
    UserToPostConnection: {
        edges: "UserToPostConnectionEdge",
        nodes: "Post",
        pageInfo: "WPPageInfo"
    },
    UserToPostConnectionEdge: {
        cursor: "String",
        node: "Post"
    },
    Post: {
        author: "NodeWithAuthorToUserConnectionEdge",
        authorDatabaseId: "Int",
        authorId: "ID",
        categories: "PostToCategoryConnection",
        commentCount: "Int",
        commentStatus: "String",
        comments: "PostToCommentConnection",
        conditionalTags: "ConditionalTags",
        content: "String",
        contentType: "ContentNodeToContentTypeConnectionEdge",
        databaseId: "Int",
        date: "String",
        dateGmt: "String",
        desiredSlug: "String",
        editingLockedBy: "ContentNodeToEditLockConnectionEdge",
        enclosure: "String",
        enqueuedScripts: "ContentNodeToEnqueuedScriptConnection",
        enqueuedStylesheets: "ContentNodeToEnqueuedStylesheetConnection",
        excerpt: "String",
        featuredImage: "NodeWithFeaturedImageToMediaItemConnectionEdge",
        featuredImageDatabaseId: "Int",
        featuredImageId: "ID",
        guid: "String",
        id: "ID",
        isContentNode: "Boolean",
        isPreview: "Boolean",
        isRestricted: "Boolean",
        isRevision: "Boolean",
        isSticky: "Boolean",
        isTermNode: "Boolean",
        lastEditedBy: "ContentNodeToEditLastConnectionEdge",
        link: "String",
        modified: "String",
        modifiedGmt: "String",
        pingStatus: "String",
        pinged: "String",
        postFormats: "PostToPostFormatConnection",
        postId: "Int",
        preview: "PostToPreviewConnectionEdge",
        previewRevisionDatabaseId: "Int",
        previewRevisionId: "ID",
        revisionOf: "NodeWithRevisionsToContentNodeConnectionEdge",
        revisions: "PostToRevisionConnection",
        slug: "String",
        status: "String",
        tags: "PostToTagConnection",
        template: "ContentTemplate",
        templates: "String",
        terms: "PostToTermNodeConnection",
        title: "String",
        toPing: "String",
        uri: "String"
    },
    NodeWithExcerpt: {
        "...on Post": "Post",
        excerpt: "String"
    },
    NodeWithTrackbacks: {
        "...on Post": "Post",
        pingStatus: "String",
        pinged: "String",
        toPing: "String"
    },
    PostToCategoryConnection: {
        edges: "PostToCategoryConnectionEdge",
        nodes: "Category",
        pageInfo: "WPPageInfo"
    },
    PostToCategoryConnectionEdge: {
        cursor: "String",
        node: "Category"
    },
    Category: {
        ancestors: "CategoryToAncestorsCategoryConnection",
        categoryId: "Int",
        children: "CategoryToCategoryConnection",
        conditionalTags: "ConditionalTags",
        contentNodes: "CategoryToContentNodeConnection",
        count: "Int",
        databaseId: "Int",
        description: "String",
        enqueuedScripts: "TermNodeToEnqueuedScriptConnection",
        enqueuedStylesheets: "TermNodeToEnqueuedStylesheetConnection",
        id: "ID",
        isContentNode: "Boolean",
        isRestricted: "Boolean",
        isTermNode: "Boolean",
        link: "String",
        name: "String",
        parent: "CategoryToParentCategoryConnectionEdge",
        parentDatabaseId: "Int",
        parentId: "ID",
        posts: "CategoryToPostConnection",
        slug: "String",
        taxonomy: "CategoryToTaxonomyConnectionEdge",
        templates: "String",
        termGroupId: "Int",
        termTaxonomyId: "Int",
        uri: "String"
    },
    TermNode: {
        "...on Category": "Category",
        "...on PostFormat": "PostFormat",
        "...on Tag": "Tag",
        conditionalTags: "ConditionalTags",
        count: "Int",
        databaseId: "Int",
        description: "String",
        enqueuedScripts: "TermNodeToEnqueuedScriptConnection",
        enqueuedStylesheets: "TermNodeToEnqueuedStylesheetConnection",
        id: "ID",
        isContentNode: "Boolean",
        isRestricted: "Boolean",
        isTermNode: "Boolean",
        link: "String",
        name: "String",
        slug: "String",
        templates: "String",
        termGroupId: "Int",
        termTaxonomyId: "Int",
        uri: "String"
    },
    TermNodeToEnqueuedScriptConnection: {
        edges: "TermNodeToEnqueuedScriptConnectionEdge",
        nodes: "EnqueuedScript",
        pageInfo: "WPPageInfo"
    },
    TermNodeToEnqueuedScriptConnectionEdge: {
        cursor: "String",
        node: "EnqueuedScript"
    },
    TermNodeToEnqueuedStylesheetConnection: {
        edges: "TermNodeToEnqueuedStylesheetConnectionEdge",
        nodes: "EnqueuedStylesheet",
        pageInfo: "WPPageInfo"
    },
    TermNodeToEnqueuedStylesheetConnectionEdge: {
        cursor: "String",
        node: "EnqueuedStylesheet"
    },
    HierarchicalTermNode: {
        "...on Category": "Category",
        parentDatabaseId: "Int",
        parentId: "ID"
    },
    CategoryToAncestorsCategoryConnection: {
        edges: "CategoryToAncestorsCategoryConnectionEdge",
        nodes: "Category",
        pageInfo: "WPPageInfo"
    },
    CategoryToAncestorsCategoryConnectionEdge: {
        cursor: "String",
        node: "Category"
    },
    CategoryToCategoryConnection: {
        edges: "CategoryToCategoryConnectionEdge",
        nodes: "Category",
        pageInfo: "WPPageInfo"
    },
    CategoryToCategoryConnectionEdge: {
        cursor: "String",
        node: "Category"
    },
    CategoryToContentNodeConnection: {
        edges: "CategoryToContentNodeConnectionEdge",
        nodes: "ContentNode",
        pageInfo: "WPPageInfo"
    },
    CategoryToContentNodeConnectionEdge: {
        cursor: "String",
        node: "ContentNode"
    },
    CategoryToParentCategoryConnectionEdge: {
        node: "Category"
    },
    CategoryToPostConnection: {
        edges: "CategoryToPostConnectionEdge",
        nodes: "Post",
        pageInfo: "WPPageInfo"
    },
    CategoryToPostConnectionEdge: {
        cursor: "String",
        node: "Post"
    },
    CategoryToTaxonomyConnectionEdge: {
        node: "Taxonomy"
    },
    PostToCommentConnection: {
        edges: "PostToCommentConnectionEdge",
        nodes: "Comment",
        pageInfo: "WPPageInfo"
    },
    PostToCommentConnectionEdge: {
        cursor: "String",
        node: "Comment"
    },
    PostToPostFormatConnection: {
        edges: "PostToPostFormatConnectionEdge",
        nodes: "PostFormat",
        pageInfo: "WPPageInfo"
    },
    PostToPostFormatConnectionEdge: {
        cursor: "String",
        node: "PostFormat"
    },
    PostFormat: {
        conditionalTags: "ConditionalTags",
        contentNodes: "PostFormatToContentNodeConnection",
        count: "Int",
        databaseId: "Int",
        description: "String",
        enqueuedScripts: "TermNodeToEnqueuedScriptConnection",
        enqueuedStylesheets: "TermNodeToEnqueuedStylesheetConnection",
        id: "ID",
        isContentNode: "Boolean",
        isRestricted: "Boolean",
        isTermNode: "Boolean",
        link: "String",
        name: "String",
        postFormatId: "Int",
        posts: "PostFormatToPostConnection",
        slug: "String",
        taxonomy: "PostFormatToTaxonomyConnectionEdge",
        templates: "String",
        termGroupId: "Int",
        termTaxonomyId: "Int",
        uri: "String"
    },
    PostFormatToContentNodeConnection: {
        edges: "PostFormatToContentNodeConnectionEdge",
        nodes: "ContentNode",
        pageInfo: "WPPageInfo"
    },
    PostFormatToContentNodeConnectionEdge: {
        cursor: "String",
        node: "ContentNode"
    },
    PostFormatToPostConnection: {
        edges: "PostFormatToPostConnectionEdge",
        nodes: "Post",
        pageInfo: "WPPageInfo"
    },
    PostFormatToPostConnectionEdge: {
        cursor: "String",
        node: "Post"
    },
    PostFormatToTaxonomyConnectionEdge: {
        node: "Taxonomy"
    },
    PostToPreviewConnectionEdge: {
        node: "Post"
    },
    PostToRevisionConnection: {
        edges: "PostToRevisionConnectionEdge",
        nodes: "Post",
        pageInfo: "WPPageInfo"
    },
    PostToRevisionConnectionEdge: {
        cursor: "String",
        node: "Post"
    },
    PostToTagConnection: {
        edges: "PostToTagConnectionEdge",
        nodes: "Tag",
        pageInfo: "WPPageInfo"
    },
    PostToTagConnectionEdge: {
        cursor: "String",
        node: "Tag"
    },
    Tag: {
        conditionalTags: "ConditionalTags",
        contentNodes: "TagToContentNodeConnection",
        count: "Int",
        databaseId: "Int",
        description: "String",
        enqueuedScripts: "TermNodeToEnqueuedScriptConnection",
        enqueuedStylesheets: "TermNodeToEnqueuedStylesheetConnection",
        id: "ID",
        isContentNode: "Boolean",
        isRestricted: "Boolean",
        isTermNode: "Boolean",
        link: "String",
        name: "String",
        posts: "TagToPostConnection",
        slug: "String",
        tagId: "Int",
        taxonomy: "TagToTaxonomyConnectionEdge",
        templates: "String",
        termGroupId: "Int",
        termTaxonomyId: "Int",
        uri: "String"
    },
    TagToContentNodeConnection: {
        edges: "TagToContentNodeConnectionEdge",
        nodes: "ContentNode",
        pageInfo: "WPPageInfo"
    },
    TagToContentNodeConnectionEdge: {
        cursor: "String",
        node: "ContentNode"
    },
    TagToPostConnection: {
        edges: "TagToPostConnectionEdge",
        nodes: "Post",
        pageInfo: "WPPageInfo"
    },
    TagToPostConnectionEdge: {
        cursor: "String",
        node: "Post"
    },
    TagToTaxonomyConnectionEdge: {
        node: "Taxonomy"
    },
    PostToTermNodeConnection: {
        edges: "PostToTermNodeConnectionEdge",
        nodes: "TermNode",
        pageInfo: "WPPageInfo"
    },
    PostToTermNodeConnectionEdge: {
        cursor: "String",
        node: "TermNode"
    },
    UserToContentRevisionUnionConnection: {
        edges: "UserToContentRevisionUnionConnectionEdge",
        nodes: "ContentRevisionUnion",
        pageInfo: "WPPageInfo"
    },
    UserToContentRevisionUnionConnectionEdge: {
        cursor: "String",
        node: "ContentRevisionUnion"
    },
    ContentRevisionUnion: {
        "...on Post": "Post",
        "...on Page": "Page"
    },
    UserToUserRoleConnection: {
        edges: "UserToUserRoleConnectionEdge",
        nodes: "UserRole",
        pageInfo: "WPPageInfo"
    },
    UserToUserRoleConnectionEdge: {
        cursor: "String",
        node: "UserRole"
    },
    UserRole: {
        capabilities: "String",
        displayName: "String",
        id: "ID",
        isRestricted: "Boolean",
        name: "String"
    },
    BadgeToHeroConnection: {
        edges: "BadgeToHeroConnectionEdge",
        nodes: "Hero",
        pageInfo: "WPPageInfo"
    },
    BadgeToHeroConnectionEdge: {
        cursor: "String",
        node: "Hero"
    },
    BadgeToPreviewConnectionEdge: {
        node: "Badge"
    },
    RootQueryToBadgeConnection: {
        edges: "RootQueryToBadgeConnectionEdge",
        nodes: "Badge",
        pageInfo: "WPPageInfo"
    },
    RootQueryToBadgeConnectionEdge: {
        cursor: "String",
        node: "Badge"
    },
    RootQueryToCategoryConnection: {
        edges: "RootQueryToCategoryConnectionEdge",
        nodes: "Category",
        pageInfo: "WPPageInfo"
    },
    RootQueryToCategoryConnectionEdge: {
        cursor: "String",
        node: "Category"
    },
    RootQueryToCommentConnection: {
        edges: "RootQueryToCommentConnectionEdge",
        nodes: "Comment",
        pageInfo: "WPPageInfo"
    },
    RootQueryToCommentConnectionEdge: {
        cursor: "String",
        node: "Comment"
    },
    RootQueryToContentNodeConnection: {
        edges: "RootQueryToContentNodeConnectionEdge",
        nodes: "ContentNode",
        pageInfo: "WPPageInfo"
    },
    RootQueryToContentNodeConnectionEdge: {
        cursor: "String",
        node: "ContentNode"
    },
    RootQueryToContentTypeConnection: {
        edges: "RootQueryToContentTypeConnectionEdge",
        nodes: "ContentType",
        pageInfo: "WPPageInfo"
    },
    RootQueryToContentTypeConnectionEdge: {
        cursor: "String",
        node: "ContentType"
    },
    DiscussionSettings: {
        defaultCommentStatus: "String",
        defaultPingStatus: "String"
    },
    GeneralSettings: {
        dateFormat: "String",
        description: "String",
        email: "String",
        language: "String",
        startOfWeek: "Int",
        timeFormat: "String",
        timezone: "String",
        title: "String",
        url: "String"
    },
    RootQueryToHeroConnection: {
        edges: "RootQueryToHeroConnectionEdge",
        nodes: "Hero",
        pageInfo: "WPPageInfo"
    },
    RootQueryToHeroConnectionEdge: {
        cursor: "String",
        node: "Hero"
    },
    RootQueryToMediaItemConnection: {
        edges: "RootQueryToMediaItemConnectionEdge",
        nodes: "MediaItem",
        pageInfo: "WPPageInfo"
    },
    RootQueryToMediaItemConnectionEdge: {
        cursor: "String",
        node: "MediaItem"
    },
    Menu: {
        count: "Int",
        databaseId: "Int",
        id: "ID",
        isRestricted: "Boolean",
        locations: "MenuLocationEnum",
        menuId: "Int",
        menuItems: "MenuToMenuItemConnection",
        name: "String",
        slug: "String"
    },
    MenuToMenuItemConnection: {
        edges: "MenuToMenuItemConnectionEdge",
        nodes: "MenuItem",
        pageInfo: "WPPageInfo"
    },
    MenuToMenuItemConnectionEdge: {
        cursor: "String",
        node: "MenuItem"
    },
    MenuItem: {
        childItems: "MenuItemToMenuItemConnection",
        connectedNode: "MenuItemToMenuItemLinkableConnectionEdge",
        connectedObject: "MenuItemObjectUnion",
        cssClasses: "String",
        databaseId: "Int",
        description: "String",
        id: "ID",
        isRestricted: "Boolean",
        label: "String",
        linkRelationship: "String",
        locations: "MenuLocationEnum",
        menu: "MenuItemToMenuConnectionEdge",
        menuItemId: "Int",
        order: "Int",
        parentDatabaseId: "Int",
        parentId: "ID",
        path: "String",
        target: "String",
        title: "String",
        url: "String"
    },
    MenuItemToMenuItemConnection: {
        edges: "MenuItemToMenuItemConnectionEdge",
        nodes: "MenuItem",
        pageInfo: "WPPageInfo"
    },
    MenuItemToMenuItemConnectionEdge: {
        cursor: "String",
        node: "MenuItem"
    },
    MenuItemToMenuItemLinkableConnectionEdge: {
        node: "MenuItemLinkable"
    },
    MenuItemObjectUnion: {
        "...on Post": "Post",
        "...on Page": "Page",
        "...on Movie": "Movie",
        "...on Category": "Category",
        "...on Tag": "Tag"
    },
    Movie: {
        movieId: "Int",
        conditionalTags: "ConditionalTags",
        content: "String",
        contentType: "ContentNodeToContentTypeConnectionEdge",
        databaseId: "Int",
        date: "String",
        dateGmt: "String",
        desiredSlug: "String",
        editingLockedBy: "ContentNodeToEditLockConnectionEdge",
        enclosure: "String",
        enqueuedScripts: "ContentNodeToEnqueuedScriptConnection",
        enqueuedStylesheets: "ContentNodeToEnqueuedStylesheetConnection",
        featuredImage: "NodeWithFeaturedImageToMediaItemConnectionEdge",
        featuredImageDatabaseId: "Int",
        featuredImageId: "ID",
        guid: "String",
        id: "ID",
        isContentNode: "Boolean",
        isPreview: "Boolean",
        isRestricted: "Boolean",
        isTermNode: "Boolean",
        lastEditedBy: "ContentNodeToEditLastConnectionEdge",
        link: "String",
        modified: "String",
        modifiedGmt: "String",
        preview: "MovieToPreviewConnectionEdge",
        previewRevisionDatabaseId: "Int",
        previewRevisionId: "ID",
        slug: "String",
        status: "String",
        template: "ContentTemplate",
        templates: "String",
        title: "String",
        uri: "String"
    },
    MovieToPreviewConnectionEdge: {
        node: "Movie"
    },
    MenuItemToMenuConnectionEdge: {
        node: "Menu"
    },
    RootQueryToMenuItemConnection: {
        edges: "RootQueryToMenuItemConnectionEdge",
        nodes: "MenuItem",
        pageInfo: "WPPageInfo"
    },
    RootQueryToMenuItemConnectionEdge: {
        cursor: "String",
        node: "MenuItem"
    },
    RootQueryToMenuConnection: {
        edges: "RootQueryToMenuConnectionEdge",
        nodes: "Menu",
        pageInfo: "WPPageInfo"
    },
    RootQueryToMenuConnectionEdge: {
        cursor: "String",
        node: "Menu"
    },
    RootQueryToMovieConnection: {
        edges: "RootQueryToMovieConnectionEdge",
        nodes: "Movie",
        pageInfo: "WPPageInfo"
    },
    RootQueryToMovieConnectionEdge: {
        cursor: "String",
        node: "Movie"
    },
    RootQueryToPageConnection: {
        edges: "RootQueryToPageConnectionEdge",
        nodes: "Page",
        pageInfo: "WPPageInfo"
    },
    RootQueryToPageConnectionEdge: {
        cursor: "String",
        node: "Page"
    },
    Plugin: {
        author: "String",
        authorUri: "String",
        description: "String",
        id: "ID",
        isRestricted: "Boolean",
        name: "String",
        path: "String",
        pluginUri: "String",
        version: "String"
    },
    RootQueryToPluginConnection: {
        edges: "RootQueryToPluginConnectionEdge",
        nodes: "Plugin",
        pageInfo: "WPPageInfo"
    },
    RootQueryToPluginConnectionEdge: {
        cursor: "String",
        node: "Plugin"
    },
    RootQueryToPostFormatConnection: {
        edges: "RootQueryToPostFormatConnectionEdge",
        nodes: "PostFormat",
        pageInfo: "WPPageInfo"
    },
    RootQueryToPostFormatConnectionEdge: {
        cursor: "String",
        node: "PostFormat"
    },
    RootQueryToPostConnection: {
        edges: "RootQueryToPostConnectionEdge",
        nodes: "Post",
        pageInfo: "WPPageInfo"
    },
    RootQueryToPostConnectionEdge: {
        cursor: "String",
        node: "Post"
    },
    ReadingSettings: {
        postsPerPage: "Int"
    },
    RootQueryToEnqueuedScriptConnection: {
        edges: "RootQueryToEnqueuedScriptConnectionEdge",
        nodes: "EnqueuedScript",
        pageInfo: "WPPageInfo"
    },
    RootQueryToEnqueuedScriptConnectionEdge: {
        cursor: "String",
        node: "EnqueuedScript"
    },
    RootQueryToEnqueuedStylesheetConnection: {
        edges: "RootQueryToEnqueuedStylesheetConnectionEdge",
        nodes: "EnqueuedStylesheet",
        pageInfo: "WPPageInfo"
    },
    RootQueryToEnqueuedStylesheetConnectionEdge: {
        cursor: "String",
        node: "EnqueuedStylesheet"
    },
    RootQueryToContentRevisionUnionConnection: {
        edges: "RootQueryToContentRevisionUnionConnectionEdge",
        nodes: "ContentRevisionUnion",
        pageInfo: "WPPageInfo"
    },
    RootQueryToContentRevisionUnionConnectionEdge: {
        cursor: "String",
        node: "ContentRevisionUnion"
    },
    RootQueryToTagConnection: {
        edges: "RootQueryToTagConnectionEdge",
        nodes: "Tag",
        pageInfo: "WPPageInfo"
    },
    RootQueryToTagConnectionEdge: {
        cursor: "String",
        node: "Tag"
    },
    RootQueryToTaxonomyConnection: {
        edges: "RootQueryToTaxonomyConnectionEdge",
        nodes: "Taxonomy",
        pageInfo: "WPPageInfo"
    },
    RootQueryToTaxonomyConnectionEdge: {
        cursor: "String",
        node: "Taxonomy"
    },
    RootQueryToTermNodeConnection: {
        edges: "RootQueryToTermNodeConnectionEdge",
        nodes: "TermNode",
        pageInfo: "WPPageInfo"
    },
    RootQueryToTermNodeConnectionEdge: {
        cursor: "String",
        node: "TermNode"
    },
    Theme: {
        author: "String",
        authorUri: "String",
        description: "String",
        id: "ID",
        isRestricted: "Boolean",
        name: "String",
        screenshot: "String",
        slug: "String",
        tags: "String",
        themeUri: "String",
        version: "String"
    },
    RootQueryToThemeConnection: {
        edges: "RootQueryToThemeConnectionEdge",
        nodes: "Theme",
        pageInfo: "WPPageInfo"
    },
    RootQueryToThemeConnectionEdge: {
        cursor: "String",
        node: "Theme"
    },
    RootQueryToUserRoleConnection: {
        edges: "RootQueryToUserRoleConnectionEdge",
        nodes: "UserRole",
        pageInfo: "WPPageInfo"
    },
    RootQueryToUserRoleConnectionEdge: {
        cursor: "String",
        node: "UserRole"
    },
    RootQueryToUserConnection: {
        edges: "RootQueryToUserConnectionEdge",
        nodes: "User",
        pageInfo: "WPPageInfo"
    },
    RootQueryToUserConnectionEdge: {
        cursor: "String",
        node: "User"
    },
    WritingSettings: {
        defaultCategory: "Int",
        defaultPostFormat: "String",
        useSmilies: "Boolean"
    },
    RootMutation: {
        createBadge: "CreateBadgePayload",
        createCategory: "CreateCategoryPayload",
        createComment: "CreateCommentPayload",
        createHero: "CreateHeroPayload",
        createMediaItem: "CreateMediaItemPayload",
        createMovie: "CreateMoviePayload",
        createPage: "CreatePagePayload",
        createPost: "CreatePostPayload",
        createPostFormat: "CreatePostFormatPayload",
        createTag: "CreateTagPayload",
        createUser: "CreateUserPayload",
        deleteBadge: "DeleteBadgePayload",
        deleteCategory: "DeleteCategoryPayload",
        deleteComment: "DeleteCommentPayload",
        deleteHero: "DeleteHeroPayload",
        deleteMediaItem: "DeleteMediaItemPayload",
        deleteMovie: "DeleteMoviePayload",
        deletePage: "DeletePagePayload",
        deletePost: "DeletePostPayload",
        deletePostFormat: "DeletePostFormatPayload",
        deleteTag: "DeleteTagPayload",
        deleteUser: "DeleteUserPayload",
        generateAuthorizationCode: "GenerateAuthorizationCodePayload",
        increaseCount: "Int",
        registerUser: "RegisterUserPayload",
        resetUserPassword: "ResetUserPasswordPayload",
        restoreComment: "RestoreCommentPayload",
        sendPasswordResetEmail: "SendPasswordResetEmailPayload",
        updateBadge: "UpdateBadgePayload",
        updateCategory: "UpdateCategoryPayload",
        updateComment: "UpdateCommentPayload",
        updateHero: "UpdateHeroPayload",
        updateMediaItem: "UpdateMediaItemPayload",
        updateMovie: "UpdateMoviePayload",
        updatePage: "UpdatePagePayload",
        updatePost: "UpdatePostPayload",
        updatePostFormat: "UpdatePostFormatPayload",
        updateSettings: "UpdateSettingsPayload",
        updateTag: "UpdateTagPayload",
        updateUser: "UpdateUserPayload"
    },
    CreateBadgePayload: {
        badge: "Badge",
        clientMutationId: "String"
    },
    CreateCategoryPayload: {
        category: "Category",
        clientMutationId: "String"
    },
    CreateCommentPayload: {
        clientMutationId: "String",
        comment: "Comment",
        success: "Boolean"
    },
    CreateHeroPayload: {
        clientMutationId: "String",
        hero: "Hero"
    },
    CreateMediaItemPayload: {
        clientMutationId: "String",
        mediaItem: "MediaItem"
    },
    CreateMoviePayload: {
        movie: "Movie",
        clientMutationId: "String"
    },
    CreatePagePayload: {
        clientMutationId: "String",
        page: "Page"
    },
    CreatePostPayload: {
        clientMutationId: "String",
        post: "Post"
    },
    CreatePostFormatPayload: {
        clientMutationId: "String",
        postFormat: "PostFormat"
    },
    CreateTagPayload: {
        clientMutationId: "String",
        tag: "Tag"
    },
    CreateUserPayload: {
        clientMutationId: "String",
        user: "User"
    },
    DeleteBadgePayload: {
        badge: "Badge",
        clientMutationId: "String",
        deletedId: "ID"
    },
    DeleteCategoryPayload: {
        category: "Category",
        clientMutationId: "String",
        deletedId: "ID"
    },
    DeleteCommentPayload: {
        clientMutationId: "String",
        comment: "Comment",
        deletedId: "ID"
    },
    DeleteHeroPayload: {
        clientMutationId: "String",
        deletedId: "ID",
        hero: "Hero"
    },
    DeleteMediaItemPayload: {
        clientMutationId: "String",
        deletedId: "ID",
        mediaItem: "MediaItem"
    },
    DeleteMoviePayload: {
        movie: "Movie",
        clientMutationId: "String",
        deletedId: "ID"
    },
    DeletePagePayload: {
        clientMutationId: "String",
        deletedId: "ID",
        page: "Page"
    },
    DeletePostPayload: {
        clientMutationId: "String",
        deletedId: "ID",
        post: "Post"
    },
    DeletePostFormatPayload: {
        clientMutationId: "String",
        deletedId: "ID",
        postFormat: "PostFormat"
    },
    DeleteTagPayload: {
        clientMutationId: "String",
        deletedId: "ID",
        tag: "Tag"
    },
    DeleteUserPayload: {
        clientMutationId: "String",
        deletedId: "ID",
        user: "User"
    },
    GenerateAuthorizationCodePayload: {
        clientMutationId: "String",
        code: "String",
        error: "String"
    },
    RegisterUserPayload: {
        clientMutationId: "String",
        user: "User"
    },
    ResetUserPasswordPayload: {
        clientMutationId: "String",
        user: "User"
    },
    RestoreCommentPayload: {
        clientMutationId: "String",
        comment: "Comment",
        restoredId: "ID"
    },
    SendPasswordResetEmailPayload: {
        clientMutationId: "String",
        user: "User"
    },
    UpdateBadgePayload: {
        badge: "Badge",
        clientMutationId: "String"
    },
    UpdateCategoryPayload: {
        category: "Category",
        clientMutationId: "String"
    },
    UpdateCommentPayload: {
        clientMutationId: "String",
        comment: "Comment",
        success: "Boolean"
    },
    UpdateHeroPayload: {
        clientMutationId: "String",
        hero: "Hero"
    },
    UpdateMediaItemPayload: {
        clientMutationId: "String",
        mediaItem: "MediaItem"
    },
    UpdateMoviePayload: {
        movie: "Movie",
        clientMutationId: "String"
    },
    UpdatePagePayload: {
        clientMutationId: "String",
        page: "Page"
    },
    UpdatePostPayload: {
        clientMutationId: "String",
        post: "Post"
    },
    UpdatePostFormatPayload: {
        clientMutationId: "String",
        postFormat: "PostFormat"
    },
    UpdateSettingsPayload: {
        allSettings: "Settings",
        clientMutationId: "String",
        discussionSettings: "DiscussionSettings",
        generalSettings: "GeneralSettings",
        readingSettings: "ReadingSettings",
        writingSettings: "WritingSettings"
    },
    UpdateTagPayload: {
        clientMutationId: "String",
        tag: "Tag"
    },
    UpdateUserPayload: {
        clientMutationId: "String",
        user: "User"
    },
    CommentAuthor: {
        databaseId: "Int",
        email: "String",
        id: "ID",
        isRestricted: "Boolean",
        name: "String",
        url: "String"
    },
    DefaultTemplate: {
        templateName: "String"
    },
    CoverTemplate: {
        templateName: "String"
    },
    FullWidthTemplate: {
        templateName: "String"
    }
};
