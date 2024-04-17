(this.webpackJsonplettucemeet = this.webpackJsonplettucemeet || []).push([[0], {
    138: function(e, n, t) {},
    191: function(e, n, t) {},
    217: function(e, n, t) {},
    312: function(e, n, t) {
        "use strict";
        var a = {
            fragment: {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "AnnouncementQuery",
                selections: [{
                    alias: null,
                    args: null,
                    concreteType: "Announcement",
                    kind: "LinkedField",
                    name: "getAnnouncement",
                    plural: !1,
                    selections: [{
                        args: null,
                        kind: "FragmentSpread",
                        name: "AnnouncementLoader_announcement"
                    }],
                    storageKey: null
                }],
                type: "RootQuery",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: [],
                kind: "Operation",
                name: "AnnouncementQuery",
                selections: [{
                    alias: null,
                    args: null,
                    concreteType: "Announcement",
                    kind: "LinkedField",
                    name: "getAnnouncement",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "id",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "title",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "linkText",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "linkHref",
                        storageKey: null
                    }],
                    storageKey: null
                }]
            },
            params: {
                cacheID: "f0e20eae81cfdccaf4cdb74b3e656942",
                id: null,
                metadata: {},
                name: "AnnouncementQuery",
                operationKind: "query",
                text: "query AnnouncementQuery {\n  getAnnouncement {\n    ...AnnouncementLoader_announcement\n  }\n}\n\nfragment AnnouncementLoader_announcement on Announcement {\n  id\n  title\n  linkText\n  linkHref\n}\n"
            },
            hash: "92df4da9e8881f5b14d474eb910a7fc9"
        };
        e.exports = a
    },
    313: function(e, n, t) {
        "use strict";
        var a = function() {
            var e = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "id",
                storageKey: null
            }
              , n = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "name",
                storageKey: null
            }
              , t = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "title",
                storageKey: null
            }
              , a = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "description",
                storageKey: null
            }
              , i = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "pollStartTime",
                storageKey: null
            }
              , l = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "pollEndTime",
                storageKey: null
            }
              , s = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "pollDates",
                storageKey: null
            }
              , o = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "start",
                storageKey: null
            }
              , r = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "end",
                storageKey: null
            }
              , c = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "isScheduled",
                storageKey: null
            }
              , u = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "createdAt",
                storageKey: null
            }
              , d = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "updatedAt",
                storageKey: null
            }
              , m = [n];
            return {
                fragment: {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "CurrentUserQuery",
                    selections: [{
                        alias: null,
                        args: null,
                        concreteType: "User",
                        kind: "LinkedField",
                        name: "currentUser",
                        plural: !1,
                        selections: [{
                            args: null,
                            kind: "FragmentSpread",
                            name: "App_user"
                        }, {
                            args: null,
                            kind: "FragmentSpread",
                            name: "AnnouncementLoader_user"
                        }, {
                            args: null,
                            kind: "FragmentSpread",
                            name: "Event_user"
                        }, {
                            args: null,
                            kind: "FragmentSpread",
                            name: "Header_user"
                        }, {
                            args: null,
                            kind: "FragmentSpread",
                            name: "Profile_user"
                        }, {
                            args: null,
                            kind: "FragmentSpread",
                            name: "Notifications_user"
                        }, {
                            args: null,
                            kind: "FragmentSpread",
                            name: "Settings_user"
                        }, {
                            args: null,
                            kind: "FragmentSpread",
                            name: "useUserLoggedIn_user"
                        }],
                        storageKey: null
                    }],
                    type: "RootQuery",
                    abstractKey: null
                },
                kind: "Request",
                operation: {
                    argumentDefinitions: [],
                    kind: "Operation",
                    name: "CurrentUserQuery",
                    selections: [{
                        alias: null,
                        args: null,
                        concreteType: "User",
                        kind: "LinkedField",
                        name: "currentUser",
                        plural: !1,
                        selections: [e, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "googleStatus",
                            storageKey: null
                        }, n, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "email",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            concreteType: "Event",
                            kind: "LinkedField",
                            name: "events",
                            plural: !0,
                            selections: [e, t, a, i, l, s, o, r, c, u, d, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "timeZone",
                                storageKey: null
                            }],
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            concreteType: "Event",
                            kind: "LinkedField",
                            name: "eventsRespondedTo",
                            plural: !0,
                            selections: [e, t, a, i, l, s, o, r, c, u, d],
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            concreteType: "Notification",
                            kind: "LinkedField",
                            name: "notifications",
                            plural: !0,
                            selections: [e, {
                                alias: null,
                                args: null,
                                concreteType: null,
                                kind: "LinkedField",
                                name: "actor",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "__typename",
                                    storageKey: null
                                }, {
                                    kind: "InlineFragment",
                                    selections: m,
                                    type: "AnonymousUser",
                                    abstractKey: null
                                }, {
                                    kind: "InlineFragment",
                                    selections: m,
                                    type: "User",
                                    abstractKey: null
                                }, {
                                    kind: "InlineFragment",
                                    selections: [e],
                                    type: "Node",
                                    abstractKey: "__isNode"
                                }],
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                concreteType: "Event",
                                kind: "LinkedField",
                                name: "event",
                                plural: !1,
                                selections: [e, t, o],
                                storageKey: null
                            }, u, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "actionValue",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "actionType",
                                storageKey: null
                            }],
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "unsubscribedFromEmails",
                            storageKey: null
                        }],
                        storageKey: null
                    }]
                },
                params: {
                    cacheID: "92c179217c250f3b8586a8f2bca22bed",
                    id: null,
                    metadata: {},
                    name: "CurrentUserQuery",
                    operationKind: "query",
                    text: "query CurrentUserQuery {\n  currentUser {\n    ...App_user\n    ...AnnouncementLoader_user\n    ...Event_user\n    ...Header_user\n    ...Profile_user\n    ...Notifications_user\n    ...Settings_user\n    ...useUserLoggedIn_user\n    id\n  }\n}\n\nfragment AnnouncementLoader_user on User {\n  googleStatus\n}\n\nfragment App_user on User {\n  id\n}\n\nfragment Event_user on User {\n  id\n  name\n  email\n}\n\nfragment Header_user on User {\n  name\n  googleStatus\n}\n\nfragment Notifications_user on User {\n  id\n  notifications {\n    id\n    actor {\n      __typename\n      ... on AnonymousUser {\n        name\n      }\n      ... on User {\n        name\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    event {\n      id\n      title\n      start\n    }\n    createdAt\n    actionValue\n    actionType\n  }\n  email\n  name\n}\n\nfragment Profile_user on User {\n  id\n  events {\n    id\n    title\n    description\n    pollStartTime\n    pollEndTime\n    pollDates\n    start\n    end\n    isScheduled\n    createdAt\n    updatedAt\n    timeZone\n  }\n  eventsRespondedTo {\n    id\n    title\n    description\n    pollStartTime\n    pollEndTime\n    pollDates\n    start\n    end\n    isScheduled\n    createdAt\n    updatedAt\n  }\n  email\n  name\n  googleStatus\n}\n\nfragment Settings_user on User {\n  id\n  name\n  unsubscribedFromEmails\n  googleStatus\n  email\n}\n\nfragment useUserLoggedIn_user on User {\n  id\n}\n"
                }
            }
        }();
        a.hash = "b02fa877c57006a8b2b9e76b8bfd8893",
        e.exports = a
    },
    316: function(e, n, t) {},
    318: function(e, n, t) {},
    324: function(e, n, t) {
        "use strict";
        var a = {
            argumentDefinitions: [],
            kind: "Fragment",
            metadata: null,
            name: "Header_user",
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "name",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "googleStatus",
                storageKey: null
            }],
            type: "User",
            abstractKey: null,
            hash: "f6a8e82a140766e421ed3f33999c0a57"
        };
        e.exports = a
    },
    325: function(e, n, t) {},
    326: function(e, n, t) {},
    327: function(e, n, t) {},
    328: function(e, n, t) {},
    329: function(e, n, t) {
        "use strict";
        var a = function() {
            var e = [{
                defaultValue: null,
                kind: "LocalArgument",
                name: "input"
            }]
              , n = [{
                alias: null,
                args: [{
                    kind: "Variable",
                    name: "input",
                    variableName: "input"
                }],
                concreteType: "UnlinkGooglePayload",
                kind: "LinkedField",
                name: "unlinkGoogle",
                plural: !1,
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "success",
                    storageKey: null
                }],
                storageKey: null
            }];
            return {
                fragment: {
                    argumentDefinitions: e,
                    kind: "Fragment",
                    metadata: null,
                    name: "UnlinkGoogleMutation",
                    selections: n,
                    type: "Mutation",
                    abstractKey: null
                },
                kind: "Request",
                operation: {
                    argumentDefinitions: e,
                    kind: "Operation",
                    name: "UnlinkGoogleMutation",
                    selections: n
                },
                params: {
                    cacheID: "7024f9df1297bbe78574486ed8d0abfd",
                    id: null,
                    metadata: {},
                    name: "UnlinkGoogleMutation",
                    operationKind: "mutation",
                    text: "mutation UnlinkGoogleMutation(\n  $input: UnlinkGoogleInput!\n) {\n  unlinkGoogle(input: $input) {\n    success\n  }\n}\n"
                }
            }
        }();
        a.hash = "c4a31d2b87eed7cf4d867e76f179a629",
        e.exports = a
    },
    330: function(e, n, t) {
        "use strict";
        var a = function() {
            var e = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "id",
                storageKey: null
            }
              , n = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "title",
                storageKey: null
            }
              , t = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "description",
                storageKey: null
            }
              , a = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "pollStartTime",
                storageKey: null
            }
              , i = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "pollEndTime",
                storageKey: null
            }
              , l = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "pollDates",
                storageKey: null
            }
              , s = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "start",
                storageKey: null
            }
              , o = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "end",
                storageKey: null
            }
              , r = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "isScheduled",
                storageKey: null
            }
              , c = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "createdAt",
                storageKey: null
            }
              , u = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "updatedAt",
                storageKey: null
            };
            return {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "Profile_user",
                selections: [e, {
                    alias: null,
                    args: null,
                    concreteType: "Event",
                    kind: "LinkedField",
                    name: "events",
                    plural: !0,
                    selections: [e, n, t, a, i, l, s, o, r, c, u, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "timeZone",
                        storageKey: null
                    }],
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    concreteType: "Event",
                    kind: "LinkedField",
                    name: "eventsRespondedTo",
                    plural: !0,
                    selections: [e, n, t, a, i, l, s, o, r, c, u],
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "email",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "name",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "googleStatus",
                    storageKey: null
                }],
                type: "User",
                abstractKey: null
            }
        }();
        a.hash = "875819454b7311a277f13f3e47cb9973",
        e.exports = a
    },
    331: function(e, n, t) {
        "use strict";
        var a = function() {
            var e = [{
                defaultValue: null,
                kind: "LocalArgument",
                name: "input"
            }]
              , n = [{
                alias: null,
                args: [{
                    kind: "Variable",
                    name: "input",
                    variableName: "input"
                }],
                concreteType: "GetTokenPayload",
                kind: "LinkedField",
                name: "getToken",
                plural: !1,
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "authToken",
                    storageKey: null
                }],
                storageKey: null
            }];
            return {
                fragment: {
                    argumentDefinitions: e,
                    kind: "Fragment",
                    metadata: null,
                    name: "GetTokenMutation",
                    selections: n,
                    type: "Mutation",
                    abstractKey: null
                },
                kind: "Request",
                operation: {
                    argumentDefinitions: e,
                    kind: "Operation",
                    name: "GetTokenMutation",
                    selections: n
                },
                params: {
                    cacheID: "063ca6bb9e5beb9724a73028eef17886",
                    id: null,
                    metadata: {},
                    name: "GetTokenMutation",
                    operationKind: "mutation",
                    text: "mutation GetTokenMutation(\n  $input: GetTokenInput!\n) {\n  getToken(input: $input) {\n    authToken\n  }\n}\n"
                }
            }
        }();
        a.hash = "2a54a3906d06a6b600b9726dd9921f59",
        e.exports = a
    },
    332: function(e, n, t) {},
    411: function(e, n, t) {},
    412: function(e, n, t) {
        "use strict";
        var a = function() {
            var e = [{
                defaultValue: null,
                kind: "LocalArgument",
                name: "input"
            }]
              , n = [{
                alias: null,
                args: [{
                    kind: "Variable",
                    name: "input",
                    variableName: "input"
                }],
                concreteType: "CreateFeedbackPayload",
                kind: "LinkedField",
                name: "createFeedback",
                plural: !1,
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "feedbackResponse",
                    storageKey: null
                }],
                storageKey: null
            }];
            return {
                fragment: {
                    argumentDefinitions: e,
                    kind: "Fragment",
                    metadata: null,
                    name: "CreateFeedbackMutation",
                    selections: n,
                    type: "Mutation",
                    abstractKey: null
                },
                kind: "Request",
                operation: {
                    argumentDefinitions: e,
                    kind: "Operation",
                    name: "CreateFeedbackMutation",
                    selections: n
                },
                params: {
                    cacheID: "5c65775877e9c9e5b083b7a0504036a5",
                    id: null,
                    metadata: {},
                    name: "CreateFeedbackMutation",
                    operationKind: "mutation",
                    text: "mutation CreateFeedbackMutation(\n  $input: CreateFeedbackInput!\n) {\n  createFeedback(input: $input) {\n    feedbackResponse\n  }\n}\n"
                }
            }
        }();
        a.hash = "aa6b3ff1be08834cd0978dad714cbe57",
        e.exports = a
    },
    413: function(e, n, t) {},
    414: function(e, n, t) {
        "use strict";
        var a = function() {
            var e = [{
                defaultValue: null,
                kind: "LocalArgument",
                name: "input"
            }]
              , n = [{
                alias: null,
                args: [{
                    kind: "Variable",
                    name: "input",
                    variableName: "input"
                }],
                concreteType: "CreateUserPayload",
                kind: "LinkedField",
                name: "createUser",
                plural: !1,
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "authToken",
                    storageKey: null
                }],
                storageKey: null
            }];
            return {
                fragment: {
                    argumentDefinitions: e,
                    kind: "Fragment",
                    metadata: null,
                    name: "CreateUserMutation",
                    selections: n,
                    type: "Mutation",
                    abstractKey: null
                },
                kind: "Request",
                operation: {
                    argumentDefinitions: e,
                    kind: "Operation",
                    name: "CreateUserMutation",
                    selections: n
                },
                params: {
                    cacheID: "244abdcf4594553074603af5cbaa6312",
                    id: null,
                    metadata: {},
                    name: "CreateUserMutation",
                    operationKind: "mutation",
                    text: "mutation CreateUserMutation(\n  $input: CreateUserInput!\n) {\n  createUser(input: $input) {\n    authToken\n  }\n}\n"
                }
            }
        }();
        a.hash = "559d39ad70fe7794430a0520dc4d2288",
        e.exports = a
    },
    415: function(e, n, t) {},
    416: function(e, n, t) {},
    417: function(e, n, t) {
        "use strict";
        var a = function() {
            var e = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "id",
                storageKey: null
            }
              , n = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "name",
                storageKey: null
            }
              , t = [n];
            return {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "Notifications_user",
                selections: [e, {
                    alias: null,
                    args: null,
                    concreteType: "Notification",
                    kind: "LinkedField",
                    name: "notifications",
                    plural: !0,
                    selections: [e, {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: "LinkedField",
                        name: "actor",
                        plural: !1,
                        selections: [{
                            kind: "InlineFragment",
                            selections: t,
                            type: "AnonymousUser",
                            abstractKey: null
                        }, {
                            kind: "InlineFragment",
                            selections: t,
                            type: "User",
                            abstractKey: null
                        }],
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        concreteType: "Event",
                        kind: "LinkedField",
                        name: "event",
                        plural: !1,
                        selections: [e, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "title",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "start",
                            storageKey: null
                        }],
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "createdAt",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "actionValue",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "actionType",
                        storageKey: null
                    }],
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "email",
                    storageKey: null
                }, n],
                type: "User",
                abstractKey: null
            }
        }();
        a.hash = "9fa0dd0c5b1bfd6475a1221b75745c11",
        e.exports = a
    },
    418: function(e, n, t) {
        "use strict";
        var a = function() {
            var e = [{
                defaultValue: null,
                kind: "LocalArgument",
                name: "input"
            }]
              , n = [{
                alias: null,
                args: [{
                    kind: "Variable",
                    name: "input",
                    variableName: "input"
                }],
                concreteType: "RequestPasswordResetPayload",
                kind: "LinkedField",
                name: "requestPasswordReset",
                plural: !1,
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "message",
                    storageKey: null
                }],
                storageKey: null
            }];
            return {
                fragment: {
                    argumentDefinitions: e,
                    kind: "Fragment",
                    metadata: null,
                    name: "RequestPasswordResetMutation",
                    selections: n,
                    type: "Mutation",
                    abstractKey: null
                },
                kind: "Request",
                operation: {
                    argumentDefinitions: e,
                    kind: "Operation",
                    name: "RequestPasswordResetMutation",
                    selections: n
                },
                params: {
                    cacheID: "98ca3d3553927210cbcf65577ba39d2b",
                    id: null,
                    metadata: {},
                    name: "RequestPasswordResetMutation",
                    operationKind: "mutation",
                    text: "mutation RequestPasswordResetMutation(\n  $input: RequestPasswordResetInput!\n) {\n  requestPasswordReset(input: $input) {\n    message\n  }\n}\n"
                }
            }
        }();
        a.hash = "00b54dbb8171b6761752bbc7f3cccbc0",
        e.exports = a
    },
    419: function(e, n, t) {},
    420: function(e, n, t) {
        "use strict";
        var a = function() {
            var e = [{
                defaultValue: null,
                kind: "LocalArgument",
                name: "input"
            }]
              , n = [{
                alias: null,
                args: [{
                    kind: "Variable",
                    name: "input",
                    variableName: "input"
                }],
                concreteType: "ResetUserPasswordPayload",
                kind: "LinkedField",
                name: "resetUserPassword",
                plural: !1,
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "message",
                    storageKey: null
                }],
                storageKey: null
            }];
            return {
                fragment: {
                    argumentDefinitions: e,
                    kind: "Fragment",
                    metadata: null,
                    name: "ResetUserPasswordMutation",
                    selections: n,
                    type: "Mutation",
                    abstractKey: null
                },
                kind: "Request",
                operation: {
                    argumentDefinitions: e,
                    kind: "Operation",
                    name: "ResetUserPasswordMutation",
                    selections: n
                },
                params: {
                    cacheID: "47c383cd919b128c8d5808b68ed25692",
                    id: null,
                    metadata: {},
                    name: "ResetUserPasswordMutation",
                    operationKind: "mutation",
                    text: "mutation ResetUserPasswordMutation(\n  $input: ResetUserPasswordInput!\n) {\n  resetUserPassword(input: $input) {\n    message\n  }\n}\n"
                }
            }
        }();
        a.hash = "ed2451f7c6019adbd83eebcc01e19e6a",
        e.exports = a
    },
    421: function(e, n, t) {},
    422: function(e, n, t) {
        "use strict";
        var a = function() {
            var e = [{
                defaultValue: null,
                kind: "LocalArgument",
                name: "input"
            }]
              , n = [{
                alias: null,
                args: [{
                    kind: "Variable",
                    name: "input",
                    variableName: "input"
                }],
                concreteType: "ConfirmGoogleAuthPayload",
                kind: "LinkedField",
                name: "confirmGoogleAuth",
                plural: !1,
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "authToken",
                    storageKey: null
                }],
                storageKey: null
            }];
            return {
                fragment: {
                    argumentDefinitions: e,
                    kind: "Fragment",
                    metadata: null,
                    name: "ConfirmGoogleAuthMutation",
                    selections: n,
                    type: "Mutation",
                    abstractKey: null
                },
                kind: "Request",
                operation: {
                    argumentDefinitions: e,
                    kind: "Operation",
                    name: "ConfirmGoogleAuthMutation",
                    selections: n
                },
                params: {
                    cacheID: "cfec424ecc73fd4039fc23188baf2156",
                    id: null,
                    metadata: {},
                    name: "ConfirmGoogleAuthMutation",
                    operationKind: "mutation",
                    text: "mutation ConfirmGoogleAuthMutation(\n  $input: ConfirmGoogleAuthInput!\n) {\n  confirmGoogleAuth(input: $input) {\n    authToken\n  }\n}\n"
                }
            }
        }();
        a.hash = "432afaa632476c04a1bcf8e3b3dc5cdf",
        e.exports = a
    },
    423: function(e, n, t) {
        "use strict";
        var a = function() {
            var e = [{
                defaultValue: null,
                kind: "LocalArgument",
                name: "input"
            }]
              , n = [{
                alias: null,
                args: [{
                    kind: "Variable",
                    name: "input",
                    variableName: "input"
                }],
                concreteType: "RevokeGoogleTokenPayload",
                kind: "LinkedField",
                name: "revokeGoogleToken",
                plural: !1,
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "success",
                    storageKey: null
                }],
                storageKey: null
            }];
            return {
                fragment: {
                    argumentDefinitions: e,
                    kind: "Fragment",
                    metadata: null,
                    name: "RevokeGoogleTokenMutation",
                    selections: n,
                    type: "Mutation",
                    abstractKey: null
                },
                kind: "Request",
                operation: {
                    argumentDefinitions: e,
                    kind: "Operation",
                    name: "RevokeGoogleTokenMutation",
                    selections: n
                },
                params: {
                    cacheID: "d79b88fe7f0cefc0cc016f3c0c44a1b7",
                    id: null,
                    metadata: {},
                    name: "RevokeGoogleTokenMutation",
                    operationKind: "mutation",
                    text: "mutation RevokeGoogleTokenMutation(\n  $input: RevokeGoogleTokenInput!\n) {\n  revokeGoogleToken(input: $input) {\n    success\n  }\n}\n"
                }
            }
        }();
        a.hash = "143a198fa983ac06c023e5c8334c5357",
        e.exports = a
    },
    424: function(e, n, t) {
        "use strict";
        var a = function() {
            var e = [{
                defaultValue: null,
                kind: "LocalArgument",
                name: "input"
            }]
              , n = [{
                alias: null,
                args: [{
                    kind: "Variable",
                    name: "input",
                    variableName: "input"
                }],
                concreteType: "ValidateAuthTokenPayload",
                kind: "LinkedField",
                name: "validateAuthToken",
                plural: !1,
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "authToken",
                    storageKey: null
                }],
                storageKey: null
            }];
            return {
                fragment: {
                    argumentDefinitions: e,
                    kind: "Fragment",
                    metadata: null,
                    name: "ValidateAuthTokenMutation",
                    selections: n,
                    type: "Mutation",
                    abstractKey: null
                },
                kind: "Request",
                operation: {
                    argumentDefinitions: e,
                    kind: "Operation",
                    name: "ValidateAuthTokenMutation",
                    selections: n
                },
                params: {
                    cacheID: "6eb2626b2d4cb4695f3f66553b61c3d2",
                    id: null,
                    metadata: {},
                    name: "ValidateAuthTokenMutation",
                    operationKind: "mutation",
                    text: "mutation ValidateAuthTokenMutation(\n  $input: ValidateAuthTokenInput!\n) {\n  validateAuthToken(input: $input) {\n    authToken\n  }\n}\n"
                }
            }
        }();
        a.hash = "72c399ad77dc90e424f426154d8cd8d5",
        e.exports = a
    },
    425: function(e, n, t) {},
    426: function(e, n, t) {},
    427: function(e, n, t) {},
    428: function(e, n, t) {
        "use strict";
        var a = function() {
            var e = {
                defaultValue: null,
                kind: "LocalArgument",
                name: "authType"
            }
              , n = {
                defaultValue: null,
                kind: "LocalArgument",
                name: "redirectPath"
            }
              , t = [{
                kind: "Variable",
                name: "authType",
                variableName: "authType"
            }, {
                kind: "Variable",
                name: "redirectPath",
                variableName: "redirectPath"
            }];
            return {
                fragment: {
                    argumentDefinitions: [e, n],
                    kind: "Fragment",
                    metadata: null,
                    name: "GoogleAuthQuery",
                    selections: [{
                        alias: null,
                        args: t,
                        concreteType: "OAuthURL",
                        kind: "LinkedField",
                        name: "googleOAuthUrl",
                        plural: !1,
                        selections: [{
                            args: null,
                            kind: "FragmentSpread",
                            name: "App_googleAuth"
                        }],
                        storageKey: null
                    }],
                    type: "RootQuery",
                    abstractKey: null
                },
                kind: "Request",
                operation: {
                    argumentDefinitions: [n, e],
                    kind: "Operation",
                    name: "GoogleAuthQuery",
                    selections: [{
                        alias: null,
                        args: t,
                        concreteType: "OAuthURL",
                        kind: "LinkedField",
                        name: "googleOAuthUrl",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "redirectURL",
                            storageKey: null
                        }],
                        storageKey: null
                    }]
                },
                params: {
                    cacheID: "4378aed0d55fceddbce2139be444ebb6",
                    id: null,
                    metadata: {},
                    name: "GoogleAuthQuery",
                    operationKind: "query",
                    text: "query GoogleAuthQuery(\n  $redirectPath: String!\n  $authType: String!\n) {\n  googleOAuthUrl(redirectPath: $redirectPath, authType: $authType) {\n    ...App_googleAuth\n  }\n}\n\nfragment App_googleAuth on OAuthURL {\n  redirectURL\n}\n"
                }
            }
        }();
        a.hash = "98338e3f0d2ace4ea5b79ab3eaedfd1f",
        e.exports = a
    },
    429: function(e, n, t) {
        "use strict";
        var a = function() {
            var e = [{
                defaultValue: null,
                kind: "LocalArgument",
                name: "input"
            }]
              , n = [{
                kind: "Variable",
                name: "input",
                variableName: "input"
            }]
              , t = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "unsubscribedFromEmails",
                storageKey: null
            };
            return {
                fragment: {
                    argumentDefinitions: e,
                    kind: "Fragment",
                    metadata: null,
                    name: "AddEmailToGlobalSuppressionMutation",
                    selections: [{
                        alias: null,
                        args: n,
                        concreteType: "AddEmailToGlobalSuppressionPayload",
                        kind: "LinkedField",
                        name: "addEmailToGlobalSuppression",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "User",
                            kind: "LinkedField",
                            name: "user",
                            plural: !1,
                            selections: [t],
                            storageKey: null
                        }],
                        storageKey: null
                    }],
                    type: "Mutation",
                    abstractKey: null
                },
                kind: "Request",
                operation: {
                    argumentDefinitions: e,
                    kind: "Operation",
                    name: "AddEmailToGlobalSuppressionMutation",
                    selections: [{
                        alias: null,
                        args: n,
                        concreteType: "AddEmailToGlobalSuppressionPayload",
                        kind: "LinkedField",
                        name: "addEmailToGlobalSuppression",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "User",
                            kind: "LinkedField",
                            name: "user",
                            plural: !1,
                            selections: [t, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "id",
                                storageKey: null
                            }],
                            storageKey: null
                        }],
                        storageKey: null
                    }]
                },
                params: {
                    cacheID: "f10f67ac4cc618c7b936f31dce8d0987",
                    id: null,
                    metadata: {},
                    name: "AddEmailToGlobalSuppressionMutation",
                    operationKind: "mutation",
                    text: "mutation AddEmailToGlobalSuppressionMutation(\n  $input: AddEmailToGlobalSuppressionInput!\n) {\n  addEmailToGlobalSuppression(input: $input) {\n    user {\n      unsubscribedFromEmails\n      id\n    }\n  }\n}\n"
                }
            }
        }();
        a.hash = "173065ec850e578494579ea8ae2fa3ee",
        e.exports = a
    },
    430: function(e, n, t) {
        "use strict";
        var a = function() {
            var e = [{
                defaultValue: null,
                kind: "LocalArgument",
                name: "input"
            }]
              , n = [{
                alias: null,
                args: [{
                    kind: "Variable",
                    name: "input",
                    variableName: "input"
                }],
                concreteType: "DeleteUserPayload",
                kind: "LinkedField",
                name: "deleteUser",
                plural: !1,
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "message",
                    storageKey: null
                }],
                storageKey: null
            }];
            return {
                fragment: {
                    argumentDefinitions: e,
                    kind: "Fragment",
                    metadata: null,
                    name: "DeleteUserMutation",
                    selections: n,
                    type: "Mutation",
                    abstractKey: null
                },
                kind: "Request",
                operation: {
                    argumentDefinitions: e,
                    kind: "Operation",
                    name: "DeleteUserMutation",
                    selections: n
                },
                params: {
                    cacheID: "bf2c16f47addd115808fbf412893bcb1",
                    id: null,
                    metadata: {},
                    name: "DeleteUserMutation",
                    operationKind: "mutation",
                    text: "mutation DeleteUserMutation(\n  $input: DeleteUserInput!\n) {\n  deleteUser(input: $input) {\n    message\n  }\n}\n"
                }
            }
        }();
        a.hash = "7f39f90239b47e54249368d84699be5f",
        e.exports = a
    },
    431: function(e, n, t) {
        "use strict";
        var a = function() {
            var e = [{
                defaultValue: null,
                kind: "LocalArgument",
                name: "input"
            }]
              , n = [{
                kind: "Variable",
                name: "input",
                variableName: "input"
            }]
              , t = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "unsubscribedFromEmails",
                storageKey: null
            };
            return {
                fragment: {
                    argumentDefinitions: e,
                    kind: "Fragment",
                    metadata: null,
                    name: "RemoveEmailFromGlobalSuppressionMutation",
                    selections: [{
                        alias: null,
                        args: n,
                        concreteType: "RemoveEmailFromGlobalSuppressionPayload",
                        kind: "LinkedField",
                        name: "removeEmailFromGlobalSuppression",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "User",
                            kind: "LinkedField",
                            name: "user",
                            plural: !1,
                            selections: [t],
                            storageKey: null
                        }],
                        storageKey: null
                    }],
                    type: "Mutation",
                    abstractKey: null
                },
                kind: "Request",
                operation: {
                    argumentDefinitions: e,
                    kind: "Operation",
                    name: "RemoveEmailFromGlobalSuppressionMutation",
                    selections: [{
                        alias: null,
                        args: n,
                        concreteType: "RemoveEmailFromGlobalSuppressionPayload",
                        kind: "LinkedField",
                        name: "removeEmailFromGlobalSuppression",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "User",
                            kind: "LinkedField",
                            name: "user",
                            plural: !1,
                            selections: [t, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "id",
                                storageKey: null
                            }],
                            storageKey: null
                        }],
                        storageKey: null
                    }]
                },
                params: {
                    cacheID: "96bc92f09df732993698bfac4a35ae68",
                    id: null,
                    metadata: {},
                    name: "RemoveEmailFromGlobalSuppressionMutation",
                    operationKind: "mutation",
                    text: "mutation RemoveEmailFromGlobalSuppressionMutation(\n  $input: RemoveEmailFromGlobalSuppressionInput!\n) {\n  removeEmailFromGlobalSuppression(input: $input) {\n    user {\n      unsubscribedFromEmails\n      id\n    }\n  }\n}\n"
                }
            }
        }();
        a.hash = "34327130bfb8eb55c1dca6e0220df49c",
        e.exports = a
    },
    432: function(e, n, t) {
        "use strict";
        var a = function() {
            var e = [{
                defaultValue: null,
                kind: "LocalArgument",
                name: "input"
            }]
              , n = [{
                kind: "Variable",
                name: "input",
                variableName: "input"
            }]
              , t = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "name",
                storageKey: null
            };
            return {
                fragment: {
                    argumentDefinitions: e,
                    kind: "Fragment",
                    metadata: null,
                    name: "UpdateNameMutation",
                    selections: [{
                        alias: null,
                        args: n,
                        concreteType: "UpdateNamePayload",
                        kind: "LinkedField",
                        name: "updateName",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "User",
                            kind: "LinkedField",
                            name: "user",
                            plural: !1,
                            selections: [t],
                            storageKey: null
                        }],
                        storageKey: null
                    }],
                    type: "Mutation",
                    abstractKey: null
                },
                kind: "Request",
                operation: {
                    argumentDefinitions: e,
                    kind: "Operation",
                    name: "UpdateNameMutation",
                    selections: [{
                        alias: null,
                        args: n,
                        concreteType: "UpdateNamePayload",
                        kind: "LinkedField",
                        name: "updateName",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "User",
                            kind: "LinkedField",
                            name: "user",
                            plural: !1,
                            selections: [t, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "id",
                                storageKey: null
                            }],
                            storageKey: null
                        }],
                        storageKey: null
                    }]
                },
                params: {
                    cacheID: "6b1c56c2980e753ff4e27e062d7f7dc0",
                    id: null,
                    metadata: {},
                    name: "UpdateNameMutation",
                    operationKind: "mutation",
                    text: "mutation UpdateNameMutation(\n  $input: UpdateNameInput!\n) {\n  updateName(input: $input) {\n    user {\n      name\n      id\n    }\n  }\n}\n"
                }
            }
        }();
        a.hash = "3dacb416e331ff5e413dfdb4da69550d",
        e.exports = a
    },
    433: function(e, n, t) {},
    434: function(e, n, t) {
        "use strict";
        var a = {
            argumentDefinitions: [],
            kind: "Fragment",
            metadata: null,
            name: "Settings_user",
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "id",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "name",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "unsubscribedFromEmails",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "googleStatus",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "email",
                storageKey: null
            }],
            type: "User",
            abstractKey: null,
            hash: "db0b9344d3ed4a06b53286ac4d1d23ff"
        };
        e.exports = a
    },
    477: function(e, n, t) {
        "use strict";
        var a = function() {
            var e = [{
                defaultValue: null,
                kind: "LocalArgument",
                name: "input"
            }]
              , n = [{
                kind: "Variable",
                name: "input",
                variableName: "input"
            }]
              , t = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "id",
                storageKey: null
            }
              , a = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "title",
                storageKey: null
            }
              , i = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "type",
                storageKey: null
            }
              , l = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "description",
                storageKey: null
            }
              , s = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "pollStartTime",
                storageKey: null
            }
              , o = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "pollEndTime",
                storageKey: null
            }
              , r = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "maxScheduledDurationMins",
                storageKey: null
            }
              , c = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "timeZone",
                storageKey: null
            }
              , u = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "pollDates",
                storageKey: null
            }
              , d = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "isScheduled",
                storageKey: null
            }
              , m = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "createdAt",
                storageKey: null
            }
              , v = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "updatedAt",
                storageKey: null
            }
              , p = [t]
              , h = {
                alias: null,
                args: null,
                concreteType: "Event",
                kind: "LinkedField",
                name: "events",
                plural: !0,
                selections: p,
                storageKey: null
            }
              , b = {
                alias: null,
                args: null,
                concreteType: "Event",
                kind: "LinkedField",
                name: "eventsRespondedTo",
                plural: !0,
                selections: p,
                storageKey: null
            };
            return {
                fragment: {
                    argumentDefinitions: e,
                    kind: "Fragment",
                    metadata: null,
                    name: "CreateEventMutation",
                    selections: [{
                        alias: null,
                        args: n,
                        concreteType: "CreateEventPayload",
                        kind: "LinkedField",
                        name: "createEvent",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "Event",
                            kind: "LinkedField",
                            name: "event",
                            plural: !1,
                            selections: [t, a, i, l, s, o, r, c, u, d, m, v, {
                                alias: null,
                                args: null,
                                concreteType: "User",
                                kind: "LinkedField",
                                name: "user",
                                plural: !1,
                                selections: [h, b],
                                storageKey: null
                            }],
                            storageKey: null
                        }],
                        storageKey: null
                    }],
                    type: "Mutation",
                    abstractKey: null
                },
                kind: "Request",
                operation: {
                    argumentDefinitions: e,
                    kind: "Operation",
                    name: "CreateEventMutation",
                    selections: [{
                        alias: null,
                        args: n,
                        concreteType: "CreateEventPayload",
                        kind: "LinkedField",
                        name: "createEvent",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "Event",
                            kind: "LinkedField",
                            name: "event",
                            plural: !1,
                            selections: [t, a, i, l, s, o, r, c, u, d, m, v, {
                                alias: null,
                                args: null,
                                concreteType: "User",
                                kind: "LinkedField",
                                name: "user",
                                plural: !1,
                                selections: [h, b, t],
                                storageKey: null
                            }],
                            storageKey: null
                        }],
                        storageKey: null
                    }]
                },
                params: {
                    cacheID: "9f1a1d5a15397ad3244732e79c8ef71c",
                    id: null,
                    metadata: {},
                    name: "CreateEventMutation",
                    operationKind: "mutation",
                    text: "mutation CreateEventMutation(\n  $input: CreateEventInput!\n) {\n  createEvent(input: $input) {\n    event {\n      id\n      title\n      type\n      description\n      pollStartTime\n      pollEndTime\n      maxScheduledDurationMins\n      timeZone\n      pollDates\n      isScheduled\n      createdAt\n      updatedAt\n      user {\n        events {\n          id\n        }\n        eventsRespondedTo {\n          id\n        }\n        id\n      }\n    }\n  }\n}\n"
                }
            }
        }();
        a.hash = "7c75279e445005b6a40ca67c9bbac91d",
        e.exports = a
    },
    478: function(e, n, t) {
        "use strict";
        var a = function() {
            var e = [{
                defaultValue: null,
                kind: "LocalArgument",
                name: "id"
            }]
              , n = [{
                kind: "Variable",
                name: "id",
                variableName: "id"
            }]
              , t = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "id",
                storageKey: null
            }
              , a = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "title",
                storageKey: null
            }
              , i = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "start",
                storageKey: null
            }
              , l = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "end",
                storageKey: null
            }
              , s = [t]
              , o = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "name",
                storageKey: null
            }
              , r = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "email",
                storageKey: null
            };
            return {
                fragment: {
                    argumentDefinitions: e,
                    kind: "Fragment",
                    metadata: null,
                    name: "EventQuery",
                    selections: [{
                        alias: null,
                        args: n,
                        concreteType: "Event",
                        kind: "LinkedField",
                        name: "event",
                        plural: !1,
                        selections: [{
                            args: null,
                            kind: "FragmentSpread",
                            name: "Event_event"
                        }, {
                            args: null,
                            kind: "FragmentSpread",
                            name: "EditEvent_event"
                        }],
                        storageKey: null
                    }],
                    type: "RootQuery",
                    abstractKey: null
                },
                kind: "Request",
                operation: {
                    argumentDefinitions: e,
                    kind: "Operation",
                    name: "EventQuery",
                    selections: [{
                        alias: null,
                        args: n,
                        concreteType: "Event",
                        kind: "LinkedField",
                        name: "event",
                        plural: !1,
                        selections: [t, a, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "description",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "type",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "pollStartTime",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "pollEndTime",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "maxScheduledDurationMins",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "timeZone",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "pollDates",
                            storageKey: null
                        }, i, l, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "isScheduled",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "createdAt",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "updatedAt",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            concreteType: "User",
                            kind: "LinkedField",
                            name: "user",
                            plural: !1,
                            selections: s,
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            concreteType: "CalendarEvent",
                            kind: "LinkedField",
                            name: "googleEvents",
                            plural: !0,
                            selections: [a, i, l],
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            concreteType: "PollResponse",
                            kind: "LinkedField",
                            name: "pollResponses",
                            plural: !0,
                            selections: [t, {
                                alias: null,
                                args: null,
                                concreteType: null,
                                kind: "LinkedField",
                                name: "user",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "__typename",
                                    storageKey: null
                                }, {
                                    kind: "InlineFragment",
                                    selections: [o, r],
                                    type: "AnonymousUser",
                                    abstractKey: null
                                }, {
                                    kind: "InlineFragment",
                                    selections: [t, o, r],
                                    type: "User",
                                    abstractKey: null
                                }, {
                                    kind: "InlineFragment",
                                    selections: s,
                                    type: "Node",
                                    abstractKey: "__isNode"
                                }],
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                concreteType: "DateTimeRange",
                                kind: "LinkedField",
                                name: "availabilities",
                                plural: !0,
                                selections: [i, l],
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                concreteType: "Event",
                                kind: "LinkedField",
                                name: "event",
                                plural: !1,
                                selections: s,
                                storageKey: null
                            }],
                            storageKey: null
                        }],
                        storageKey: null
                    }]
                },
                params: {
                    cacheID: "06eb9805f0733114832484dddd8654c4",
                    id: null,
                    metadata: {},
                    name: "EventQuery",
                    operationKind: "query",
                    text: "query EventQuery(\n  $id: ID!\n) {\n  event(id: $id) {\n    ...Event_event\n    ...EditEvent_event\n    id\n  }\n}\n\nfragment EditEvent_event on Event {\n  id\n  title\n  description\n  type\n  pollStartTime\n  pollEndTime\n  maxScheduledDurationMins\n  pollDates\n  isScheduled\n  start\n  end\n  timeZone\n  updatedAt\n}\n\nfragment Event_event on Event {\n  id\n  title\n  description\n  type\n  pollStartTime\n  pollEndTime\n  maxScheduledDurationMins\n  timeZone\n  pollDates\n  start\n  end\n  isScheduled\n  createdAt\n  updatedAt\n  user {\n    id\n  }\n  googleEvents {\n    title\n    start\n    end\n  }\n  pollResponses {\n    id\n    user {\n      __typename\n      ... on AnonymousUser {\n        name\n        email\n      }\n      ... on User {\n        id\n        name\n        email\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    availabilities {\n      start\n      end\n    }\n    event {\n      id\n    }\n  }\n}\n"
                }
            }
        }();
        a.hash = "97f2299d36e32ba8b0330b6db6184c3f",
        e.exports = a
    },
    479: function(e, n, t) {
        "use strict";
        var a = function() {
            var e = [{
                defaultValue: null,
                kind: "LocalArgument",
                name: "input"
            }]
              , n = [{
                kind: "Variable",
                name: "input",
                variableName: "input"
            }]
              , t = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "id",
                storageKey: null
            }
              , a = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "title",
                storageKey: null
            }
              , i = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "description",
                storageKey: null
            }
              , l = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "pollStartTime",
                storageKey: null
            }
              , s = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "maxScheduledDurationMins",
                storageKey: null
            }
              , o = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "pollEndTime",
                storageKey: null
            }
              , r = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "timeZone",
                storageKey: null
            }
              , c = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "pollDates",
                storageKey: null
            }
              , u = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "start",
                storageKey: null
            }
              , d = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "end",
                storageKey: null
            }
              , m = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "isScheduled",
                storageKey: null
            }
              , v = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "createdAt",
                storageKey: null
            }
              , p = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "updatedAt",
                storageKey: null
            }
              , h = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "name",
                storageKey: null
            }
              , b = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "email",
                storageKey: null
            }
              , g = {
                alias: null,
                args: null,
                concreteType: "Event",
                kind: "LinkedField",
                name: "events",
                plural: !0,
                selections: [t, p],
                storageKey: null
            }
              , f = {
                alias: null,
                args: null,
                concreteType: "Event",
                kind: "LinkedField",
                name: "eventsRespondedTo",
                plural: !0,
                selections: [t],
                storageKey: null
            };
            return {
                fragment: {
                    argumentDefinitions: e,
                    kind: "Fragment",
                    metadata: null,
                    name: "UpdateEventMutation",
                    selections: [{
                        alias: null,
                        args: n,
                        concreteType: "UpdateEventPayload",
                        kind: "LinkedField",
                        name: "updateEvent",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "Event",
                            kind: "LinkedField",
                            name: "event",
                            plural: !1,
                            selections: [t, a, i, l, s, o, r, c, u, d, m, v, p, {
                                alias: null,
                                args: null,
                                concreteType: "User",
                                kind: "LinkedField",
                                name: "user",
                                plural: !1,
                                selections: [h, b, g, f],
                                storageKey: null
                            }],
                            storageKey: null
                        }],
                        storageKey: null
                    }],
                    type: "Mutation",
                    abstractKey: null
                },
                kind: "Request",
                operation: {
                    argumentDefinitions: e,
                    kind: "Operation",
                    name: "UpdateEventMutation",
                    selections: [{
                        alias: null,
                        args: n,
                        concreteType: "UpdateEventPayload",
                        kind: "LinkedField",
                        name: "updateEvent",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "Event",
                            kind: "LinkedField",
                            name: "event",
                            plural: !1,
                            selections: [t, a, i, l, s, o, r, c, u, d, m, v, p, {
                                alias: null,
                                args: null,
                                concreteType: "User",
                                kind: "LinkedField",
                                name: "user",
                                plural: !1,
                                selections: [h, b, g, f, t],
                                storageKey: null
                            }],
                            storageKey: null
                        }],
                        storageKey: null
                    }]
                },
                params: {
                    cacheID: "37b3d05c00f0cb3444c11a4856968ae2",
                    id: null,
                    metadata: {},
                    name: "UpdateEventMutation",
                    operationKind: "mutation",
                    text: "mutation UpdateEventMutation(\n  $input: UpdateEventInput!\n) {\n  updateEvent(input: $input) {\n    event {\n      id\n      title\n      description\n      pollStartTime\n      maxScheduledDurationMins\n      pollEndTime\n      timeZone\n      pollDates\n      start\n      end\n      isScheduled\n      createdAt\n      updatedAt\n      user {\n        name\n        email\n        events {\n          id\n          updatedAt\n        }\n        eventsRespondedTo {\n          id\n        }\n        id\n      }\n    }\n  }\n}\n"
                }
            }
        }();
        a.hash = "3c26f34f984140f04089228aa5ab3c45",
        e.exports = a
    },
    480: function(e, n, t) {
        "use strict";
        var a = function() {
            var e = [{
                defaultValue: null,
                kind: "LocalArgument",
                name: "input"
            }]
              , n = [{
                kind: "Variable",
                name: "input",
                variableName: "input"
            }]
              , t = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "message",
                storageKey: null
            }
              , a = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "id",
                storageKey: null
            }
              , i = [a]
              , l = {
                alias: null,
                args: null,
                concreteType: "Event",
                kind: "LinkedField",
                name: "events",
                plural: !0,
                selections: i,
                storageKey: null
            }
              , s = {
                alias: null,
                args: null,
                concreteType: "Notification",
                kind: "LinkedField",
                name: "notifications",
                plural: !0,
                selections: i,
                storageKey: null
            };
            return {
                fragment: {
                    argumentDefinitions: e,
                    kind: "Fragment",
                    metadata: null,
                    name: "DeleteEventMutation",
                    selections: [{
                        alias: null,
                        args: n,
                        concreteType: "DeleteEventPayload",
                        kind: "LinkedField",
                        name: "deleteEvent",
                        plural: !1,
                        selections: [t, {
                            alias: null,
                            args: null,
                            concreteType: "User",
                            kind: "LinkedField",
                            name: "user",
                            plural: !1,
                            selections: [l, s],
                            storageKey: null
                        }],
                        storageKey: null
                    }],
                    type: "Mutation",
                    abstractKey: null
                },
                kind: "Request",
                operation: {
                    argumentDefinitions: e,
                    kind: "Operation",
                    name: "DeleteEventMutation",
                    selections: [{
                        alias: null,
                        args: n,
                        concreteType: "DeleteEventPayload",
                        kind: "LinkedField",
                        name: "deleteEvent",
                        plural: !1,
                        selections: [t, {
                            alias: null,
                            args: null,
                            concreteType: "User",
                            kind: "LinkedField",
                            name: "user",
                            plural: !1,
                            selections: [l, s, a],
                            storageKey: null
                        }],
                        storageKey: null
                    }]
                },
                params: {
                    cacheID: "4ea3b0bd639645c530a288da05dfb105",
                    id: null,
                    metadata: {},
                    name: "DeleteEventMutation",
                    operationKind: "mutation",
                    text: "mutation DeleteEventMutation(\n  $input: DeleteEventInput!\n) {\n  deleteEvent(input: $input) {\n    message\n    user {\n      events {\n        id\n      }\n      notifications {\n        id\n      }\n      id\n    }\n  }\n}\n"
                }
            }
        }();
        a.hash = "10b773493b8744c2c504e5ce62b9bc78",
        e.exports = a
    },
    481: function(e, n, t) {
        "use strict";
        var a = {
            argumentDefinitions: [],
            kind: "Fragment",
            metadata: null,
            name: "EditEvent_event",
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "id",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "title",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "description",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "type",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "pollStartTime",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "pollEndTime",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "maxScheduledDurationMins",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "pollDates",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "isScheduled",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "start",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "end",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "timeZone",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "updatedAt",
                storageKey: null
            }],
            type: "Event",
            abstractKey: null,
            hash: "09d17b4f709ad191723468b964b8db08"
        };
        e.exports = a
    },
    483: function(e, n, t) {},
    484: function(e, n, t) {},
    485: function(e, n, t) {},
    486: function(e, n, t) {
        "use strict";
        var a = function() {
            var e = [{
                defaultValue: null,
                kind: "LocalArgument",
                name: "input"
            }]
              , n = [{
                kind: "Variable",
                name: "input",
                variableName: "input"
            }]
              , t = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "start",
                storageKey: null
            }
              , a = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "end",
                storageKey: null
            }
              , i = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "isScheduled",
                storageKey: null
            }
              , l = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "updatedAt",
                storageKey: null
            }
              , s = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "id",
                storageKey: null
            }
              , o = {
                alias: null,
                args: null,
                concreteType: "Event",
                kind: "LinkedField",
                name: "events",
                plural: !0,
                selections: [s],
                storageKey: null
            };
            return {
                fragment: {
                    argumentDefinitions: e,
                    kind: "Fragment",
                    metadata: null,
                    name: "ScheduleEventMutation",
                    selections: [{
                        alias: null,
                        args: n,
                        concreteType: "ScheduleEventPayload",
                        kind: "LinkedField",
                        name: "scheduleEvent",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "Event",
                            kind: "LinkedField",
                            name: "event",
                            plural: !1,
                            selections: [t, a, i, l, {
                                alias: null,
                                args: null,
                                concreteType: "User",
                                kind: "LinkedField",
                                name: "user",
                                plural: !1,
                                selections: [o],
                                storageKey: null
                            }],
                            storageKey: null
                        }],
                        storageKey: null
                    }],
                    type: "Mutation",
                    abstractKey: null
                },
                kind: "Request",
                operation: {
                    argumentDefinitions: e,
                    kind: "Operation",
                    name: "ScheduleEventMutation",
                    selections: [{
                        alias: null,
                        args: n,
                        concreteType: "ScheduleEventPayload",
                        kind: "LinkedField",
                        name: "scheduleEvent",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "Event",
                            kind: "LinkedField",
                            name: "event",
                            plural: !1,
                            selections: [t, a, i, l, {
                                alias: null,
                                args: null,
                                concreteType: "User",
                                kind: "LinkedField",
                                name: "user",
                                plural: !1,
                                selections: [o, s],
                                storageKey: null
                            }, s],
                            storageKey: null
                        }],
                        storageKey: null
                    }]
                },
                params: {
                    cacheID: "8ba65470db92e104536f989ca9ba4d50",
                    id: null,
                    metadata: {},
                    name: "ScheduleEventMutation",
                    operationKind: "mutation",
                    text: "mutation ScheduleEventMutation(\n  $input: ScheduleEventInput!\n) {\n  scheduleEvent(input: $input) {\n    event {\n      start\n      end\n      isScheduled\n      updatedAt\n      user {\n        events {\n          id\n        }\n        id\n      }\n      id\n    }\n  }\n}\n"
                }
            }
        }();
        a.hash = "87424939d5c36cee3b68eda9face7821",
        e.exports = a
    },
    487: function(e, n, t) {
        "use strict";
        var a = function() {
            var e = [{
                defaultValue: null,
                kind: "LocalArgument",
                name: "input"
            }]
              , n = [{
                kind: "Variable",
                name: "input",
                variableName: "input"
            }]
              , t = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "id",
                storageKey: null
            }
              , a = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "name",
                storageKey: null
            }
              , i = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "email",
                storageKey: null
            }
              , l = {
                kind: "InlineFragment",
                selections: [a, i],
                type: "AnonymousUser",
                abstractKey: null
            }
              , s = [t]
              , o = {
                alias: null,
                args: null,
                concreteType: "Event",
                kind: "LinkedField",
                name: "eventsRespondedTo",
                plural: !0,
                selections: s,
                storageKey: null
            }
              , r = {
                kind: "InlineFragment",
                selections: [t, a, i, {
                    alias: null,
                    args: null,
                    concreteType: "Event",
                    kind: "LinkedField",
                    name: "events",
                    plural: !0,
                    selections: s,
                    storageKey: null
                }, o],
                type: "User",
                abstractKey: null
            }
              , c = {
                alias: null,
                args: null,
                concreteType: "DateTimeRange",
                kind: "LinkedField",
                name: "availabilities",
                plural: !0,
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "start",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "end",
                    storageKey: null
                }],
                storageKey: null
            }
              , u = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "updatedAt",
                storageKey: null
            }
              , d = {
                alias: null,
                args: null,
                concreteType: "User",
                kind: "LinkedField",
                name: "user",
                plural: !1,
                selections: [t, a, o],
                storageKey: null
            }
              , m = {
                alias: null,
                args: null,
                concreteType: "Event",
                kind: "LinkedField",
                name: "event",
                plural: !1,
                selections: s,
                storageKey: null
            }
              , v = {
                kind: "InlineFragment",
                selections: [t, a, i],
                type: "User",
                abstractKey: null
            }
              , p = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "__typename",
                storageKey: null
            }
              , h = {
                kind: "InlineFragment",
                selections: s,
                type: "Node",
                abstractKey: "__isNode"
            };
            return {
                fragment: {
                    argumentDefinitions: e,
                    kind: "Fragment",
                    metadata: null,
                    name: "CreatePollResponseMutation",
                    selections: [{
                        alias: null,
                        args: n,
                        concreteType: "CreatePollResponsePayload",
                        kind: "LinkedField",
                        name: "createPollResponse",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "PollResponse",
                            kind: "LinkedField",
                            name: "pollResponse",
                            plural: !1,
                            selections: [t, {
                                alias: null,
                                args: null,
                                concreteType: null,
                                kind: "LinkedField",
                                name: "user",
                                plural: !1,
                                selections: [l, r],
                                storageKey: null
                            }, c, {
                                alias: null,
                                args: null,
                                concreteType: "Event",
                                kind: "LinkedField",
                                name: "event",
                                plural: !1,
                                selections: [t, u, d, {
                                    alias: null,
                                    args: null,
                                    concreteType: "PollResponse",
                                    kind: "LinkedField",
                                    name: "pollResponses",
                                    plural: !0,
                                    selections: [t, m, {
                                        alias: null,
                                        args: null,
                                        concreteType: null,
                                        kind: "LinkedField",
                                        name: "user",
                                        plural: !1,
                                        selections: [l, v],
                                        storageKey: null
                                    }, c],
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }],
                        storageKey: null
                    }],
                    type: "Mutation",
                    abstractKey: null
                },
                kind: "Request",
                operation: {
                    argumentDefinitions: e,
                    kind: "Operation",
                    name: "CreatePollResponseMutation",
                    selections: [{
                        alias: null,
                        args: n,
                        concreteType: "CreatePollResponsePayload",
                        kind: "LinkedField",
                        name: "createPollResponse",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "PollResponse",
                            kind: "LinkedField",
                            name: "pollResponse",
                            plural: !1,
                            selections: [t, {
                                alias: null,
                                args: null,
                                concreteType: null,
                                kind: "LinkedField",
                                name: "user",
                                plural: !1,
                                selections: [p, l, r, h],
                                storageKey: null
                            }, c, {
                                alias: null,
                                args: null,
                                concreteType: "Event",
                                kind: "LinkedField",
                                name: "event",
                                plural: !1,
                                selections: [t, u, d, {
                                    alias: null,
                                    args: null,
                                    concreteType: "PollResponse",
                                    kind: "LinkedField",
                                    name: "pollResponses",
                                    plural: !0,
                                    selections: [t, m, {
                                        alias: null,
                                        args: null,
                                        concreteType: null,
                                        kind: "LinkedField",
                                        name: "user",
                                        plural: !1,
                                        selections: [p, l, v, h],
                                        storageKey: null
                                    }, c],
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }],
                        storageKey: null
                    }]
                },
                params: {
                    cacheID: "a83a09354aa7c2f9e0a9a5190bdf6419",
                    id: null,
                    metadata: {},
                    name: "CreatePollResponseMutation",
                    operationKind: "mutation",
                    text: "mutation CreatePollResponseMutation(\n  $input: CreatePollResponseInput!\n) {\n  createPollResponse(input: $input) {\n    pollResponse {\n      id\n      user {\n        __typename\n        ... on AnonymousUser {\n          name\n          email\n        }\n        ... on User {\n          id\n          name\n          email\n          events {\n            id\n          }\n          eventsRespondedTo {\n            id\n          }\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      availabilities {\n        start\n        end\n      }\n      event {\n        id\n        updatedAt\n        user {\n          id\n          name\n          eventsRespondedTo {\n            id\n          }\n        }\n        pollResponses {\n          id\n          event {\n            id\n          }\n          user {\n            __typename\n            ... on AnonymousUser {\n              name\n              email\n            }\n            ... on User {\n              id\n              name\n              email\n            }\n            ... on Node {\n              __isNode: __typename\n              id\n            }\n          }\n          availabilities {\n            start\n            end\n          }\n        }\n      }\n    }\n  }\n}\n"
                }
            }
        }();
        a.hash = "5afea5edd81a9050f2f2b78e263466ff",
        e.exports = a
    },
    488: function(e, n, t) {
        "use strict";
        var a = function() {
            var e = [{
                defaultValue: null,
                kind: "LocalArgument",
                name: "input"
            }]
              , n = [{
                kind: "Variable",
                name: "input",
                variableName: "input"
            }]
              , t = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "id",
                storageKey: null
            }
              , a = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "name",
                storageKey: null
            }
              , i = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "email",
                storageKey: null
            }
              , l = {
                kind: "InlineFragment",
                selections: [a, i],
                type: "AnonymousUser",
                abstractKey: null
            }
              , s = {
                kind: "InlineFragment",
                selections: [t, a, i],
                type: "User",
                abstractKey: null
            }
              , o = {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "user",
                plural: !1,
                selections: [l, s],
                storageKey: null
            }
              , r = {
                alias: null,
                args: null,
                concreteType: "DateTimeRange",
                kind: "LinkedField",
                name: "availabilities",
                plural: !0,
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "start",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "end",
                    storageKey: null
                }],
                storageKey: null
            }
              , c = {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "user",
                plural: !1,
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "__typename",
                    storageKey: null
                }, l, s, {
                    kind: "InlineFragment",
                    selections: [t],
                    type: "Node",
                    abstractKey: "__isNode"
                }],
                storageKey: null
            };
            return {
                fragment: {
                    argumentDefinitions: e,
                    kind: "Fragment",
                    metadata: null,
                    name: "UpdatePollResponseMutation",
                    selections: [{
                        alias: null,
                        args: n,
                        concreteType: "UpdatePollResponsePayload",
                        kind: "LinkedField",
                        name: "updatePollResponse",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "PollResponse",
                            kind: "LinkedField",
                            name: "pollResponse",
                            plural: !1,
                            selections: [t, o, r, {
                                alias: null,
                                args: null,
                                concreteType: "Event",
                                kind: "LinkedField",
                                name: "event",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: "PollResponse",
                                    kind: "LinkedField",
                                    name: "pollResponses",
                                    plural: !0,
                                    selections: [t, o, r],
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }],
                        storageKey: null
                    }],
                    type: "Mutation",
                    abstractKey: null
                },
                kind: "Request",
                operation: {
                    argumentDefinitions: e,
                    kind: "Operation",
                    name: "UpdatePollResponseMutation",
                    selections: [{
                        alias: null,
                        args: n,
                        concreteType: "UpdatePollResponsePayload",
                        kind: "LinkedField",
                        name: "updatePollResponse",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "PollResponse",
                            kind: "LinkedField",
                            name: "pollResponse",
                            plural: !1,
                            selections: [t, c, r, {
                                alias: null,
                                args: null,
                                concreteType: "Event",
                                kind: "LinkedField",
                                name: "event",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: "PollResponse",
                                    kind: "LinkedField",
                                    name: "pollResponses",
                                    plural: !0,
                                    selections: [t, c, r],
                                    storageKey: null
                                }, t],
                                storageKey: null
                            }],
                            storageKey: null
                        }],
                        storageKey: null
                    }]
                },
                params: {
                    cacheID: "81a776e180dbefbc1c7667fdfbe67a5e",
                    id: null,
                    metadata: {},
                    name: "UpdatePollResponseMutation",
                    operationKind: "mutation",
                    text: "mutation UpdatePollResponseMutation(\n  $input: UpdatePollResponseInput!\n) {\n  updatePollResponse(input: $input) {\n    pollResponse {\n      id\n      user {\n        __typename\n        ... on AnonymousUser {\n          name\n          email\n        }\n        ... on User {\n          id\n          name\n          email\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      availabilities {\n        start\n        end\n      }\n      event {\n        pollResponses {\n          id\n          user {\n            __typename\n            ... on AnonymousUser {\n              name\n              email\n            }\n            ... on User {\n              id\n              name\n              email\n            }\n            ... on Node {\n              __isNode: __typename\n              id\n            }\n          }\n          availabilities {\n            start\n            end\n          }\n        }\n        id\n      }\n    }\n  }\n}\n"
                }
            }
        }();
        a.hash = "7ba9fbd558a9b97ab60cf39cfddf01fd",
        e.exports = a
    },
    489: function(e, n, t) {
        "use strict";
        var a = function() {
            var e = [{
                defaultValue: null,
                kind: "LocalArgument",
                name: "input"
            }]
              , n = [{
                kind: "Variable",
                name: "input",
                variableName: "input"
            }]
              , t = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "id",
                storageKey: null
            }
              , a = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "name",
                storageKey: null
            }
              , i = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "email",
                storageKey: null
            }
              , l = {
                kind: "InlineFragment",
                selections: [a, i],
                type: "AnonymousUser",
                abstractKey: null
            }
              , s = [t]
              , o = {
                kind: "InlineFragment",
                selections: [t, a, i, {
                    alias: null,
                    args: null,
                    concreteType: "Event",
                    kind: "LinkedField",
                    name: "events",
                    plural: !0,
                    selections: s,
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    concreteType: "Event",
                    kind: "LinkedField",
                    name: "eventsRespondedTo",
                    plural: !0,
                    selections: s,
                    storageKey: null
                }],
                type: "User",
                abstractKey: null
            }
              , r = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "start",
                storageKey: null
            }
              , c = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "end",
                storageKey: null
            }
              , u = {
                alias: null,
                args: null,
                concreteType: "DateTimeRange",
                kind: "LinkedField",
                name: "availabilities",
                plural: !0,
                selections: [r, c],
                storageKey: null
            }
              , d = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "title",
                storageKey: null
            }
              , m = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "description",
                storageKey: null
            }
              , v = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "type",
                storageKey: null
            }
              , p = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "pollStartTime",
                storageKey: null
            }
              , h = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "pollEndTime",
                storageKey: null
            }
              , b = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "maxScheduledDurationMins",
                storageKey: null
            }
              , g = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "timeZone",
                storageKey: null
            }
              , f = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "pollDates",
                storageKey: null
            }
              , j = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "isScheduled",
                storageKey: null
            }
              , y = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "createdAt",
                storageKey: null
            }
              , k = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "updatedAt",
                storageKey: null
            }
              , O = {
                alias: null,
                args: null,
                concreteType: "User",
                kind: "LinkedField",
                name: "user",
                plural: !1,
                selections: s,
                storageKey: null
            }
              , E = [d, r, c]
              , T = {
                alias: null,
                args: null,
                concreteType: "CalendarEvent",
                kind: "LinkedField",
                name: "googleEvents",
                plural: !0,
                selections: E,
                storageKey: null
            }
              , w = {
                alias: null,
                args: null,
                concreteType: "CalendarEvent",
                kind: "LinkedField",
                name: "outlookEvents",
                plural: !0,
                selections: E,
                storageKey: null
            }
              , x = {
                kind: "InlineFragment",
                selections: [t, a, i],
                type: "User",
                abstractKey: null
            }
              , S = {
                alias: null,
                args: null,
                concreteType: "Event",
                kind: "LinkedField",
                name: "event",
                plural: !1,
                selections: s,
                storageKey: null
            }
              , N = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "__typename",
                storageKey: null
            }
              , _ = {
                kind: "InlineFragment",
                selections: s,
                type: "Node",
                abstractKey: "__isNode"
            };
            return {
                fragment: {
                    argumentDefinitions: e,
                    kind: "Fragment",
                    metadata: null,
                    name: "DeletePollResponseMutation",
                    selections: [{
                        alias: null,
                        args: n,
                        concreteType: "DeletePollResponsePayload",
                        kind: "LinkedField",
                        name: "deletePollResponse",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "PollResponse",
                            kind: "LinkedField",
                            name: "pollResponse",
                            plural: !1,
                            selections: [t, {
                                alias: null,
                                args: null,
                                concreteType: null,
                                kind: "LinkedField",
                                name: "user",
                                plural: !1,
                                selections: [l, o],
                                storageKey: null
                            }, u, {
                                alias: null,
                                args: null,
                                concreteType: "Event",
                                kind: "LinkedField",
                                name: "event",
                                plural: !1,
                                selections: [t, d, m, v, p, h, b, g, f, r, c, j, y, k, O, T, w, {
                                    alias: null,
                                    args: null,
                                    concreteType: "PollResponse",
                                    kind: "LinkedField",
                                    name: "pollResponses",
                                    plural: !0,
                                    selections: [t, {
                                        alias: null,
                                        args: null,
                                        concreteType: null,
                                        kind: "LinkedField",
                                        name: "user",
                                        plural: !1,
                                        selections: [l, x],
                                        storageKey: null
                                    }, u, S],
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }],
                        storageKey: null
                    }],
                    type: "Mutation",
                    abstractKey: null
                },
                kind: "Request",
                operation: {
                    argumentDefinitions: e,
                    kind: "Operation",
                    name: "DeletePollResponseMutation",
                    selections: [{
                        alias: null,
                        args: n,
                        concreteType: "DeletePollResponsePayload",
                        kind: "LinkedField",
                        name: "deletePollResponse",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "PollResponse",
                            kind: "LinkedField",
                            name: "pollResponse",
                            plural: !1,
                            selections: [t, {
                                alias: null,
                                args: null,
                                concreteType: null,
                                kind: "LinkedField",
                                name: "user",
                                plural: !1,
                                selections: [N, l, o, _],
                                storageKey: null
                            }, u, {
                                alias: null,
                                args: null,
                                concreteType: "Event",
                                kind: "LinkedField",
                                name: "event",
                                plural: !1,
                                selections: [t, d, m, v, p, h, b, g, f, r, c, j, y, k, O, T, w, {
                                    alias: null,
                                    args: null,
                                    concreteType: "PollResponse",
                                    kind: "LinkedField",
                                    name: "pollResponses",
                                    plural: !0,
                                    selections: [t, {
                                        alias: null,
                                        args: null,
                                        concreteType: null,
                                        kind: "LinkedField",
                                        name: "user",
                                        plural: !1,
                                        selections: [N, l, x, _],
                                        storageKey: null
                                    }, u, S],
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }],
                        storageKey: null
                    }]
                },
                params: {
                    cacheID: "431870feaa80e12dfb65aab50fba17dc",
                    id: null,
                    metadata: {},
                    name: "DeletePollResponseMutation",
                    operationKind: "mutation",
                    text: "mutation DeletePollResponseMutation(\n  $input: DeletePollResponseInput!\n) {\n  deletePollResponse(input: $input) {\n    pollResponse {\n      id\n      user {\n        __typename\n        ... on AnonymousUser {\n          name\n          email\n        }\n        ... on User {\n          id\n          name\n          email\n          events {\n            id\n          }\n          eventsRespondedTo {\n            id\n          }\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      availabilities {\n        start\n        end\n      }\n      event {\n        id\n        title\n        description\n        type\n        pollStartTime\n        pollEndTime\n        maxScheduledDurationMins\n        timeZone\n        pollDates\n        start\n        end\n        isScheduled\n        createdAt\n        updatedAt\n        user {\n          id\n        }\n        googleEvents {\n          title\n          start\n          end\n        }\n        outlookEvents {\n          title\n          start\n          end\n        }\n        pollResponses {\n          id\n          user {\n            __typename\n            ... on AnonymousUser {\n              name\n              email\n            }\n            ... on User {\n              id\n              name\n              email\n            }\n            ... on Node {\n              __isNode: __typename\n              id\n            }\n          }\n          availabilities {\n            start\n            end\n          }\n          event {\n            id\n          }\n        }\n      }\n    }\n  }\n}\n"
                }
            }
        }();
        a.hash = "0933950aa3c0a8b45d295b173f3a33e7",
        e.exports = a
    },
    490: function(e, n, t) {},
    491: function(e, n, t) {},
    492: function(e, n, t) {},
    493: function(e, n, t) {
        "use strict";
        var a = {
            argumentDefinitions: [],
            kind: "Fragment",
            metadata: null,
            name: "Event_user",
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "id",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "name",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "email",
                storageKey: null
            }],
            type: "User",
            abstractKey: null,
            hash: "e22be3c9ecf7a1a6dab496782035e1be"
        };
        e.exports = a
    },
    494: function(e, n, t) {
        "use strict";
        var a = function() {
            var e = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "id",
                storageKey: null
            }
              , n = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "title",
                storageKey: null
            }
              , t = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "start",
                storageKey: null
            }
              , a = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "end",
                storageKey: null
            }
              , i = [e]
              , l = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "name",
                storageKey: null
            }
              , s = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "email",
                storageKey: null
            };
            return {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "Event_event",
                selections: [e, n, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "description",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "type",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "pollStartTime",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "pollEndTime",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "maxScheduledDurationMins",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "timeZone",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "pollDates",
                    storageKey: null
                }, t, a, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "isScheduled",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "createdAt",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "updatedAt",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    concreteType: "User",
                    kind: "LinkedField",
                    name: "user",
                    plural: !1,
                    selections: i,
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    concreteType: "CalendarEvent",
                    kind: "LinkedField",
                    name: "googleEvents",
                    plural: !0,
                    selections: [n, t, a],
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    concreteType: "PollResponse",
                    kind: "LinkedField",
                    name: "pollResponses",
                    plural: !0,
                    selections: [e, {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: "LinkedField",
                        name: "user",
                        plural: !1,
                        selections: [{
                            kind: "InlineFragment",
                            selections: [l, s],
                            type: "AnonymousUser",
                            abstractKey: null
                        }, {
                            kind: "InlineFragment",
                            selections: [e, l, s],
                            type: "User",
                            abstractKey: null
                        }],
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        concreteType: "DateTimeRange",
                        kind: "LinkedField",
                        name: "availabilities",
                        plural: !0,
                        selections: [t, a],
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        concreteType: "Event",
                        kind: "LinkedField",
                        name: "event",
                        plural: !1,
                        selections: i,
                        storageKey: null
                    }],
                    storageKey: null
                }],
                type: "Event",
                abstractKey: null
            }
        }();
        a.hash = "4f606c24c9b46b04caf2ee6c1f063dce",
        e.exports = a
    },
    495: function(e, n, t) {
        "use strict";
        var a = {
            argumentDefinitions: [],
            kind: "Fragment",
            metadata: null,
            name: "useUserLoggedIn_user",
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "id",
                storageKey: null
            }],
            type: "User",
            abstractKey: null,
            hash: "a1425919bb03fe6e935dbb7f2a3d4db7"
        };
        e.exports = a
    },
    496: function(e, n, t) {},
    497: function(e, n, t) {
        "use strict";
        var a = {
            argumentDefinitions: [],
            kind: "Fragment",
            metadata: null,
            name: "AnnouncementLoader_announcement",
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "id",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "title",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "linkText",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "linkHref",
                storageKey: null
            }],
            type: "Announcement",
            abstractKey: null,
            hash: "6864af83885a1da016fab971cda15486"
        };
        e.exports = a
    },
    498: function(e, n, t) {
        "use strict";
        var a = {
            argumentDefinitions: [],
            kind: "Fragment",
            metadata: null,
            name: "AnnouncementLoader_user",
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "googleStatus",
                storageKey: null
            }],
            type: "User",
            abstractKey: null,
            hash: "20262010b04d4960ec48938d2e2f3276"
        };
        e.exports = a
    },
    499: function(e, n, t) {},
    500: function(e, n, t) {},
    501: function(e, n, t) {
        "use strict";
        var a = {
            argumentDefinitions: [],
            kind: "Fragment",
            metadata: null,
            name: "App_user",
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "id",
                storageKey: null
            }],
            type: "User",
            abstractKey: null,
            hash: "938efdb07131a8648eea5e4812bb98c4"
        };
        e.exports = a
    },
    502: function(e, n, t) {
        "use strict";
        var a = {
            argumentDefinitions: [],
            kind: "Fragment",
            metadata: null,
            name: "App_googleAuth",
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "redirectURL",
                storageKey: null
            }],
            type: "OAuthURL",
            abstractKey: null,
            hash: "26c7d27fa866c331c248a0ebf538867b"
        };
        e.exports = a
    },
    517: function(e, n, t) {
        "use strict";
        t.r(n);
        var a, i, l, s = t(524), o = t(1), r = t.n(o), c = t(13), u = t.n(c), d = t(9), m = t(5), v = t(16), p = t(26), h = new function e() {
            for (var n in Object(v.a)(this, e),
            window.console)
                "function" === typeof window.console[n] && (this[n] = function() {}
                );
            return this
        }
        , b = new (function() {
            function e() {
                Object(v.a)(this, e),
                h.log("Initializing Google Analytics..."),
                window.dataLayer = window.dataLayer || [],
                this.gtag = function() {
                    dataLayer.push(arguments)
                }
                ,
                this.gtag("js", new Date),
                this.gtag("config", "G-C76GCR5258", {
                    send_page_view: !1
                })
            }
            return Object(p.a)(e, [{
                key: "setPage",
                value: function(e) {
                    this.gtag("set", {
                        page_location: e
                    })
                }
            }, {
                key: "setUserId",
                value: function(e) {
                    this.gtag("set", {
                        user_id: e
                    })
                }
            }, {
                key: "trackPageView",
                value: function() {
                    this.gtag("event", "page_view")
                }
            }, {
                key: "trackEvent",
                value: function(e, n, t, a) {
                    var i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                    this.gtag("event", n, {
                        event_category: e,
                        event_label: t,
                        value: a,
                        non_interaction: i
                    })
                }
            }]),
            e
        }()), g = t(14), f = t.n(g), j = void 0 !== a ? a : a = t(312), y = void 0 !== i ? i : i = t(313), k = t(49), O = t(22), E = t(236), T = t(25), w = t.n(T), x = 13, S = 37, N = 39, _ = "phone", R = "phablet", C = "tablet", D = "desktop", A = 0, L = 1, F = 2, P = "AUTH_USER", I = "AUTH_CALENDAR", M = function(e) {
            var n = e.content;
            e.closeToast;
            return n
        }, K = function() {
            function e() {
                Object(v.a)(this, e)
            }
            return Object(p.a)(e, null, [{
                key: "mod",
                value: function(e, n) {
                    return (e % n + n) % n
                }
            }, {
                key: "numDigits",
                value: function(e) {
                    return Math.ceil(Math.log10(e + 1))
                }
            }, {
                key: "appendNull",
                value: function(e, n) {
                    for (var t = [], a = 0; a < n; a++)
                        t[a] = null;
                    return e.concat(t)
                }
            }, {
                key: "getMaxFromArray",
                value: function(n) {
                    return Math.max.apply(Math, Object(E.a)(n.map((function(n) {
                        return Array.isArray(n) ? e.getMaxFromArray(n) : n
                    }
                    ))))
                }
            }, {
                key: "prefixNull",
                value: function(e, n) {
                    for (var t = [], a = 0; a < n; a++)
                        t[a] = null;
                    return t.concat(e)
                }
            }, {
                key: "sortAsc",
                value: function(e, n) {
                    return e > n ? 1 : e < n ? -1 : 0
                }
            }, {
                key: "sumArrays",
                value: function(e, n) {
                    return e.map((function(e, t) {
                        return e + n[t]
                    }
                    ))
                }
            }, {
                key: "twerk",
                value: function(e) {
                    e.classList.add("twerk"),
                    setTimeout((function() {
                        e.classList.remove("twerk")
                    }
                    ), 300)
                }
            }, {
                key: "scale",
                value: function(e) {
                    e && (e.classList.add("scale"),
                    setTimeout((function() {
                        e.classList.remove("scale")
                    }
                    ), 500))
                }
            }, {
                key: "hoursBetween",
                value: function(n, t) {
                    return e.mod(t - n, 24)
                }
            }, {
                key: "hoursInPoll",
                value: function(n, t) {
                    var a = e.hoursBetween(n, t);
                    return 0 === a ? 24 : a
                }
            }, {
                key: "getDateTime",
                value: function(n, t, a, i, l, s) {
                    var o = e.hoursInPoll(t, a) * i
                      , r = Math.floor(l / o)
                      , c = t + Math.floor(l % o / i)
                      , u = (l % i + (s ? 1 : 0)) * Math.floor(1 / i * 60);
                    return n[r].clone().add(c, "hours").add(u, "minutes")
                }
            }, {
                key: "setToUtc",
                value: function(e) {
                    return w.a.utc(e.format("YYYY-MM-DDTHH:mm:ss"))
                }
            }, {
                key: "parseInTimezone",
                value: function(e, n) {
                    var t = w.a.utc(e).format("YYYY-MM-DDTHH:mm:ss");
                    return w.a.tz(t, n).utc()
                }
            }, {
                key: "availabilitiesToRanges",
                value: function(n, t, a, i, l) {
                    for (var s = -1, o = [], r = e.hoursInPoll(a, i) * l, c = 0; c < n.length; c++)
                        n[c] > 0 ? s < 0 ? s = c : c % r === 0 && (o.push([s, c - 1]),
                        s = c) : s >= 0 && (o.push([s, c - 1]),
                        s = -1);
                    return s >= 0 && o.push([s, n.length - 1]),
                    o.map((function(n) {
                        return {
                            start: e.getDateTime(t, a, i, l, n[0], !1).format(),
                            end: e.getDateTime(t, a, i, l, n[1], !0).format()
                        }
                    }
                    ))
                }
            }, {
                key: "getBlock",
                value: function(n, t, a, i, l, s) {
                    for (var o = e.hoursInPoll(a, i), r = -1, c = 0; c < t.length; c++) {
                        var u = t[c].clone().hours(a)
                          , d = u.clone().add(o, "hours");
                        if (n.isSameOrAfter(u) && n.isSameOrBefore(d)) {
                            r = c,
                            n.isSame(d) && 24 === e.hoursInPoll(a, i) && (r += 1);
                            break
                        }
                    }
                    if (r < 0)
                        return console.debug("getBlock: provided dateTime falls outside of this poll's bounds"),
                        null;
                    var m = l / 60
                      , v = s ? -1 : 0;
                    return e.hoursInPoll(a, i) * l * r + e.hoursBetween(a, n.hours()) * l + Math.floor(n.minutes() * m) + v
                }
            }, {
                key: "rangesToAvailabilities",
                value: function(n, t, a, i, l) {
                    var s, o = e.hoursInPoll(a, i) * l, r = new Array(t.length * o).fill(0), c = Object(O.a)(n);
                    try {
                        for (c.s(); !(s = c.n()).done; )
                            for (var u = s.value, d = e.getBlock(u.start, t, a, i, l, !1), m = e.getBlock(u.end, t, a, i, l, !0), v = d; v <= m; v++)
                                r[v] = 1
                    } catch (p) {
                        c.e(p)
                    } finally {
                        c.f()
                    }
                    return r
                }
            }, {
                key: "split",
                value: function(n, t, a) {
                    var i = n.start.clone();
                    i.hours() < t && i.hours(t).minutes(0);
                    for (var l = e.hoursInPoll(t, a), s = n.end.clone(), o = i.clone().hours(t).minutes(0).add(l, "hours"), r = []; s.isAfter(o); )
                        r.push(Object.assign({}, n, {
                            start: i.clone(),
                            end: o.clone()
                        })),
                        i.hours(t).minutes(0).add(1, "days"),
                        o.add(1, "days");
                    return i.isBefore(s) && r.push(Object.assign({}, n, {
                        start: i.clone(),
                        end: s.clone()
                    })),
                    r
                }
            }, {
                key: "sleep",
                value: function(e) {
                    return new Promise((function(n) {
                        return setTimeout(n, e)
                    }
                    ))
                }
            }, {
                key: "setDocumentTitle",
                value: function(e, n) {
                    document.title = n ? e : e.trim() + " - LettuceMeet"
                }
            }, {
                key: "getScreenType",
                value: function(e, n) {
                    return e <= 320 ? _ : e <= 480 ? R : e <= 768 ? C : D
                }
            }, {
                key: "isDesktop",
                value: function(e) {
                    return e === D
                }
            }, {
                key: "isTablet",
                value: function(e) {
                    return e === C
                }
            }, {
                key: "isPhablet",
                value: function(e) {
                    return e === R
                }
            }, {
                key: "isPhone",
                value: function(e) {
                    return e === _
                }
            }, {
                key: "getEnvironment",
                value: function() {
                    return "production"
                }
            }, {
                key: "getSentryDSN",
                value: function() {
                    return "https://12266a599b6f4708a212525c0fd08c65@sentry.io/1764131"
                }
            }, {
                key: "toPercentString",
                value: function(e) {
                    return 100 * e + "%"
                }
            }, {
                key: "convertTimezone",
                value: function(n, t, a) {
                    return e.setToUtc(e.parseInTimezone(n, t).tz(a))
                }
            }, {
                key: "convertEventToLocalTimezone",
                value: function(n) {
                    if (null !== n && void 0 !== n) {
                        var t = w.a.tz.guess()
                          , a = n.timeZone || t
                          , i = parseInt(n.pollStartTime.substring(0, 2))
                          , l = parseInt(n.pollEndTime.substring(0, 2))
                          , s = n.googleEvents || []
                          , o = n.outlookEvents || []
                          , r = s.concat(o).map((function(n) {
                            var a = w.a.utc(n.start).tz(t)
                              , i = w.a.utc(n.end).tz(t);
                            return {
                                title: n.title,
                                start: e.setToUtc(a),
                                end: e.setToUtc(i)
                            }
                        }
                        ))
                          , c = w.a.tz(n.pollDates[0], a)
                          , u = c.clone().tz(a).utcOffset()
                          , d = c.clone().tz(t).utcOffset() - u
                          , m = (d - e.mod(d, 60)) / 60
                          , v = (d + e.mod(d, 60)) / 60
                          , p = n.pollDates.map((function(n) {
                            var l = w.a.tz(n, a).hours(i);
                            return l.tz(t).startOf("day"),
                            e.setToUtc(l)
                        }
                        ));
                        i = e.mod(i + m, 24),
                        l = e.mod(l + v, 24);
                        var h = null;
                        return n.pollResponses && (h = n.pollResponses.map((function(n) {
                            var i = null;
                            return n.availabilities && (i = n.availabilities.map((function(n) {
                                return Object(k.a)(Object(k.a)({}, n), {}, {
                                    start: e.convertTimezone(n.start, a, t),
                                    end: e.convertTimezone(n.end, a, t)
                                })
                            }
                            ))),
                            Object(k.a)(Object(k.a)({}, n), {}, {
                                availabilities: i
                            })
                        }
                        ))),
                        Object(k.a)(Object(k.a)({}, n), {}, {
                            pollStartTime: i,
                            pollEndTime: l,
                            pollDates: p,
                            pollResponses: h,
                            calendarEvents: r,
                            start: e.convertTimezone(n.start, a, t),
                            end: e.convertTimezone(n.end, a, t),
                            timeZone: t
                        })
                    }
                }
            }, {
                key: "formatTimezone",
                value: function(e) {
                    return w()().tz(e).format("z")
                }
            }, {
                key: "getPollDatesBeforeNow",
                value: function(e) {
                    var n = w.a.tz.guess()
                      , t = e.timeZone || n
                      , a = [];
                    return e.pollDates && e.pollDates.length > 0 && e.pollDates.forEach((function(e) {
                        var n = w.a.tz(e, t)
                          , i = w.a.tz(w.a.now(), t);
                        n.isBefore(i, "day") && n.toda && a.push(e)
                    }
                    )),
                    h.log("getPollDatesBeforeNow - ".concat(a.toString())),
                    a
                }
            }, {
                key: "firstContiguousSection",
                value: function(e, n, t, a) {
                    if (e < 0 || null !== t && n >= t.length)
                        throw new Error("start ".concat(e, ", end ").concat(n, " invalid for mask length ").concat(t.length));
                    var i = null
                      , l = null;
                    if (0 == a)
                        return [i, l];
                    for (var s = n > e ? 1 : -1, o = e; 1 == s ? o <= n : o >= n; o += s)
                        if (null === i)
                            null !== t && 0 === t[o] || (i = o,
                            l = o);
                        else {
                            var r = null !== t && 0 === t[o]
                              , c = null !== a && Math.abs(o - i) + 1 > a;
                            if (r || c)
                                break;
                            l = o
                        }
                    return [i, l]
                }
            }]),
            e
        }(), U = (t(316),
        Object(o.createContext)(null)), B = Object(o.createContext)(null), V = Object(o.createContext)(null), G = Object(o.createContext)({
            screenType: D,
            setBottomBarActions: function(e) {}
        }), W = t(15), H = t(11), z = t(6), Y = (t(317),
        t(318),
        t(0)), q = "open", Z = "closed", $ = function(e) {
            var n, a = Object(o.useContext)(U), i = Object(o.useContext)(G).screenType, s = Object(H.h)(), r = Object(H.g)(), c = void 0 !== l ? l : l = t(324), u = Object(m.useFragment)(c, a), v = Object(o.useState)(Z), p = Object(d.a)(v, 2), h = p[0], b = p[1], g = function() {
                j(),
                r.push("/")
            }, f = function() {
                b(q)
            }, j = function() {
                b(Z)
            }, y = function(e, n) {
                var t = s.pathname === n ? "active " : ""
                  , a = 1 === (null === u || void 0 === u ? void 0 : u.googleStatus) && "/me" === n ? "yellow-badge" : "";
                return Object(Y.jsxs)(W.b, {
                    role: "button",
                    className: "header-action " + t,
                    onClick: j,
                    to: n,
                    children: [Object(Y.jsx)("div", {
                        className: a
                    }), e]
                }, n.substr(1))
            }, k = function(e) {
                return e ? [y("Notifications", "/me/notifications"), y("Profile", "/me")] : [y("How it works", "/how-it-works"), y("Sign up", "/signup"), y("Log in", "/login")]
            };
            return Object(Y.jsxs)("div", {
                children: [(n = u,
                Object(Y.jsxs)("div", {
                    id: "header-wrapper",
                    children: [!K.isDesktop(i) && Object(Y.jsx)("div", {
                        id: "header-hamburger",
                        role: "button",
                        onClick: f
                    }), Object(Y.jsx)("div", {
                        id: "header-logo",
                        role: "button",
                        onClick: g
                    }), !K.isDesktop(i) && Object(Y.jsx)("div", {
                        id: "header-spacer"
                    }), K.isDesktop(i) && Object(Y.jsxs)("div", {
                        id: "header-right",
                        className: "header-right",
                        children: [y("Meet", "/"), k(n)]
                    })]
                })), function(e) {
                    if (!K.isDesktop(i) && h !== Z)
                        return Object(Y.jsxs)("div", {
                            id: "nav-slide-wrapper",
                            className: "overlay overlay-show nav-slide-open",
                            children: [Object(Y.jsxs)("div", {
                                id: "nav-slide",
                                children: [Object(Y.jsx)("div", {
                                    id: "nav-slide-header",
                                    role: "button",
                                    onClick: g
                                }), Object(Y.jsxs)("div", {
                                    id: "nav-slide-items",
                                    children: [y("Meet", "/"), k(e), y("Feedback", "/feedback"), y("Privacy", "/privacy"), Object(Y.jsx)("a", {
                                        className: "header-action",
                                        role: "button",
                                        href: "https://medium.com/lettucemeet",
                                        children: "Blog"
                                    })]
                                })]
                            }), Object(Y.jsx)("div", {
                                id: "nav-slide-close",
                                onClick: j
                            })]
                        })
                }(u)]
            })
        }, Q = "akoko:session_token";
        function J() {
            return localStorage.getItem(Q)
        }
        var X, ee, ne, te, ae, ie, le, se, oe, re, ce, ue = {
            getSessionToken: J,
            setSessionToken: function(e) {
                localStorage.setItem(Q, e)
            },
            clearSessionToken: function() {
                localStorage.removeItem(Q)
            },
            hasSessionToken: function() {
                return !!J()
            }
        }, de = function(e) {
            var n = Object(H.g)();
            return Object(o.useEffect)((function() {
                return b.setPage("/logout"),
                b.trackPageView(),
                ue.clearSessionToken(),
                e.resetRelayEnv(),
                n.replace("/"),
                function() {
                    b.setPage(null)
                }
            }
            ), []),
            Object(Y.jsx)("div", {
                className: "Logout-container",
                children: "Logout"
            })
        }, me = (t(191),
        function() {
            return Object(o.useEffect)((function() {
                return K.setDocumentTitle("Page not found"),
                b.setPage("/404"),
                b.trackPageView(),
                function() {
                    b.setPage(null)
                }
            }
            ), []),
            Object(Y.jsxs)("div", {
                id: "notfound-wrapper",
                children: [Object(Y.jsxs)("div", {
                    className: "notfound-section",
                    children: [Object(Y.jsx)("div", {
                        id: "notfound-lettuce"
                    }), Object(Y.jsx)("div", {
                        id: "notfound-title",
                        className: "notfound-section heading",
                        children: "We weren't able to find the page you were looking for."
                    })]
                }), Object(Y.jsx)("div", {
                    className: "notfound-section",
                    children: Object(Y.jsx)("div", {
                        className: "hint",
                        children: "Looks like you've discovered a new type of Lettuce that the world isn't ready for yet."
                    })
                })]
            })
        }
        ), ve = (t(325),
        function() {
            return Object(o.useEffect)((function() {
                return K.setDocumentTitle("Unsubscribe"),
                b.setPage("/unsubscribe"),
                b.trackPageView(),
                function() {
                    b.setPage(null)
                }
            }
            ), []),
            Object(Y.jsxs)("div", {
                id: "unsubscribe-wrapper",
                children: [Object(Y.jsxs)("div", {
                    className: "unsubscribe-section",
                    children: [Object(Y.jsx)("div", {
                        id: "unsubscribe-lettuce"
                    }), Object(Y.jsx)("div", {
                        id: "unsubscribe-title",
                        className: "unsubscribe-section heading",
                        children: "We're sorry to see you go!"
                    })]
                }), Object(Y.jsx)("div", {
                    className: "unsubscribe-section",
                    children: Object(Y.jsxs)("div", {
                        className: "subsubheading",
                        children: ["You've successfully been unsubscribed from LettuceMeet emails. If you'd like to start getting notified again in the future, please drop us a note through our", Object(Y.jsx)(W.b, {
                            to: "/feedback",
                            children: " Feedback"
                        }), " form."]
                    })
                })]
            })
        }
        ), pe = (t(326),
        function(e) {
            var n = Object(H.g)();
            Object(o.useEffect)((function() {
                return K.setDocumentTitle("How it Works"),
                b.setPage("/how-it-works"),
                b.trackPageView(),
                function() {
                    b.setPage(null)
                }
            }
            ), []);
            return Object(Y.jsxs)("div", {
                id: "help-wrapper",
                children: [Object(Y.jsxs)("div", {
                    id: "help-heading",
                    className: "help-section",
                    children: [Object(Y.jsx)("div", {
                        className: "heading",
                        children: "How it works"
                    }), Object(Y.jsx)("div", {
                        role: "button",
                        className: "button button-icon subsubheading icon-arrow-right-circle",
                        onClick: function() {
                            n.push("/")
                        },
                        children: "Try it out!"
                    })]
                }), Object(Y.jsxs)("div", {
                    className: "help-section",
                    children: [Object(Y.jsxs)("div", {
                        className: "help-section-info help-section-col",
                        children: [Object(Y.jsx)("div", {
                            className: "help-section-info-heading subheading",
                            children: "1) Tell us when you'd like to meet."
                        }), Object(Y.jsx)("div", {
                            className: "help-section-info-content subsubheading",
                            children: "To start, select a range of dates (or a single day) for when you\u2019d like to meet with your group."
                        })]
                    }), Object(Y.jsx)("div", {
                        className: "help-section-image-wrapper help-section-col",
                        children: Object(Y.jsx)("div", {
                            className: "help-section-image how-it-works-dates",
                            alt: "Fill in your dates"
                        })
                    })]
                }), Object(Y.jsxs)("div", {
                    className: "help-section",
                    children: [Object(Y.jsxs)("div", {
                        className: "help-section-info help-section-col",
                        children: [Object(Y.jsx)("div", {
                            className: "help-section-info-heading subheading",
                            children: "2) Fill in your availability."
                        }), Object(Y.jsx)("div", {
                            className: "help-section-info-content subsubheading",
                            children: "Fill in your availability for the date(s) you selected, which will be shown to everyone else in your group. Protip: connect your Google Calendar to view your events underneath!"
                        })]
                    }), Object(Y.jsx)("div", {
                        className: "help-section-image-wrapper help-section-col",
                        children: Object(Y.jsx)("div", {
                            className: "help-section-image how-it-works-times",
                            alt: "Fill in your availability"
                        })
                    })]
                }), Object(Y.jsxs)("div", {
                    className: "help-section",
                    children: [Object(Y.jsxs)("div", {
                        className: "help-section-info help-section-col",
                        children: [Object(Y.jsx)("div", {
                            className: "help-section-info-heading subheading",
                            children: "3) Find a time that works best for everyone."
                        }), Object(Y.jsx)("div", {
                            className: "help-section-info-content subsubheading",
                            children: "Share a link to the meeting with your group and they\u2019ll be able to fill in their availabilities. We'll overlay everyone's availabilities together, making it really easy to find the best slot."
                        })]
                    }), Object(Y.jsx)("div", {
                        className: "help-section-image-wrapper help-section-col",
                        children: Object(Y.jsx)("div", {
                            className: "help-section-image how-it-works-schedule",
                            alt: "Pick a time"
                        })
                    })]
                })]
            })
        }
        ), he = t(7), be = t.n(he), ge = (t(327),
        "text"), fe = "button", je = "button_disabled", ye = "href", ke = "bottom-bar", Oe = function e(n, t, a, i) {
            Object(v.a)(this, e),
            this.actionType = n,
            this.actionText = t,
            this.actionCallback = a,
            this.actionIcon = i || "arrow-right-circle"
        }, Ee = function(e) {
            var n = Object(H.h)()
              , t = function() {
                return !("/how-it-works" === n.pathname || "/privacy" === n.pathname || "/404" === n.pathname || "/notifications/unsubscribe" === n.pathname)
            };
            Object(o.useEffect)((function() {
                return t() && document.body.classList.add(ke),
                function() {
                    document.body.classList.remove(ke)
                }
            }
            ), []);
            var a = function(e) {
                return Object(Y.jsx)("div", {
                    role: "button",
                    className: "bottom-bar-action action-button button button-white button-icon subsubheading icon-" + e.actionIcon,
                    onClick: e.actionCallback,
                    children: e.actionText
                }, e.actionText)
            }
              , i = function(e) {
                return Object(Y.jsx)("div", {
                    role: "button",
                    className: "bottom-bar-action action-button button button-white button-disabled",
                    children: e.actionText
                }, e.actionText)
            }
              , l = function(e) {
                return Object(Y.jsx)("div", {
                    role: "button",
                    className: "bottom-bar-action action-text",
                    onClick: e.actionCallback,
                    children: e.actionText
                }, e.actionText)
            }
              , s = function(e) {
                return Object(Y.jsx)("a", {
                    role: "button",
                    className: "bottom-bar-action action-button button button-white button-icon subsubheading icon-" + e.actionIcon,
                    href: e.actionCallback,
                    children: e.actionText
                }, e.actionText)
            };
            return t() ? Object(Y.jsx)("div", {
                id: "bottom-bar",
                children: Object(Y.jsx)("div", {
                    id: "bottom-bar-actions",
                    children: function() {
                        var n = [];
                        if (e.actions && f.a.isArray(e.actions)) {
                            var t, o = Object(O.a)(e.actions);
                            try {
                                for (o.s(); !(t = o.n()).done; ) {
                                    var r = t.value;
                                    switch (r.actionType) {
                                    case fe:
                                        n.push(a(r));
                                        break;
                                    case je:
                                        n.push(i(r));
                                        break;
                                    case ge:
                                        n.push(l(r));
                                        break;
                                    case ye:
                                        n.push(s(r))
                                    }
                                }
                            } catch (c) {
                                o.e(c)
                            } finally {
                                o.f()
                            }
                            return n
                        }
                    }()
                })
            }) : Object(Y.jsx)(Y.Fragment, {})
        }, Te = (t(328),
        void 0 !== X ? X : X = t(329)), we = 0, xe = 1, Se = "Profile", Ne = {
            RELINK_GOOGLE_CALENDAR: "relink_google_calendar",
            UNLINK_GOOGLE_CALENDAR: "unlike_google_calendar",
            RESPONDED_PRESS: "responded_press",
            CREATED_PRESS: "created_press"
        }, _e = function(e) {
            var n = Object(m.useRelayEnvironment)()
              , a = Object(o.useContext)(U)
              , i = Object(o.useContext)(B)
              , l = Object(o.useContext)(G)
              , s = l.screenType
              , r = l.setBottomBarActions
              , c = Object(H.g)()
              , u = Object(o.useState)(we)
              , v = Object(d.a)(u, 2)
              , p = v[0]
              , g = v[1]
              , f = void 0 !== ee ? ee : ee = t(330)
              , j = Object(m.useFragment)(f, a)
              , y = i.calendar;
            Object(o.useEffect)((function() {
                return r(T()),
                K.setDocumentTitle("".concat(null === j || void 0 === j ? void 0 : j.name, "'s Profile")),
                b.setPage("/me"),
                b.trackPageView(),
                function() {
                    b.setPage(null)
                }
            }
            ), []);
            var k, O = function() {
                c.push("/logout")
            }, E = function() {
                c.push("/me/settings")
            }, T = function() {
                var e = [];
                return e.push(new Oe(fe,"Settings",E,"settings")),
                e.push(new Oe(fe,"Sign out",O)),
                e
            };
            if (p === we && (null === j.events || 0 === j.events.length) || p === xe && (null === j.eventsRespondedTo || 0 === j.eventsRespondedTo.length))
                k = Object(Y.jsx)("div", {
                    id: "notfound-wrapper",
                    children: Object(Y.jsxs)("div", {
                        className: "notfound-section",
                        children: [Object(Y.jsx)("div", {
                            id: "notfound-lettuce"
                        }), Object(Y.jsx)("div", {
                            id: "notfound-title",
                            className: "notfound-section heading",
                            children: "Looks like you haven\u2019t been eating your greens."
                        }), Object(Y.jsxs)("div", {
                            className: "notfound-section notfound-cta-wrapper",
                            children: [p === we && Object(Y.jsx)(W.b, {
                                className: "profile-button button button-green button-icon subsubheading icon-plus",
                                to: "/",
                                children: "Create your first meeting"
                            }), p === xe && Object(Y.jsx)("p", {
                                children: "Meetings you respond to will appear here."
                            })]
                        })]
                    })
                });
            else {
                var w = j.events.slice()
                  , x = j.eventsRespondedTo.slice();
                w.sort((function(e, n) {
                    return be()(n.updatedAt).diff(be()(e.updatedAt))
                }
                )),
                k = (p === we ? w : x).map((function(e) {
                    var n = null
                      , t = null
                      , a = null
                      , i = null;
                    if (null !== e.start && null !== e.end) {
                        var l = {
                            month: be.a.utc(e.start).format("MMM"),
                            day: be.a.utc(e.start).format("DD"),
                            year: be.a.utc(e.start).format("YYYY"),
                            formatted: be.a.utc(e.start).format("h:mm a")
                        };
                        n = e.end ? "".concat(l.formatted, " - ").concat(be.a.utc(e.end).format("h:mm a")) : l.formatted,
                        a = Object(Y.jsx)("div", {
                            className: "profile-event-time profile-event-info-row icon icon-clock",
                            children: n
                        }),
                        t = [Object(Y.jsx)("div", {
                            className: "profile-event-date-month profile-event-date-row",
                            children: l.month
                        }, "month"), Object(Y.jsx)("div", {
                            className: "profile-event-date-day profile-event-date-row",
                            children: l.day
                        }, "day"), Object(Y.jsx)("div", {
                            className: "profile-event-date-year profile-event-date-row",
                            children: l.year
                        }, "year")]
                    } else {
                        var s = e.pollDates
                          , o = be()(s[0])
                          , r = be()(s[s.length - 1])
                          , c = r.date() - o.date() === s.length - 1 ? "-" : "~";
                        i = "".concat(o.format("MMM D"), " ").concat(c, " ").concat(r.format("MMM D"));
                        var u = be()(e.pollStartTime, "HH:mm:ss").format("h:mm a")
                          , d = be()(e.pollEndTime, "HH:mm:ss").format("h:mm a");
                        n = "".concat(u, " - ").concat(d),
                        a = [Object(Y.jsx)("div", {
                            className: "profile-event-poll-dates profile-event-info-row icon icon-calendar",
                            children: i
                        }, "dates"), Object(Y.jsx)("div", {
                            className: "profile-event-time profile-event-info-row icon icon-clock",
                            children: n
                        }, "times")],
                        t = Object(Y.jsx)("div", {
                            className: "profile-event-date-row profile-event-unscheduled",
                            children: "Not Scheduled"
                        })
                    }
                    var m = null;
                    e.description && (m = Object(Y.jsx)("div", {
                        className: "profile-event-description profile-event-info-row icon icon-notebook",
                        children: e.description
                    }));
                    var v = null;
                    return e.timeZone && (v = Object(Y.jsx)("div", {
                        className: "profile-event-timezone profile-event-info-row icon icon-globe",
                        children: K.formatTimezone(e.timeZone)
                    })),
                    Object(Y.jsxs)(W.b, {
                        className: "profile-event",
                        to: "/l/".concat(e.id),
                        children: [Object(Y.jsx)("div", {
                            className: "profile-event-date-wrapper",
                            children: t
                        }), Object(Y.jsxs)("div", {
                            className: "profile-event-info-wrapper",
                            children: [Object(Y.jsx)("div", {
                                className: "profile-event-title profile-event-info-row subheading",
                                children: e.title
                            }), m, a, v]
                        })]
                    }, e.id)
                }
                ))
            }
            var S = "profile-tab tab subsubheading"
              , N = S + " button-green"
              , _ = p === we ? N : S
              , R = p === xe ? N : S
              , C = Object(Y.jsxs)("div", {
                id: "profile-tab-wrapper",
                children: [Object(Y.jsx)("div", {
                    className: _,
                    onClick: function(e) {
                        g(we),
                        b.trackEvent(Se, Ne.CREATED_PRESS)
                    },
                    children: "Created"
                }), Object(Y.jsx)("div", {
                    className: R,
                    onClick: function(e) {
                        g(xe),
                        b.trackEvent(Se, Ne.RESPONDED_PRESS)
                    },
                    children: "Responded"
                })]
            })
              , D = function() {
                return !K.isDesktop(s)
            }
              , A = function() {
                b.trackEvent(Se, Ne.RELINK_GOOGLE_CALENDAR),
                window.location.assign(null === y || void 0 === y ? void 0 : y.redirectURL)
            }
              , L = function() {
                b.trackEvent(Se, Ne.UNLINK_GOOGLE_CALENDAR),
                Object(m.commitMutation)(n, {
                    mutation: Te,
                    variables: {
                        input: {}
                    },
                    onCompleted: function(n) {
                        e.resetRelayEnv()
                    },
                    onError: function(e) {
                        Object(z.b)("Uh-oh, looks like we ran into an error", {
                            position: z.b.POSITION.BOTTOM_CENTER,
                            autoClose: 3e3,
                            hideProgressBar: !0,
                            className: "error-toast"
                        }),
                        h.log(e)
                    }
                })
            };
            return Object(Y.jsxs)("div", {
                id: "profile-wrapper",
                className: "profile-wrapper",
                children: [1 === (null === j || void 0 === j ? void 0 : j.googleStatus) ? Object(Y.jsxs)("div", {
                    className: "google-auth-error-wrapper",
                    children: [Object(Y.jsxs)("div", {
                        className: "google-auth-title-wrapper",
                        children: [Object(Y.jsx)("div", {
                            className: "bulb-icon"
                        }), Object(Y.jsx)("div", {
                            className: "subsubheading",
                            children: "Your Google account needs to be relinked to continue syncing your calendar."
                        })]
                    }), Object(Y.jsxs)("div", {
                        className: "google-auth-error-buttons-wrapper",
                        children: [Object(Y.jsx)("div", {
                            id: "google-auth-button-hide",
                            className: "google-auth-error-button",
                            onClick: L,
                            children: "Don't show this again"
                        }), Object(Y.jsx)("div", {
                            id: "google-auth-button-relink",
                            className: "google-auth-error-button black",
                            onClick: A,
                            children: "Relink"
                        })]
                    })]
                }) : Object(Y.jsx)(Y.Fragment, {}), Object(Y.jsxs)("div", {
                    id: "profile-heading",
                    className: "profile-section",
                    children: [Object(Y.jsxs)("div", {
                        className: "heading",
                        children: [null === j || void 0 === j ? void 0 : j.name, "'s meetings"]
                    }), Object(Y.jsxs)("div", {
                        id: "profile-button-wrapper",
                        children: [!D() && Object(Y.jsx)(W.b, {
                            className: "profile-button button button-icon subsubheading icon-arrow-right-circle",
                            to: "/logout",
                            children: "Sign out"
                        }), !D() && Object(Y.jsx)(W.b, {
                            className: "profile-button button button-green button-icon subsubheading icon-settings",
                            to: "/me/settings",
                            children: "Settings"
                        })]
                    })]
                }), Object(Y.jsxs)("div", {
                    id: "profile-events",
                    className: "profile-section",
                    children: [C, k]
                })]
            })
        }, Re = void 0 !== ne ? ne : ne = t(331), Ce = t(224), De = t.n(Ce), Ae = (t(332),
        Object(o.forwardRef)((function(e, n) {
            var t = Object(o.useRef)()
              , a = Object(o.useState)(!0)
              , i = Object(d.a)(a, 2)
              , l = i[0]
              , s = i[1]
              , r = Object(o.useState)(e.errorMessage || "")
              , c = Object(d.a)(r, 2)
              , u = c[0]
              , m = c[1];
            Object(o.useImperativeHandle)(n, (function() {
                return {
                    setValue: function(e) {
                        t.current && (t.current.value = e)
                    },
                    setFocus: function() {
                        var e;
                        null === (e = t.current) || void 0 === e || e.focus()
                    },
                    hasFocus: function() {
                        return t.current === document.activeElement
                    },
                    showError: function(e) {
                        K.twerk(t.current),
                        s(!1),
                        m(e)
                    },
                    checkValid: function() {
                        var n, a, i = h();
                        return i && "" !== i ? "email" === (null === (n = t.current) || void 0 === n ? void 0 : n.type) ? !!De.a.isEmail(i) || (s(!1),
                        m("Invalid email"),
                        !1) : !("password" === (null === (a = t.current) || void 0 === a ? void 0 : a.type) && i.length < 5) || (s(!1),
                        m("Must be at least 5 characters"),
                        !1) : !!e.optional || (K.twerk(t.current),
                        s(!1),
                        m("This field is required!"),
                        !1)
                    },
                    getValue: function() {
                        var e, n;
                        return (null === (e = t.current) || void 0 === e ? void 0 : e.value) && (null === (n = t.current) || void 0 === n ? void 0 : n.value.trim())
                    }
                }
            }
            ));
            var v, p, h = function() {
                var e, n;
                return (null === (e = t.current) || void 0 === e ? void 0 : e.value) && (null === (n = t.current) || void 0 === n ? void 0 : n.value.trim())
            }, b = function() {
                e.onFocusCallback && e.onFocusCallback(),
                s(!0)
            }, g = null, f = null;
            (l || (g = Object(Y.jsx)("div", {
                className: "error-message",
                children: u
            })),
            e.isTextArea) ? f = Object(Y.jsx)("textarea", {
                id: e.id,
                className: e.className,
                placeholder: e.placeholder,
                type: e.type,
                ref: t,
                onFocus: b,
                defaultValue: null !== (v = e.value) && void 0 !== v ? v : ""
            }) : f = Object(Y.jsx)("input", {
                id: e.id,
                className: e.className,
                placeholder: e.placeholder,
                type: e.type,
                ref: t,
                onFocus: b,
                onBlur: function() {
                    e.onBlurCallback && e.onBlurCallback()
                },
                defaultValue: null !== (p = e.value) && void 0 !== p ? p : ""
            });
            return Object(Y.jsxs)("div", {
                id: "input-wrapper",
                className: "input-wrapper",
                children: [f, g]
            })
        }
        ))), Le = (t(138),
        "Auth"), Fe = {
            PROVIDER_START: "provider_start"
        }, Pe = {
            PROVIDER_GOOGLE: "google"
        }, Ie = function(e) {
            var n = Object(o.useContext)(G)
              , t = n.screenType
              , a = n.setBottomBarActions
              , i = Object(o.useContext)(B)
              , l = Object(H.g)()
              , s = Object(m.useRelayEnvironment)()
              , r = Object(o.useRef)(null)
              , c = Object(o.useRef)(null)
              , u = i.auth;
            Object(o.useEffect)((function() {
                var e;
                (a(f()),
                j()) || (null === (e = r.current) || void 0 === e || e.setFocus());
                return window.addEventListener("keydown", v, !0),
                K.setDocumentTitle("Log in"),
                b.setPage("/login"),
                b.trackPageView(),
                function() {
                    window.removeEventListener("keydown", v, !0),
                    b.setPage(null)
                }
            }
            ), []);
            var d = function(e) {
                e.preventDefault(),
                l.push("/signup")
            }
              , v = function(e) {
                e.which !== x && e.keyCode !== x || p(null)
            }
              , p = function(n) {
                var t, a;
                n && n.preventDefault(),
                g() && Object(m.commitMutation)(s, {
                    mutation: Re,
                    variables: {
                        input: {
                            email: null === (t = r.current) || void 0 === t ? void 0 : t.getValue(),
                            password: null === (a = c.current) || void 0 === a ? void 0 : a.getValue()
                        }
                    },
                    onCompleted: function(n) {
                        ue.setSessionToken(n.getToken.authToken),
                        e.resetRelayEnv(),
                        h.log("auth token: '".concat(n.getToken.authToken, "'")),
                        l.replace("/")
                    },
                    onError: function(e) {
                        var n, t;
                        ue.clearSessionToken(),
                        h.log(e),
                        null === (n = r.current) || void 0 === n || n.showError("Invalid Email Address and/or Password!"),
                        null === (t = c.current) || void 0 === t || t.showError("Invalid Email Address and/or Password!")
                    }
                })
            }
              , g = function() {
                var e, n;
                return !!(null === (e = r.current) || void 0 === e ? void 0 : e.checkValid()) && !!(null === (n = c.current) || void 0 === n ? void 0 : n.checkValid())
            }
              , f = function() {
                return [new Oe(ge,"Don't have an account yet?",d), new Oe(fe,"Log in",p)]
            }
              , j = function() {
                return !K.isDesktop(t)
            };
            return Object(Y.jsxs)("div", {
                id: "signin-wrapper",
                className: "signin-wrapper",
                children: [Object(Y.jsx)("div", {
                    className: "info-row heading",
                    children: "Log in"
                }), Object(Y.jsx)("div", {
                    className: "info-row",
                    children: Object(Y.jsx)("div", {
                        role: "button",
                        id: "continue-with-google",
                        className: "button button-gray subsubheading",
                        onClick: function(e) {
                            b.trackEvent(Le, Fe.PROVIDER_START, Pe.PROVIDER_GOOGLE),
                            window.location.replace(null === u || void 0 === u ? void 0 : u.redirectURL)
                        },
                        children: Object(Y.jsxs)("div", {
                            id: "continue-with-google-button",
                            children: [Object(Y.jsx)("div", {
                                id: "continue-with-google-icon"
                            }), Object(Y.jsx)("div", {
                                id: "continue-with-google-text",
                                children: "Continue with Google"
                            })]
                        })
                    })
                }), Object(Y.jsxs)("div", {
                    id: "signin-option-separator",
                    className: "info-row",
                    children: [Object(Y.jsx)("div", {
                        className: "horizontal-divider"
                    }), Object(Y.jsx)("div", {
                        className: "subheading",
                        children: "OR"
                    }), Object(Y.jsx)("div", {
                        className: "horizontal-divider"
                    })]
                }), Object(Y.jsxs)("div", {
                    id: "signin-form-start",
                    className: "info-row",
                    children: [Object(Y.jsx)("div", {
                        className: "info-title subheading",
                        children: "Email address"
                    }), Object(Y.jsx)(Ae, {
                        id: "signin-email",
                        className: "subheading",
                        type: "email",
                        placeholder: "What's your email address?",
                        ref: r
                    })]
                }), Object(Y.jsxs)("div", {
                    className: "info-row",
                    children: [Object(Y.jsxs)("div", {
                        className: "info-title-cols",
                        children: [Object(Y.jsx)("div", {
                            className: "info-title subheading",
                            children: "Password"
                        }), Object(Y.jsx)("div", {
                            id: "signin-forgot",
                            className: "link hint",
                            onClick: function(e) {
                                e.preventDefault(),
                                l.push("/forgot-password")
                            },
                            children: "Forgot your password?"
                        })]
                    }), Object(Y.jsx)(Ae, {
                        id: "signin-password",
                        className: "subheading",
                        type: "password",
                        placeholder: "What's your password?",
                        ref: c
                    })]
                }), function() {
                    if (!j())
                        return Object(Y.jsxs)("div", {
                            id: "signup-footer",
                            className: "info-row info-footer",
                            children: [Object(Y.jsx)("div", {
                                id: "signin-forgot",
                                className: "link hint",
                                onClick: d,
                                children: "Don't have an account yet?"
                            }), Object(Y.jsx)("div", {
                                role: "button",
                                id: "signup-footer-button",
                                className: "button button-icon subsubheading icon-arrow-right-circle",
                                onClick: p,
                                children: "Log in"
                            })]
                        })
                }()]
            })
        }, Me = (t(411),
        function(e) {
            return Object(o.useEffect)((function() {
                return K.setDocumentTitle("Privacy Policy"),
                b.setPage("/privacy"),
                b.trackPageView(),
                function() {
                    b.setPage(null)
                }
            }
            ), []),
            Object(Y.jsxs)("div", {
                id: "privacy-wrapper",
                children: [Object(Y.jsx)("div", {
                    className: "heading",
                    children: "Your privacy is important to us"
                }), Object(Y.jsx)("p", {
                    children: 'This Privacy Policy governs the manner in which LettuceMeet collects, uses, maintains and discloses information collected from users (each, a "User") of the https://lettucemeet.com website ("Site").'
                }), Object(Y.jsx)("h3", {
                    children: "Personal identification information"
                }), Object(Y.jsx)("p", {
                    children: "We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, register on the site, fill out a form, and in connection with other activities, services, features or resources we make available on our Site. Users may be asked for, as appropriate, name, email address. Users may also connect their personal electronic calendar to our Site, but we do not record or store the User's calendar events on our servers. Users may, however, visit our Site anonymously. We will collect personal identification information from Users only if they voluntarily submit such information to us. Users can always refuse to supply personally identification information, except that it may prevent them from engaging in certain Site related activities."
                }), Object(Y.jsx)("h3", {
                    children: "Non-personal identification information"
                }), Object(Y.jsx)("p", {
                    children: "We may collect non-personal identification information about Users whenever they interact with our Site. Non-personal identification information may include the browser name, the type of computer and technical information about Users means of connection to our Site, such as the operating system and the Internet service providers utilized and other similar information."
                }), Object(Y.jsx)("h3", {
                    children: "Web browser cookies"
                }), Object(Y.jsx)("p", {
                    children: 'Our Site may use "cookies" to enhance User experience. User\'s web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them. User may choose to set their web browser to refuse cookies, or to alert you when cookies are being sent. If they do so, note that some parts of the Site may not function properly.'
                }), Object(Y.jsx)("p", {
                    children: "We use third party service providers such as Google Analytics to provide user and user interaction information in connection our Site. You can opt-out from Google Analytics tracking by installing the Google Analytics Opt-out Browser tool: https://tools.google.com/dlpage/gaoptout. For more information on the privacy practices of Google, please visit the Google Privacy & Terms web page: https://www.google.com/policies/privacy."
                }), Object(Y.jsx)("h3", {
                    children: "How we use collected information"
                }), Object(Y.jsx)("p", {
                    children: "LettuceMeet may collect and use Users personal information for the following purposes:"
                }), Object(Y.jsxs)("ul", {
                    children: [Object(Y.jsxs)("li", {
                        children: [Object(Y.jsx)("i", {
                            children: "To run and operate our Site"
                        }), Object(Y.jsx)("br", {}), "We may need your information display content on the Site correctly."]
                    }), Object(Y.jsxs)("li", {
                        children: [Object(Y.jsx)("i", {
                            children: "To improve our Site"
                        }), Object(Y.jsx)("br", {}), "We may use feedback you provide to improve our products and services."]
                    }), Object(Y.jsxs)("li", {
                        children: [Object(Y.jsx)("i", {
                            children: "To communicate with you"
                        }), Object(Y.jsx)("br", {}), "We may use your email address to send you information and updates, which you may opt out of at any time."]
                    })]
                }), Object(Y.jsx)("h3", {
                    children: "How we protect your information"
                }), Object(Y.jsx)("p", {
                    children: "We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site."
                }), Object(Y.jsx)("h3", {
                    children: "Sharing your personal information"
                }), Object(Y.jsxs)("p", {
                    children: ["We do not sell, trade, or rent Users personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates and advertisers for the purposes outlined above.", " "]
                }), Object(Y.jsx)("h3", {
                    children: "Changes to this privacy policy"
                }), Object(Y.jsx)("p", {
                    children: "LettuceMeet has the discretion to update this privacy policy at any time. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications."
                }), Object(Y.jsx)("h3", {
                    children: "Your acceptance of these terms"
                }), Object(Y.jsxs)("p", {
                    children: ["By using this Site, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our Site. Your continued use of the Site following the posting of changes to this policy will be deemed your acceptance of those changes. This privacy policy was built", " ", Object(Y.jsx)("a", {
                        href: "https://privacypolicies.com/",
                        target: "_blank",
                        children: "using the https://PrivacyPolicies.com generator"
                    }), "."]
                }), Object(Y.jsx)("h3", {
                    children: "Contacting us"
                }), Object(Y.jsxs)("p", {
                    children: ["If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at", " ", Object(Y.jsx)(W.b, {
                        to: "feedback",
                        children: "https://lettucemeet.com/feedback"
                    }), "."]
                }), Object(Y.jsx)("p", {
                    children: "This document was last updated on April 24, 2018"
                })]
            })
        }
        ), Ke = void 0 !== te ? te : te = t(412), Ue = (t(413),
        "Feedback"), Be = {
            SUBMIT_FEEDBACK: "submit_feedback"
        }, Ve = function(e) {
            var n = Object(H.g)()
              , t = Object(o.useContext)(G)
              , a = t.screenType
              , i = t.setBottomBarActions
              , l = Object(m.useRelayEnvironment)()
              , s = Object(o.useState)(!1)
              , r = Object(d.a)(s, 2)
              , c = r[0]
              , u = r[1]
              , v = Object(o.useState)("")
              , p = Object(d.a)(v, 2)
              , g = p[0]
              , f = (p[1],
            Object(o.useState)(""))
              , j = Object(d.a)(f, 2)
              , y = j[0]
              , k = (j[1],
            Object(o.useState)(""))
              , O = Object(d.a)(k, 2)
              , E = O[0]
              , T = (O[1],
            Object(o.useRef)(null))
              , w = Object(o.useRef)(null)
              , S = Object(o.useRef)(null)
              , N = null;
            Object(o.useEffect)((function() {
                var e;
                (i([new Oe(fe,"Submit",A)]),
                K.setDocumentTitle("Feedback"),
                D()) || (null === (e = T.current) || void 0 === e || e.setFocus());
                return _(),
                b.setPage("/feedback"),
                b.trackPageView(),
                function() {
                    N && clearTimeout(N),
                    R(),
                    b.setPage(null)
                }
            }
            ), []);
            var _ = function() {
                window.addEventListener("keydown", C, !0)
            }
              , R = function() {
                window.removeEventListener("keydown", C, !0)
            }
              , C = function(e) {
                if (e.which === x || e.keyCode === x) {
                    var n, t, a;
                    if ((null === (n = T.current) || void 0 === n ? void 0 : n.hasFocus()) || (null === (t = w.current) || void 0 === t ? void 0 : t.hasFocus()) || (null === (a = S.current) || void 0 === a ? void 0 : a.hasFocus()))
                        return;
                    A()
                }
            }
              , D = function() {
                return !K.isDesktop(a)
            }
              , A = function() {
                var e, t, a;
                (function() {
                    var e;
                    return !!(null === (e = S.current) || void 0 === e ? void 0 : e.checkValid())
                }
                )() && Object(m.commitMutation)(l, {
                    mutation: Ke,
                    variables: {
                        input: {
                            name: null === (e = T.current) || void 0 === e ? void 0 : e.getValue(),
                            email: null === (t = w.current) || void 0 === t ? void 0 : t.getValue(),
                            message: null === (a = S.current) || void 0 === a ? void 0 : a.getValue()
                        }
                    },
                    onCompleted: function(e) {
                        b.trackEvent(Ue, Be.SUBMIT_FEEDBACK),
                        N = setTimeout((function() {
                            N = null,
                            n.push("/")
                        }
                        ), 5e3),
                        u(!0)
                    },
                    onError: function(e) {
                        Object(z.b)("Uh-oh, something went wrong. Email us directly at hello@lettucemeet.com", {
                            position: z.b.POSITION.BOTTOM_CENTER,
                            autoClose: 5e3,
                            hideProgressBar: !0,
                            className: "error-toast"
                        }),
                        h.log(e)
                    }
                })
            };
            return c ? Object(Y.jsxs)("div", {
                id: "feedback-wrapper",
                className: "feedback-wrapper",
                children: [Object(Y.jsx)("div", {
                    id: "feedback-heading",
                    className: "feedback-section",
                    children: Object(Y.jsx)("div", {
                        className: "heading",
                        children: "Thanks for your feedback!"
                    })
                }), Object(Y.jsx)("div", {
                    className: "subsubheading",
                    children: "You'll be redirected back to the home page in 5 seconds."
                })]
            }) : Object(Y.jsxs)("div", {
                id: "feedback-wrapper",
                className: "feedback-wrapper",
                children: [Object(Y.jsxs)("div", {
                    id: "feedback-heading",
                    className: "feedback-section",
                    children: [Object(Y.jsx)("div", {
                        className: "heading",
                        children: "Feedback"
                    }), !D() && Object(Y.jsx)("div", {
                        role: "button",
                        className: "button button-icon subsubheading icon-arrow-right-circle",
                        onClick: A,
                        children: "Submit"
                    })]
                }), Object(Y.jsx)("div", {
                    className: "feedback-section subsubsubheading",
                    children: Object(Y.jsx)(Ae, {
                        type: "text",
                        name: "name",
                        placeholder: "Name (Optional)",
                        ref: T,
                        value: g
                    })
                }), Object(Y.jsx)("div", {
                    className: "feedback-section subsubsubheading",
                    children: Object(Y.jsx)(Ae, {
                        type: "text",
                        name: "email",
                        placeholder: "Email (Optional)",
                        ref: w,
                        value: y
                    })
                }), Object(Y.jsx)("div", {
                    className: "feedback-section subsubsubheading",
                    children: Object(Y.jsx)(Ae, {
                        name: "message",
                        placeholder: "Let us know how we can improve LettuceMeet",
                        value: E,
                        onFocusCallback: R,
                        onBlurCallback: _,
                        isTextArea: !0,
                        ref: S
                    })
                })]
            })
        }, Ge = void 0 !== ae ? ae : ae = t(414), We = (t(415),
        "User"), He = {
            SIGN_UP: "signup"
        }, ze = {
            SIGN_UP_BOTTOM_BAR: "signup_bb",
            SIGN_UP_TOP_BAR: "signup_tb"
        }, Ye = function(e) {
            var n = Object(o.useContext)(G)
              , t = n.screenType
              , a = n.setBottomBarActions
              , i = Object(m.useRelayEnvironment)()
              , l = Object(H.g)()
              , s = Object(o.useRef)(null)
              , r = Object(o.useRef)(null)
              , c = Object(o.useRef)(null)
              , u = Object(o.useContext)(B).auth;
            Object(o.useEffect)((function() {
                var e;
                (a(f()),
                h()) || (null === (e = s.current) || void 0 === e || e.setFocus());
                return window.addEventListener("keydown", d, !0),
                K.setDocumentTitle("Sign up"),
                b.setPage("/signup"),
                b.trackPageView(),
                function() {
                    window.removeEventListener("keydown", d, !0),
                    b.setPage(null)
                }
            }
            ), []);
            var d = function(e) {
                e.which !== x && e.keyCode !== x || p(null)
            }
              , v = function(e) {
                e.preventDefault(),
                l.push("/login")
            }
              , p = function(n) {
                var t, a, o;
                n && n.preventDefault(),
                g() && Object(m.commitMutation)(i, {
                    mutation: Ge,
                    variables: {
                        input: {
                            email: null === (t = r.current) || void 0 === t ? void 0 : t.getValue(),
                            name: null === (a = s.current) || void 0 === a ? void 0 : a.getValue(),
                            password: null === (o = c.current) || void 0 === o ? void 0 : o.getValue()
                        }
                    },
                    onCompleted: function(n) {
                        ue.setSessionToken(n.createUser.authToken),
                        b.trackEvent(We, He.SIGN_UP, h() ? ze.SIGN_UP_BOTTOM_BAR : ze.SIGN_UP_TOP_BAR),
                        e.resetRelayEnv(),
                        l.replace("/")
                    },
                    onError: function(e) {
                        var n;
                        ue.clearSessionToken(),
                        null === (n = r.current) || void 0 === n || n.showError("Email already in use")
                    }
                })
            }
              , h = function() {
                return !K.isDesktop(t)
            }
              , g = function() {
                var e, n, t;
                return !!(null === (e = s.current) || void 0 === e ? void 0 : e.checkValid()) && (!!(null === (n = r.current) || void 0 === n ? void 0 : n.checkValid()) && !!(null === (t = c.current) || void 0 === t ? void 0 : t.checkValid()))
            }
              , f = function() {
                return [new Oe(ge,"Have an account?",v), new Oe(fe,"Sign up",p)]
            };
            return Object(Y.jsxs)("div", {
                id: "signup-wrapper",
                className: "signup-wrapper",
                children: [Object(Y.jsxs)("div", {
                    id: "signup-content-wrapper",
                    className: "signup-box",
                    children: [Object(Y.jsx)("div", {
                        className: "info-row heading",
                        children: "Sign up"
                    }), Object(Y.jsx)("div", {
                        className: "info-row",
                        children: Object(Y.jsx)("div", {
                            role: "button",
                            id: "continue-with-google",
                            className: "button button-gray subsubheading",
                            onClick: function(e) {
                                window.location.replace(null === u || void 0 === u ? void 0 : u.redirectURL)
                            },
                            children: Object(Y.jsxs)("div", {
                                id: "continue-with-google-button",
                                children: [Object(Y.jsx)("div", {
                                    id: "continue-with-google-icon"
                                }), Object(Y.jsx)("div", {
                                    id: "continue-with-google-text",
                                    children: "Continue with Google"
                                })]
                            })
                        })
                    }), Object(Y.jsxs)("div", {
                        id: "signin-option-separator",
                        className: "info-row",
                        children: [Object(Y.jsx)("div", {
                            className: "horizontal-divider"
                        }), Object(Y.jsx)("div", {
                            className: "subheading",
                            children: "OR"
                        }), Object(Y.jsx)("div", {
                            className: "horizontal-divider"
                        })]
                    }), Object(Y.jsxs)("div", {
                        id: "signin-form-start",
                        className: "info-row",
                        children: [Object(Y.jsx)("div", {
                            className: "info-title subheading",
                            children: "Name"
                        }), Object(Y.jsx)(Ae, {
                            id: "signup-name",
                            className: "subheading",
                            type: "text",
                            placeholder: "What's your name?",
                            ref: s
                        })]
                    }), Object(Y.jsxs)("div", {
                        className: "info-row",
                        children: [Object(Y.jsx)("div", {
                            className: "info-title subheading",
                            children: "Email Address"
                        }), Object(Y.jsx)(Ae, {
                            id: "signup-email",
                            className: "subheading",
                            type: "email",
                            placeholder: "What's your email address?",
                            ref: r
                        })]
                    }), Object(Y.jsxs)("div", {
                        className: "info-row",
                        children: [Object(Y.jsx)("div", {
                            className: "info-title subheading",
                            children: "Password"
                        }), Object(Y.jsx)(Ae, {
                            id: "signup-password",
                            className: "subheading",
                            type: "password",
                            placeholder: "What would you like your password to be?",
                            ref: c
                        })]
                    }), function() {
                        if (!h())
                            return Object(Y.jsxs)("div", {
                                id: "signup-footer",
                                className: "info-row info-footer",
                                children: [Object(Y.jsx)("div", {
                                    id: "signup-footer-text",
                                    className: "link",
                                    onClick: v,
                                    children: "Already have an account?"
                                }), Object(Y.jsx)("div", {
                                    role: "button",
                                    id: "signup-footer-button",
                                    className: "button button-icon subsubheading icon-arrow-right-circle",
                                    onClick: p,
                                    children: "Sign up"
                                })]
                            })
                    }()]
                }), Object(Y.jsxs)("div", {
                    id: "signup-about-wrapper",
                    className: "signup-box",
                    children: [Object(Y.jsx)("div", {
                        className: "info-row heading",
                        children: "Why should I sign up?"
                    }), Object(Y.jsxs)("div", {
                        className: "info-row",
                        children: [Object(Y.jsx)("div", {
                            className: "info-title subheading",
                            children: "1) Google calendar integration"
                        }), Object(Y.jsx)("div", {
                            className: "info-content subsubheading",
                            children: "Connect your Google/Outlook calendar to easily see your availability when filling out a meeting."
                        })]
                    }), Object(Y.jsxs)("div", {
                        className: "info-row",
                        children: [Object(Y.jsx)("div", {
                            className: "info-title subheading",
                            children: "2) Update your meetings anytime"
                        }), Object(Y.jsx)("div", {
                            className: "info-content subsubheading",
                            children: "You can make changes to your meetings after creating them. Meetings you've created or responded to are listed under your profile for easy access."
                        })]
                    }), Object(Y.jsxs)("div", {
                        className: "info-row",
                        children: [Object(Y.jsx)("div", {
                            className: "info-title subheading",
                            children: "3) Get notified"
                        }), Object(Y.jsx)("div", {
                            className: "info-content subsubheading",
                            children: "Be notified when someone responds to your meeting or when a meeting you've responded to is scheduled."
                        })]
                    })]
                })]
            })
        }, qe = (t(416),
        void 0), Ze = 0, $e = 1, Qe = 2, Je = 3, Xe = 4, en = function(e) {
            var n = Object(o.useContext)(U)
              , a = Object(o.useContext)(G).setBottomBarActions
              , i = Object(H.g)()
              , l = void 0 !== ie ? ie : ie = t(417)
              , s = Object(m.useFragment)(l, n);
            Object(o.useEffect)((function() {
                return a(d()),
                K.setDocumentTitle("".concat(null === s || void 0 === s ? void 0 : s.name, "'s Notifications")),
                b.setPage("/me/notifications"),
                b.trackPageView(),
                function() {
                    b.setPage(null)
                }
            }
            ), []);
            var r, c = function() {
                i.push("/logout")
            }, u = function() {
                i.push("/me/settings")
            }, d = function() {
                var e = [];
                return e.push(new Oe(fe,"Settings",u.bind(qe),"settings")),
                e.push(new Oe(fe,"Sign out",c.bind(qe))),
                e
            }, v = null === s || void 0 === s ? void 0 : s.notifications;
            return v && 0 !== v.length ? (v.slice().sort((function(e, n) {
                return be()(n.createdAt).diff(be()(e.createdAt))
            }
            )),
            r = v.map((function(e) {
                var n, t, a = null;
                n = be.a.utc(e.createdAt).fromNow(),
                t = [Object(Y.jsx)("div", {
                    className: "notification-event-time notification-event-info-row icon icon-clock",
                    children: n
                }, "times")];
                var i = null
                  , l = e.actor ? e.actor.name : null
                  , s = e.event.title
                  , o = JSON.parse(e.actionValue) || null;
                switch (e.actionType) {
                case Ze:
                    a = [Object(Y.jsx)("div", {
                        className: "profile-event-date-row profile-event-unscheduled icon icon-pencil"
                    })],
                    i = l + " responded to " + s;
                    break;
                case Xe:
                    a = [Object(Y.jsx)("div", {
                        className: "profile-event-date-row profile-event-unscheduled icon icon-pencil"
                    })],
                    i = l + "'s response to " + s + " was updated";
                    break;
                case $e:
                    var r = be.a.utc(o.start).format("h:mm a");
                    a = [Object(Y.jsx)("div", {
                        className: "profile-event-date-row profile-event-unscheduled icon icon-calendar"
                    })],
                    i = l ? l + " scheduled " + s + " for " + r : s + " is scheduled for " + r;
                    break;
                case Qe:
                    a = [Object(Y.jsx)("div", {
                        className: "profile-event-date-row profile-event-unscheduled icon icon-calendar"
                    })],
                    i = l ? l + " unscheduled " + s : s + " has been unscheduled";
                    break;
                case Je:
                    a = [Object(Y.jsx)("div", {
                        className: "profile-event-date-row profile-event-unscheduled icon icon-envelope"
                    })],
                    i = "Verify your email address"
                }
                return Object(Y.jsxs)(W.b, {
                    className: "notification-event",
                    to: "/l/".concat(e.event.id),
                    children: [Object(Y.jsx)("div", {
                        className: "notification-event-date-wrapper",
                        children: a
                    }), Object(Y.jsxs)("div", {
                        className: "notification-event-info-wrapper",
                        children: [Object(Y.jsx)("div", {
                            className: "notification-event-title notification-event-info-row subheading",
                            children: i
                        }), t]
                    })]
                }, e.id)
            }
            ))) : r = Object(Y.jsx)("div", {
                id: "notfound-wrapper",
                children: Object(Y.jsxs)("div", {
                    className: "notfound-section",
                    children: [Object(Y.jsx)("div", {
                        id: "notfound-lettuce"
                    }), Object(Y.jsx)("div", {
                        id: "notfound-title",
                        className: "notfound-section heading",
                        children: "No new notifications"
                    }), Object(Y.jsx)("div", {
                        className: "notfound-section notfound-cta-wrapper",
                        children: "You'll be notified when someone adds or updates their response to your meeting. You'll also be notified when a meeting you've responded to was scheduled."
                    })]
                })
            }),
            Object(Y.jsxs)("div", {
                id: "notification-wrapper",
                className: "notification-wrapper",
                children: [Object(Y.jsx)("div", {
                    id: "notification-heading",
                    className: "notification-section",
                    children: Object(Y.jsxs)("div", {
                        className: "heading",
                        children: [null === s || void 0 === s ? void 0 : s.name, "'s Notifications"]
                    })
                }), Object(Y.jsx)("div", {
                    id: "notification-events",
                    className: "notification-section",
                    children: r
                })]
            })
        }, nn = void 0 !== le ? le : le = t(418), tn = (t(419),
        function(e) {
            var n = Object(o.useContext)(G)
              , t = n.screenType
              , a = n.setBottomBarActions
              , i = Object(o.useRef)(null)
              , l = Object(m.useRelayEnvironment)()
              , s = Object(o.useState)(F)
              , r = Object(d.a)(s, 2)
              , c = r[0]
              , u = r[1]
              , v = Object(o.useState)("")
              , p = Object(d.a)(v, 2)
              , g = p[0]
              , f = p[1];
            Object(o.useEffect)((function() {
                var e;
                k() || (null === (e = i.current) || void 0 === e || e.setFocus());
                return window.addEventListener("keydown", O, !0),
                K.setDocumentTitle("Forgot Password"),
                b.setPage("/forgot-password"),
                b.trackPageView(),
                function() {
                    window.removeEventListener("keydown", O, !0),
                    b.setPage(null)
                }
            }
            ), []),
            Object(o.useEffect)((function() {
                a([new Oe(fe,c === F ? "Reset" : "Resend",E)])
            }
            ), [c]);
            var j, y, k = function() {
                return !K.isDesktop(t)
            }, O = function(e) {
                e.which !== x && e.keyCode !== x || E(null)
            }, E = function(e) {
                var n;
                if (e && e.preventDefault(),
                c === F) {
                    var t, a;
                    if (!(null === (t = i.current) || void 0 === t ? void 0 : t.checkValid()))
                        return;
                    f(null === (a = i.current) || void 0 === a ? void 0 : a.getValue())
                }
                Object(m.commitMutation)(l, {
                    mutation: nn,
                    variables: {
                        input: {
                            email: g || (null === (n = i.current) || void 0 === n ? void 0 : n.getValue())
                        }
                    },
                    onCompleted: function(e) {
                        h.log("Success"),
                        u(L)
                    },
                    onError: function(e) {
                        h.log(e),
                        u(A)
                    }
                })
            };
            return c === F ? (y = "Forgot your password?",
            j = "Enter the email associated with a LettuceMeet account. If the account exists, we'll send you a link to reset your password.") : c === L ? (y = "Email sent!",
            j = "If the account exists, you'll receive an email with a link to reset your password. If you haven't received an email yet within 5 minutes, hit Resend and we'll send it again! Please also check your junk/spam folders.") : (y = "Something went wrong",
            j = "Please try again later or contact us via the feedback form."),
            Object(Y.jsxs)("div", {
                id: "signin-wrapper",
                className: "signin-wrapper",
                children: [Object(Y.jsx)("div", {
                    className: "info-row heading",
                    children: y
                }), Object(Y.jsx)("div", {
                    className: "info-row",
                    children: Object(Y.jsxs)("div", {
                        id: "info-title subsubheading",
                        children: [" ", j]
                    })
                }), c === F && Object(Y.jsxs)("div", {
                    className: "info-row",
                    children: [Object(Y.jsx)("div", {
                        className: "info-title subheading",
                        children: "Email address"
                    }), Object(Y.jsx)(Ae, {
                        id: "passwordreset-email",
                        className: "subheading",
                        type: "email",
                        value: g,
                        placeholder: "What's your email address?",
                        ref: i
                    })]
                }), function() {
                    if (!k())
                        return Object(Y.jsx)("div", {
                            id: "passwordreset-footer",
                            className: "info-row info-footer",
                            children: Object(Y.jsxs)("div", {
                                role: "button",
                                id: "passwordreset-footer-button",
                                className: "button button-icon subsubheading icon-arrow-right-circle",
                                onClick: E,
                                children: [" ", c === F ? "Reset" : "Resend"]
                            })
                        })
                }()]
            })
        }
        ), an = void 0 !== se ? se : se = t(420), ln = (t(421),
        function(e) {
            var n = Object(H.i)()
              , t = Object(o.useContext)(G)
              , a = t.screenType
              , i = t.setBottomBarActions
              , l = Object(m.useRelayEnvironment)()
              , s = Object(H.g)()
              , r = Object(o.useRef)(null)
              , c = Object(o.useState)(F)
              , u = Object(d.a)(c, 2)
              , v = u[0]
              , p = u[1];
            Object(o.useEffect)((function() {
                return window.addEventListener("keydown", f, !0),
                K.setDocumentTitle("Forgot Password"),
                b.setPage("/forgot-password"),
                b.trackPageView(),
                function() {
                    window.removeEventListener("keydown", f, !0),
                    b.setPage(null)
                }
            }
            ), []),
            Object(o.useEffect)((function() {
                var e;
                (i(O()),
                g()) || (null === (e = r.current) || void 0 === e || e.setFocus())
            }
            ), [v]);
            var g = function() {
                return !K.isDesktop(a)
            }
              , f = function(e) {
                e.which !== x && e.keyCode !== x || k(null)
            }
              , j = function(e) {
                e && e.preventDefault(),
                s.push("/forgot-password")
            }
              , y = function() {
                s.push("/login")
            }
              , k = function(e) {
                var t, a;
                e && e.preventDefault(),
                v != L ? (null === (t = r.current) || void 0 === t ? void 0 : t.checkValid()) && ((null === n || void 0 === n ? void 0 : n.token) ? Object(m.commitMutation)(l, {
                    mutation: an,
                    variables: {
                        input: {
                            resetToken: null === n || void 0 === n ? void 0 : n.token,
                            newPassword: null === (a = r.current) || void 0 === a ? void 0 : a.getValue()
                        }
                    },
                    onCompleted: function(e) {
                        h.log("Success"),
                        p(L)
                    },
                    onError: function(e) {
                        h.log(e),
                        p(A)
                    }
                }) : p(A)) : s.push("/login")
            }
              , O = function() {
                return [new Oe(fe,v == A ? "Try Again" : v == L ? "Sign In" : "Update",v == A ? j : v == F ? k : y)]
            }
              , E = function() {
                if (!g()) {
                    return v == A ? Object(Y.jsx)("div", {
                        id: "passwordreset-footer",
                        className: "info-row info-footer",
                        children: Object(Y.jsx)("div", {
                            role: "button",
                            id: "passwordreset-footer-button",
                            className: "button button-icon subsubheading icon-arrow-right-circle",
                            onClick: j,
                            children: "Try Again"
                        })
                    }) : Object(Y.jsx)("div", {
                        id: "passwordreset-footer",
                        className: "info-row info-footer",
                        children: Object(Y.jsx)("div", {
                            role: "button",
                            id: "passwordreset-footer-button",
                            className: "button button-icon subsubheading icon-arrow-right-circle",
                            onClick: k,
                            children: v == L ? "Sign In" : "Update"
                        })
                    })
                }
            };
            return v == A ? Object(Y.jsxs)("div", {
                id: "signin-wrapper",
                className: "signin-wrapper",
                children: [Object(Y.jsx)("div", {
                    className: "info-row heading",
                    children: "Update Your Password"
                }), Object(Y.jsx)("div", {
                    className: "info-row",
                    children: Object(Y.jsxs)("div", {
                        id: "info-title subsubheading",
                        children: [" ", "There was a problem resetting your password. Please try resetting it again."]
                    })
                }), E()]
            }) : Object(Y.jsxs)("div", {
                id: "signin-wrapper",
                className: "signin-wrapper",
                children: [Object(Y.jsx)("div", {
                    className: "info-row heading",
                    children: "Update Your Password"
                }), Object(Y.jsx)("div", {
                    className: "info-row",
                    children: Object(Y.jsxs)("div", {
                        id: "info-title subsubheading",
                        children: [" ", v == L ? "Your password was updated successfully." : "Enter the new password that you'd like to use with your account."]
                    })
                }), v == F && Object(Y.jsxs)("div", {
                    className: "info-row",
                    children: [Object(Y.jsx)("div", {
                        className: "info-title subheading",
                        children: "New Password"
                    }), Object(Y.jsx)(Ae, {
                        id: "signin-email",
                        className: "subheading",
                        type: "password",
                        placeholder: "Your new password",
                        ref: r
                    })]
                }), E()]
            })
        }
        ), sn = void 0 !== oe ? oe : oe = t(422), on = void 0 !== re ? re : re = t(423), rn = "Auth", cn = {
            PROVIDER_CONFIRM_VIEW: "provider_confirm_view",
            PROVIDER_CONFIRM_PRESS: "provider_confirm_press",
            PROVIDER_CONFIRM_CANCEL: "provider_confirm_cancel",
            PROVIDER_CONFIRM_PRESS_ERROR: "provider_confirm_press_error",
            PROVIDER_CONFIRM_CANCEL_ERROR: "provider_confirm_cancel_error"
        }, un = {
            google: {
                name: "Google",
                className: "google"
            }
        }, dn = function(e) {
            var n = Object(o.useContext)(G)
              , t = n.screenType
              , a = n.setBottomBarActions
              , i = Object(H.g)()
              , l = Object(m.useRelayEnvironment)()
              , s = Object(H.i)();
            Object(o.useEffect)((function() {
                return un[null === s || void 0 === s ? void 0 : s.provider] ? (b.setPage("/login/".concat(null === s || void 0 === s ? void 0 : s.provider, "/")),
                b.trackPageView(),
                a(r()),
                K.setDocumentTitle("Log in with ".concat(un[null === s || void 0 === s ? void 0 : s.provider].name)),
                b.trackEvent(rn, cn.PROVIDER_CONFIRM_VIEW, null === s || void 0 === s ? void 0 : s.provider),
                function() {
                    b.setPage(null)
                }
                ) : (i.replace("/404"),
                null)
            }
            ), []);
            var r = function() {
                return [new Oe(ge,"Cancel",u), new Oe(fe,"Link ".concat(un[null === s || void 0 === s ? void 0 : s.provider].name, " account"),c)]
            }
              , c = function(n) {
                n && n.preventDefault(),
                b.trackEvent(rn, cn.PROVIDER_CONFIRM_PRESS, null === s || void 0 === s ? void 0 : s.provider),
                Object(m.commitMutation)(l, {
                    mutation: sn,
                    variables: {
                        input: {
                            confirmToken: null === s || void 0 === s ? void 0 : s.token
                        }
                    },
                    onCompleted: function(n) {
                        ue.setSessionToken(n.confirmGoogleAuth.authToken),
                        e.resetRelayEnv(),
                        i.replace("/")
                    },
                    onError: function(e) {
                        b.trackEvent(rn, cn.PROVIDER_CONFIRM_PRESS_ERROR, null === s || void 0 === s ? void 0 : s.provider),
                        ue.clearSessionToken(),
                        Object(z.b)("Uh-oh, looks like we ran into an error.", {
                            position: z.b.POSITION.BOTTOM_CENTER,
                            autoClose: 3e3,
                            hideProgressBar: !0,
                            className: "error-toast"
                        }),
                        i.replace("/login")
                    }
                })
            }
              , u = function(e) {
                b.trackEvent(rn, cn.PROVIDER_CONFIRM_CANCEL, null === s || void 0 === s ? void 0 : s.provider),
                Object(m.commitMutation)(l, {
                    mutation: on,
                    variables: {
                        input: {
                            confirmToken: null === s || void 0 === s ? void 0 : s.token
                        }
                    },
                    onCompleted: function(e) {
                        ue.clearSessionToken(),
                        i.replace("/")
                    },
                    onError: function(e) {
                        b.trackEvent(rn, cn.PROVIDER_CONFIRM_CANCEL_ERROR, null === s || void 0 === s ? void 0 : s.provider),
                        ue.clearSessionToken(),
                        i.replace("/")
                    }
                })
            };
            return un[null === s || void 0 === s ? void 0 : s.provider] ? Object(Y.jsxs)("div", {
                id: "confirm-oauth-wrapper",
                className: "signin-wrapper",
                children: [Object(Y.jsx)("div", {
                    className: "info-row",
                    children: Object(Y.jsxs)("div", {
                        className: "info-title-cols",
                        children: [Object(Y.jsx)("div", {
                            className: "info-title subheading",
                            children: "Log in"
                        }), Object(Y.jsx)("div", {
                            id: "continue-with-".concat(un[null === s || void 0 === s ? void 0 : s.provider].className, "-icon")
                        })]
                    })
                }), Object(Y.jsx)("div", {
                    className: "info-row horizontal-divider"
                }), Object(Y.jsx)("div", {
                    className: "info-row subsubheading",
                    children: "Welcome back!"
                }), Object(Y.jsxs)("div", {
                    className: "info-row subsubheading",
                    children: ["You already have an account on LettuceMeet associated with your ", un[null === s || void 0 === s ? void 0 : s.provider].name, " email. Continue with linking your ", un[null === s || void 0 === s ? void 0 : s.provider].name, " account to:"]
                }), Object(Y.jsxs)("div", {
                    className: "info-row subsubheading",
                    children: [Object(Y.jsxs)("div", {
                        className: "confirm-oauth-value",
                        children: [Object(Y.jsx)("div", {
                            className: "confirm-oauth-value-icon icon-check"
                        }), Object(Y.jsx)("div", {
                            className: "confirm-oauth-value-text",
                            children: "Log in with one click"
                        })]
                    }), Object(Y.jsxs)("div", {
                        className: "confirm-oauth-value",
                        children: [Object(Y.jsx)("div", {
                            className: "confirm-oauth-value-icon icon-check"
                        }), Object(Y.jsxs)("div", {
                            className: "confirm-oauth-value-text",
                            children: ["Overlay ", un[null === s || void 0 === s ? void 0 : s.provider].name, " calendar when adding availabilities"]
                        })]
                    }), Object(Y.jsxs)("div", {
                        className: "confirm-oauth-value",
                        children: [Object(Y.jsx)("div", {
                            className: "confirm-oauth-value-icon icon-check"
                        }), Object(Y.jsxs)("div", {
                            className: "confirm-oauth-value-text",
                            children: ["Sync scheduled meetings with ", un[null === s || void 0 === s ? void 0 : s.provider].name, " calendar"]
                        })]
                    })]
                }), function() {
                    if (K.isDesktop(t))
                        return Object(Y.jsxs)("div", {
                            id: "signup-footer",
                            className: "info-row info-footer",
                            children: [Object(Y.jsx)("div", {
                                role: "button",
                                id: "signup-footer-button",
                                className: "button button-gray button-icon subsubheading icon-close",
                                onClick: u,
                                children: "Cancel"
                            }), Object(Y.jsxs)("div", {
                                role: "button",
                                id: "signup-footer-button",
                                className: "button button-icon subsubheading icon-arrow-right-circle",
                                onClick: c,
                                children: ["Link ", un[null === s || void 0 === s ? void 0 : s.provider].name, " account"]
                            })]
                        })
                }()]
            }) : null
        }, mn = void 0 !== ce ? ce : ce = t(424), vn = "Auth", pn = {
            PROVIDER_END: "provider_end"
        }, hn = function(e) {
            var n = Object(H.g)()
              , t = Object(m.useRelayEnvironment)()
              , a = Object(H.i)();
            return Object(o.useEffect)((function() {
                return K.setDocumentTitle("Logging in"),
                b.setPage("/login/auth/".concat(null === a || void 0 === a ? void 0 : a.provider)),
                b.trackPageView(),
                b.trackEvent(vn, pn.PROVIDER_END, null === a || void 0 === a ? void 0 : a.provider),
                Object(m.commitMutation)(t, {
                    mutation: mn,
                    variables: {
                        input: {
                            authToken: null === a || void 0 === a ? void 0 : a.token
                        }
                    },
                    onCompleted: function(t) {
                        h.log("Successfully validated token"),
                        ue.setSessionToken(t.validateAuthToken.authToken),
                        e.resetRelayEnv(),
                        n.replace("/")
                    },
                    onError: function(e) {
                        h.log("Could not validate token"),
                        n.replace("/")
                    }
                }),
                function() {
                    b.setPage(null)
                }
            }
            ), []),
            null
        }, bn = t(40), gn = t(81), fn = t(80), jn = t(225), yn = (t(425),
        Object(jn.extendMoment)(be.a)), kn = "BLANK", On = "SELECTED", En = "UNSELECTED", Tn = "HOVER", wn = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"], xn = "DatePicker", Sn = {
            NEXT_WINDOW: "next_window",
            PREV_WINDOW: "prev_window",
            DRAG_DATES: "drag_dates",
            CLICK_DATE: "click_date"
        }, Nn = function(e) {
            Object(gn.a)(t, e);
            var n = Object(fn.a)(t);
            function t(e) {
                var a;
                Object(v.a)(this, t),
                a = n.call(this, e);
                var i = e.startDate
                  , l = e.endDate
                  , s = t.getDatesInRange(i, l)
                  , o = e.weeksPerWindow
                  , r = t.getWeeksFromDates(s)
                  , c = e.selectedDates ? new Set(e.selectedDates) : t.defaultSelectedDates(r);
                t.updateWeeks(r, c);
                var u = e.onSelectCallback;
                return a.startDate = i,
                a.endDate = l,
                a.dates = s,
                a.selectedDates = c,
                a.weeks = r,
                a.weeksPerWindow = o,
                a.onSelectCallback = u,
                a.currentWindowIdx = 0,
                a.mouseState = {},
                a.touchState = {},
                a.gaState = {
                    hasClicked: !1,
                    hasDragged: !1
                },
                a.state = {
                    currentWindow: a.getWindow(a.currentWindowIdx)
                },
                a.handleMouseUpOnDocument = a.handleMouseUpOnDocument.bind(Object(bn.a)(a)),
                a.handleKeyDown = a.handleKeyDown.bind(Object(bn.a)(a)),
                a.triggerOnSelectCallback(),
                a
            }
            return Object(p.a)(t, [{
                key: "getWindow",
                value: function(e) {
                    if (!this.hasWindow(e))
                        return null;
                    var n = e * this.weeksPerWindow;
                    return this.weeks.slice(n, n + 4)
                }
            }, {
                key: "hasWindow",
                value: function(e) {
                    var n = e * this.weeksPerWindow;
                    return n >= 0 && n < this.weeks.length
                }
            }, {
                key: "hasNextWindow",
                value: function() {
                    return this.hasWindow(this.currentWindowIdx + 1)
                }
            }, {
                key: "hasPreviousWindow",
                value: function() {
                    return this.hasWindow(this.currentWindowIdx - 1)
                }
            }, {
                key: "handleClickOnDate",
                value: function(e, n, t) {
                    e.nativeEvent.stopImmediatePropagation();
                    var a = this.state.currentWindow
                      , i = a[n][t];
                    i.state !== kn && (i.state === On ? (i.state = En,
                    this.selectedDates.delete(i.date)) : (i.state = On,
                    this.selectedDates.add(i.date)),
                    this.setState({
                        currentWindow: a
                    }),
                    this.triggerOnSelectCallback(),
                    this.gaState.hasClicked || (this.gaState.hasClicked = !0,
                    b.trackEvent(xn, Sn.CLICK_DATE, i.date.toString())))
                }
            }, {
                key: "handleMouseDownOnDate",
                value: function(e, n, t) {
                    e && e.nativeEvent && e.nativeEvent.stopImmediatePropagation(),
                    this.mouseState.down = !0,
                    this.mouseState.downWeek = n,
                    this.mouseState.downDay = t
                }
            }, {
                key: "handleMouseUpOnDate",
                value: function(e, n, a) {
                    if (e && e.nativeEvent && e.nativeEvent.stopImmediatePropagation(),
                    this.mouseState.down = !1,
                    n !== this.mouseState.downWeek || a !== this.mouseState.downDay) {
                        var i = this.state.currentWindow
                          , l = t.getStartEndIdx(this.mouseState.downWeek, this.mouseState.downDay, n, a)
                          , s = this;
                        t.iterateWindow(i, l, (function(e) {
                            e.state !== On && (e.state = On,
                            s.selectedDates.add(e.date))
                        }
                        )),
                        this.setState({
                            currentWindow: i
                        }),
                        this.triggerOnSelectCallback()
                    }
                }
            }, {
                key: "handleMouseUpOnDocument",
                value: function(e) {
                    this.mouseState.down && (this.mouseState.down = !1,
                    this.resetHoverState())
                }
            }, {
                key: "handleMouseOverOnDate",
                value: function(e, n, a) {
                    if (e && e.nativeEvent && e.nativeEvent.stopImmediatePropagation(),
                    this.mouseState.down) {
                        var i = this.state.currentWindow
                          , l = t.getStartEndIdx(this.mouseState.downWeek, this.mouseState.downDay, n, a);
                        this.resetHoverState(),
                        t.iterateWindow(i, l, (function(e) {
                            e.state === En && (e.state = Tn)
                        }
                        )),
                        this.setState({
                            currentWindow: i
                        }),
                        this.gaState.hasDragged || (this.gaState.hasDragged = !0,
                        b.trackEvent(xn, Sn.DRAG_DATES))
                    }
                }
            }, {
                key: "handleTouchStart",
                value: function(e, n, t) {
                    e.nativeEvent.stopImmediatePropagation(),
                    this.touchState = {},
                    this.handleMouseDownOnDate(null, n, t)
                }
            }, {
                key: "handleTouchMove",
                value: function(e, n, t) {
                    var a = e.nativeEvent;
                    a.stopImmediatePropagation();
                    var i = document.elementFromPoint(a.touches[0].clientX, a.touches[0].clientY)
                      , l = parseInt(i.dataset.week)
                      , s = parseInt(i.dataset.day);
                    this.touchState.lastMoveWeek = l,
                    this.touchState.lastMoveDay = s,
                    this.handleMouseOverOnDate(null, l, s)
                }
            }, {
                key: "handleTouchEnd",
                value: function(e, n, t) {
                    e.nativeEvent.stopImmediatePropagation(),
                    this.handleMouseUpOnDate(null, this.touchState.lastMoveWeek, this.touchState.lastMoveDay)
                }
            }, {
                key: "handleKeyDown",
                value: function(e) {
                    switch (e.keyCode) {
                    case S:
                        this.handlePreviousWindow();
                        break;
                    case N:
                        this.handleNextWindow()
                    }
                }
            }, {
                key: "handleNextWindow",
                value: function() {
                    if (this.hasNextWindow()) {
                        var e = this.getWindow(this.currentWindowIdx + 1);
                        this.currentWindowIdx++,
                        this.setState({
                            currentWindow: e
                        }),
                        b.trackEvent(xn, Sn.NEXT_WINDOW, null, this.currentWindowIdx)
                    }
                }
            }, {
                key: "handlePreviousWindow",
                value: function() {
                    if (this.hasPreviousWindow()) {
                        var e = this.getWindow(this.currentWindowIdx - 1);
                        this.currentWindowIdx--,
                        this.setState({
                            currentWindow: e
                        }),
                        b.trackEvent(xn, Sn.PREV_WINDOW, null, this.currentWindowIdx)
                    }
                }
            }, {
                key: "resetHoverState",
                value: function() {
                    for (var e = this.state.currentWindow, n = 0; n < e.length; n++)
                        for (var t = 0; t < e[n].length; t++)
                            e[n][t].state === Tn && (e[n][t].state = En);
                    this.setState({
                        currentWindow: e
                    })
                }
            }, {
                key: "triggerOnSelectCallback",
                value: function() {
                    this.onSelectCallback(Array.from(this.selectedDates))
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    window.addEventListener("mouseup", this.handleMouseUpOnDocument),
                    window.addEventListener("keydown", this.handleKeyDown)
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    window.removeEventListener("mouseup", this.handleMouseUpOnDocument),
                    window.removeEventListener("keydown", this.handleKeyDown)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this;
                    return Object(Y.jsxs)("div", {
                        className: "date-picker-wrapper",
                        children: [e.hasPreviousWindow() && Object(Y.jsx)("div", {
                            id: "date-picker-prev-window",
                            className: "window-nav",
                            onClick: function(n) {
                                return e.handlePreviousWindow()
                            }
                        }), Object(Y.jsxs)("div", {
                            className: "date-picker-content-wrapper",
                            children: [Object(Y.jsx)("div", {
                                className: "date-picker-days-of-week",
                                children: wn.map((function(e) {
                                    return Object(Y.jsx)("div", {
                                        className: "date-picker-day-of-week",
                                        children: e
                                    }, e)
                                }
                                ))
                            }), Object(Y.jsx)("div", {
                                className: "date-picker-horz-sep",
                                children: " "
                            }), Object(Y.jsx)("div", {
                                className: "date-picker-weeks",
                                children: this.state.currentWindow.map((function(n, t) {
                                    return Object(Y.jsx)("div", {
                                        className: "date-picker-week",
                                        children: n.map((function(n, a) {
                                            if (n.state === kn)
                                                return Object(Y.jsx)("div", {
                                                    className: "date-picker-date-wrapper",
                                                    children: Object(Y.jsx)("div", {
                                                        className: "date-picker-date date-picker-date-blank",
                                                        children: " "
                                                    })
                                                }, t + "-" + a);
                                            var i = yn(n.date)
                                              , l = 1 === i.date() || 0 === t && 0 === a;
                                            return Object(Y.jsx)("div", {
                                                className: "date-picker-date-wrapper",
                                                onClick: function(n) {
                                                    return e.handleClickOnDate(n, t, a)
                                                },
                                                onTouchStart: function(n) {
                                                    return e.handleTouchStart(n, t, a)
                                                },
                                                onTouchEnd: function(n) {
                                                    return e.handleTouchEnd(n, t, a)
                                                },
                                                onTouchMove: function(n) {
                                                    return e.handleTouchMove(n, t, a)
                                                },
                                                onMouseDown: function(n) {
                                                    return e.handleMouseDownOnDate(n, t, a)
                                                },
                                                onMouseUp: function(n) {
                                                    return e.handleMouseUpOnDate(n, t, a)
                                                },
                                                onMouseEnter: function(n) {
                                                    return e.handleMouseOverOnDate(n, t, a)
                                                },
                                                children: Object(Y.jsx)("div", {
                                                    className: "date-picker-date " + (n.state === On ? "selected" : "") + (n.state === Tn ? "hover" : ""),
                                                    "data-week": t,
                                                    "data-day": a,
                                                    "data-month": l ? i.format("MMM") : "",
                                                    children: i.date()
                                                })
                                            }, t + "-" + a)
                                        }
                                        ))
                                    }, t)
                                }
                                ))
                            })]
                        }), e.hasNextWindow() && Object(Y.jsx)("div", {
                            id: "date-picker-next-window",
                            className: "window-nav",
                            onClick: function(n) {
                                return e.handleNextWindow()
                            }
                        })]
                    })
                }
            }], [{
                key: "getDatesInRange",
                value: function(e, n) {
                    var t = yn.range(e, n);
                    return Array.from(t.by("days")).map((function(e) {
                        return e.format("YYYY-MM-DD")
                    }
                    ))
                }
            }, {
                key: "getStartEndIdx",
                value: function(e, n, t, a) {
                    var i, l, s, o;
                    return (i = Math.min(t, e)) === (s = Math.max(t, e)) ? (l = Math.min(a, n),
                    o = Math.max(a, n)) : i === t ? (l = a,
                    o = n) : (l = n,
                    o = a),
                    {
                        start: {
                            weekIdx: i,
                            dayIdx: l
                        },
                        end: {
                            weekIdx: s,
                            dayIdx: o
                        }
                    }
                }
            }, {
                key: "getWeeksFromDates",
                value: function(e) {
                    var n = [];
                    if (null === e || 0 === e.length)
                        return n;
                    for (var t = 0, a = 7 - be()(e[0]).day(); t < e.length; ) {
                        var i = e.slice(t, t + a);
                        n.push(i),
                        t += a,
                        a = 7
                    }
                    return n[0] = K.prefixNull(n[0], 7 - n[0].length),
                    n[n.length - 1] = K.appendNull(n[n.length - 1], 7 - n[n.length - 1].length),
                    n.map((function(e) {
                        return e.map((function(e) {
                            return {
                                date: e,
                                state: !e && kn || En
                            }
                        }
                        ))
                    }
                    ))
                }
            }, {
                key: "iterateWindow",
                value: function(e, n, t) {
                    if (e && n && t)
                        for (var a = n.start.weekIdx; a <= n.end.weekIdx; a++) {
                            var i = 0
                              , l = 6;
                            for (a === n.start.weekIdx && (i = n.start.dayIdx),
                            a === n.end.weekIdx && (l = n.end.dayIdx); i <= l; i++)
                                t && t(e[a][i], a, i)
                        }
                }
            }, {
                key: "defaultSelectedDates",
                value: function(e) {
                    var n, t = new Set, a = Object(O.a)(e[0]);
                    try {
                        for (a.s(); !(n = a.n()).done; ) {
                            var i = n.value;
                            if (i.state !== kn) {
                                t.add(i.date);
                                break
                            }
                        }
                    } catch (l) {
                        a.e(l)
                    } finally {
                        a.f()
                    }
                    return t
                }
            }, {
                key: "updateWeeks",
                value: function(e, n) {
                    var t, a = Object(O.a)(e);
                    try {
                        for (a.s(); !(t = a.n()).done; ) {
                            var i, l = t.value, s = Object(O.a)(l);
                            try {
                                for (s.s(); !(i = s.n()).done; ) {
                                    var o = i.value;
                                    n.has(o.date) ? o.state = On : o.state === On && (o.state = En)
                                }
                            } catch (r) {
                                s.e(r)
                            } finally {
                                s.f()
                            }
                        }
                    } catch (r) {
                        a.e(r)
                    } finally {
                        a.f()
                    }
                }
            }]),
            t
        }(r.a.Component);
        Nn.defaultProps = {
            startDate: yn().format("YYYY-MM-DD"),
            endDate: yn().add(52, "week").format("YYYY-MM-DD"),
            weeksPerWindow: 4
        };
        var _n = Nn
          , Rn = (t(426),
        "Home")
          , Cn = {
            LETS_MEET: "lets_meet",
            HOW_IT_WORKS: "how_it_works"
        }
          , Dn = {
            LETS_MEET_BOTTOM_BAR: "lets_meet_bb",
            LETS_MEET_TOP_BAR: "lets_meet_tb",
            HOW_IT_WORKS_BOTTOM_BAR: "how_it_works_bb"
        }
          , An = function(e) {
            Object(gn.a)(t, e);
            var n = Object(fn.a)(t);
            function t(e) {
                var a;
                return Object(v.a)(this, t),
                (a = n.call(this, e)).state = a.state || {},
                a.selectedDates = [],
                a.handleKeyDown = a.handleKeyDown.bind(Object(bn.a)(a)),
                a.handleSubmit = a.handleSubmit.bind(Object(bn.a)(a)),
                a
            }
            return Object(p.a)(t, [{
                key: "componentDidMount",
                value: function() {
                    this.context.setBottomBarActions(this.getBottomBarActions()),
                    window.addEventListener("keydown", this.handleKeyDown, !0),
                    K.setDocumentTitle("LettuceMeet - Easy Group Scheduling", !0),
                    b.setPage("/"),
                    b.trackPageView()
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    window.removeEventListener("keydown", this.handleKeyDown, !0),
                    b.setPage(null)
                }
            }, {
                key: "handleKeyDown",
                value: function(e) {
                    e.which !== x && e.keyCode !== x || this.handleSubmit(null)
                }
            }, {
                key: "handleHowItWorks",
                value: function() {
                    b.trackEvent(Rn, Cn.HOW_IT_WORKS, Dn.HOW_IT_WORKS_BOTTOM_BAR, 0),
                    this.props.history.push({
                        pathname: "/how-it-works"
                    })
                }
            }, {
                key: "handleSubmit",
                value: function(e) {
                    e && e.preventDefault(),
                    b.trackEvent(Rn, Cn.LETS_MEET, this.shouldRenderBottomBar() ? Dn.LETS_MEET_BOTTOM_BAR : Dn.LETS_MEET_TOP_BAR, this.selectedDates.length),
                    this.selectedDates && 0 !== this.selectedDates.length ? this.props.history.push({
                        pathname: "/create",
                        state: {
                            dates: this.selectedDates
                        }
                    }) : h.log("Please select Dates")
                }
            }, {
                key: "handleDatesSelected",
                value: function(e) {
                    this.selectedDates = e
                }
            }, {
                key: "shouldRenderBottomBar",
                value: function() {
                    return !K.isDesktop(this.context.screenType)
                }
            }, {
                key: "getBottomBarActions",
                value: function() {
                    var e = [];
                    return e.push(new Oe(ge,"How it works",this.handleHowItWorks.bind(this))),
                    e.push(new Oe(fe,"Let's meet",this.handleSubmit.bind(this))),
                    e
                }
            }, {
                key: "render",
                value: function() {
                    return Object(Y.jsxs)("div", {
                        id: "home-wrapper",
                        children: [Object(Y.jsxs)("div", {
                            id: "home-heading-row",
                            children: [Object(Y.jsx)("div", {
                                id: "home-heading",
                                className: "home-hero-row heading",
                                children: "What days would you like to meet on?"
                            }), Object(Y.jsx)("div", {
                                role: "button",
                                id: "home-top-button",
                                className: "button button-icon button-top subsubheading icon-arrow-right-circle",
                                onClick: this.handleSubmit.bind(this),
                                children: "Let's meet"
                            })]
                        }), Object(Y.jsx)("div", {
                            id: "home-date-picker-wrapper",
                            children: Object(Y.jsx)(_n, {
                                onSelectCallback: this.handleDatesSelected.bind(this)
                            })
                        })]
                    })
                }
            }]),
            t
        }(r.a.Component);
        An.contextType = G;
        var Ln, Fn, Pn, In, Mn, Kn, Un, Bn, Vn = Object(H.j)(An), Gn = (t(427),
        "text"), Wn = "primary_button", Hn = "secondary_button", zn = "dialog", Yn = "dialog-container", qn = function e(n, t, a, i, l) {
            Object(v.a)(this, e),
            this.title = n,
            this.description = t,
            this.actions = a || [],
            this.autoClose = !!i,
            this.onCancelCallback = l
        }, Zn = function e(n, t, a) {
            Object(v.a)(this, e),
            this.actionType = n,
            this.actionText = t,
            this.actionCallback = a
        }, $n = function(e) {
            Object(o.useEffect)((function() {
                return document.body.classList.add(zn),
                window.addEventListener("keydown", n, !0),
                function() {
                    document.body.classList.remove(zn),
                    window.removeEventListener("keydown", n, !0)
                }
            }
            ), []);
            var n = function(e) {
                e.which !== x && e.keyCode !== x || t(null)
            }
              , t = function(n) {
                e.onCancel && e.onCancel()
            }
              , a = function(n) {
                return e.onAutoClose ? function() {
                    n && n(),
                    e.onAutoClose()
                }
                : n
            }
              , i = function(e) {
                return Object(Y.jsx)("div", {
                    className: "dialog-action action-button button subsubsubheading",
                    onClick: a(e.actionCallback),
                    children: e.actionText
                }, e.actionText)
            }
              , l = function(e) {
                return Object(Y.jsx)("div", {
                    className: "dialog-action action-button button button-gray subsubsubheading",
                    onClick: a(e.actionCallback),
                    children: e.actionText
                }, e.actionText)
            }
              , s = function(e) {
                return Object(Y.jsx)("div", {
                    className: "dialog-action action-text",
                    onClick: a(e.actionCallback),
                    children: e.actionText
                }, e.actionText)
            };
            return Object(Y.jsx)("div", {
                id: "dialog-wrapper",
                className: "overlay overlay-show",
                children: Object(Y.jsxs)("div", {
                    id: "dialog",
                    children: [Object(Y.jsx)("div", {
                        id: "dialog-header",
                        className: "dialog-section subheading",
                        children: e.title
                    }), Object(Y.jsx)("div", {
                        id: "dialog-body",
                        className: "dialog-section",
                        children: e.description
                    }), Object(Y.jsx)("div", {
                        id: "dialog-actions",
                        className: "dialog-section",
                        children: function() {
                            var n, t = [], a = Object(O.a)(e.actions);
                            try {
                                for (a.s(); !(n = a.n()).done; ) {
                                    var o = n.value;
                                    switch (o.actionType) {
                                    case Wn:
                                        t.push(i(o));
                                        break;
                                    case Hn:
                                        t.push(l(o));
                                        break;
                                    case Gn:
                                        t.push(s(o))
                                    }
                                }
                            } catch (r) {
                                a.e(r)
                            } finally {
                                a.f()
                            }
                            return t
                        }()
                    }), Object(Y.jsx)("div", {
                        id: "dialog-close",
                        className: "icon-close",
                        onClick: t
                    })]
                })
            })
        }, Qn = function() {
            function e(n) {
                Object(v.a)(this, e),
                this.config = n,
                this.onAutoClose = this.onAutoClose.bind(this),
                this.onCancel = this.onCancel.bind(this);
                var t = Object(Y.jsx)($n, {
                    title: n.title,
                    description: n.description,
                    actions: n.actions,
                    onAutoClose: n.autoClose && this.onAutoClose,
                    onCancel: this.onCancel
                });
                this.domRef = u.a.render(t, document.getElementById(Yn))
            }
            return Object(p.a)(e, [{
                key: "ref",
                value: function() {
                    return this.domRef
                }
            }, {
                key: "onAutoClose",
                value: function() {
                    this.close()
                }
            }, {
                key: "onCancel",
                value: function() {
                    this.config.onCancelCallback && this.config.onCancelCallback(),
                    this.close()
                }
            }, {
                key: "close",
                value: function() {
                    u.a.unmountComponentAtNode(document.getElementById(Yn))
                }
            }]),
            e
        }(), Jn = void 0 !== Ln ? Ln : Ln = t(428), Xn = void 0 !== Fn ? Fn : Fn = t(429), et = void 0 !== Pn ? Pn : Pn = t(430), nt = void 0 !== In ? In : In = t(431), tt = void 0 !== Mn ? Mn : Mn = t(432), at = (t(433),
        0), it = 1, lt = "Settings", st = {
            LINK_GOOGLE_CALENDAR: "link_google_calendar",
            RELINK_GOOGLE_CALENDAR: "relink_google_calendar",
            UNLINK_GOOGLE_CALENDAR: "unlink_google_calendar",
            ATTEMPT_UNLINK_GOOGLE_CALENDAR: "attempt_unlink_google_calendar",
            SUBSCRIBE_EMAIL: "subscribe_email",
            UNSUBSCRIBE_EMAIL: "unsubscribe_email",
            DELETE_PRESS: "account_delete_press",
            DELETE_CANCEL: "account_delete_cancel",
            DELETE_CONFIRM: "account_delete_confirm",
            EDIT_NAME_PRESS: "edit_name_press",
            EDIT_NAME_SAVE_PRESS: "edit_name_save_press",
            EDIT_NAME_CANCEL: "edit_name_cancel",
            EDIT_NAME_SUCCESS: "edit_name_success",
            EDIT_NAME_ERROR: "edit_name_error"
        }, ot = function(e) {
            var n = Object(o.useContext)(B)
              , a = Object(o.useContext)(U)
              , i = Object(o.useContext)(G).setBottomBarActions
              , l = Object(o.useState)(at)
              , s = Object(d.a)(l, 2)
              , r = s[0]
              , c = s[1]
              , u = Object(o.useRef)(null)
              , v = void 0 !== Kn ? Kn : Kn = t(434)
              , p = Object(m.useRelayEnvironment)()
              , g = Object(H.g)()
              , f = Object(m.useFragment)(v, a)
              , j = n.calendar;
            Object(o.useEffect)((function() {
                return i(O()),
                K.setDocumentTitle("Profile Settings"),
                b.setPage("/me/settings"),
                b.trackPageView(),
                function() {
                    b.setPage(null)
                }
            }
            ), []),
            Object(o.useEffect)((function() {
                var e;
                r === it && (null === (e = u.current) || void 0 === e || e.setFocus())
            }
            ), [r]);
            var y = function() {
                g.push("/logout")
            }
              , k = function() {
                g.push("/me/settings")
            }
              , O = function() {
                var e = [];
                return e.push(new Oe(fe,"Settings",k,"settings")),
                e.push(new Oe(fe,"Sign out",y)),
                e
            }
              , E = function() {
                Object(m.commitMutation)(p, {
                    mutation: et,
                    variables: {
                        input: {}
                    },
                    onCompleted: function(e) {
                        Object(z.b)("Your account has been successfully deleted.", {
                            position: z.b.POSITION.BOTTOM_CENTER,
                            autoClose: 3e3,
                            hideProgressBar: !0,
                            className: "success-toast"
                        }),
                        g.push("/logout")
                    },
                    onError: function(e) {
                        Object(z.b)("Uh-oh, looks like we ran into an error", {
                            position: z.b.POSITION.BOTTOM_CENTER,
                            autoClose: 3e3,
                            hideProgressBar: !0,
                            className: "error-toast"
                        }),
                        h.log(e)
                    }
                }),
                b.trackEvent(lt, st.DELETE_CONFIRM)
            }
              , T = function(e) {
                b.trackEvent(lt, st.DELETE_CANCEL),
                null
            }
              , w = function() {
                b.trackEvent(lt, st.RELINK_GOOGLE_CALENDAR),
                window.location.assign(null === j || void 0 === j ? void 0 : j.redirectURL)
            }
              , x = function() {
                b.trackEvent(lt, st.LINK_GOOGLE_CALENDAR),
                window.location.assign(null === j || void 0 === j ? void 0 : j.redirectURL)
            }
              , S = function() {
                b.trackEvent(lt, st.UNLINK_GOOGLE_CALENDAR),
                Object(m.commitMutation)(p, {
                    mutation: Te,
                    variables: {
                        input: {}
                    },
                    onCompleted: function(n) {
                        e.resetRelayEnv()
                    },
                    onError: function(e) {
                        Object(z.b)("Uh-oh, looks like we ran into an error", {
                            position: z.b.POSITION.BOTTOM_CENTER,
                            autoClose: 3e3,
                            hideProgressBar: !0,
                            className: "error-toast"
                        }),
                        h.log(e)
                    }
                })
            }
              , N = function() {
                var e = (null === f || void 0 === f ? void 0 : f.unsubscribedFromEmails) ? nt : Xn;
                Object(m.commitMutation)(p, {
                    mutation: e,
                    variables: {
                        input: {}
                    },
                    onCompleted: function(e) {},
                    onError: function(e) {
                        Object(z.b)("Uh-oh, looks like we ran into an error", {
                            position: z.b.POSITION.BOTTOM_CENTER,
                            autoClose: 3e3,
                            hideProgressBar: !0,
                            className: "error-toast"
                        }),
                        h.log(e)
                    }
                }),
                b.trackEvent(lt, (null === f || void 0 === f ? void 0 : f.unsubscribedFromEmails) ? st.SUBSCRIBE_EMAIL : st.UNSUBSCRIBE_EMAIL)
            }
              , _ = function(e) {
                e && e.preventDefault(),
                c(it),
                b.trackEvent(lt, st.EDIT_NAME_PRESS)
            }
              , R = function(e) {
                e && e.preventDefault(),
                c(at),
                b.trackEvent(lt, st.EDIT_NAME_CANCEL)
            }
              , C = function(e) {
                var n, t, a;
                (e && e.preventDefault(),
                b.trackEvent(lt, st.EDIT_NAME_SAVE_PRESS),
                null === (n = u.current) || void 0 === n ? void 0 : n.checkValid()) && ((null === (t = u.current) || void 0 === t ? void 0 : t.getValue()) !== f.name ? Object(m.commitMutation)(p, {
                    mutation: tt,
                    variables: {
                        input: {
                            name: null === (a = u.current) || void 0 === a ? void 0 : a.getValue()
                        }
                    },
                    onCompleted: function(e) {
                        b.trackEvent(lt, st.EDIT_NAME_SUCCESS),
                        c(at),
                        Object(z.b)("Your name was successfully updated", {
                            position: z.b.POSITION.BOTTOM_CENTER,
                            autoClose: 3e3,
                            hideProgressBar: !0,
                            className: "success-toast"
                        })
                    },
                    onError: function(e) {
                        b.trackEvent(lt, st.EDIT_NAME_ERROR),
                        h.log(e),
                        Object(z.b)("Uh-oh, something went wrong", {
                            position: z.b.POSITION.BOTTOM_CENTER,
                            autoClose: 3e3,
                            hideProgressBar: !0,
                            className: "error-toast"
                        })
                    }
                }) : c(at))
            };
            return Object(Y.jsxs)("div", {
                id: "settings-wrapper",
                children: [Object(Y.jsx)("div", {
                    id: "settings-heading",
                    className: "settings-section",
                    children: Object(Y.jsx)("div", {
                        className: "heading",
                        children: "General Settings"
                    })
                }), Object(Y.jsxs)("div", {
                    id: "settings-section-name",
                    className: "settings-section",
                    children: [Object(Y.jsxs)("div", {
                        className: "settings-section-info-row",
                        children: [Object(Y.jsx)("div", {
                            className: "settings-section-info settings-section-text-col",
                            children: Object(Y.jsx)("div", {
                                className: "settings-section-info-heading subheading",
                                children: r === at ? "Name" : "Edit Name"
                            })
                        }), r === it ? Object(Y.jsxs)("div", {
                            className: "settings-section-button-col",
                            children: [Object(Y.jsx)("div", {
                                className: "profile-button button button-gray button-icon icon-close",
                                onClick: R,
                                children: "Cancel"
                            }), Object(Y.jsx)("div", {
                                className: "profile-button button button-green button-icon icon-check",
                                onClick: C,
                                children: "Save"
                            })]
                        }) : Object(Y.jsx)("div", {
                            className: "settings-section-button-col",
                            children: Object(Y.jsx)("div", {
                                className: "profile-button button button-icon icon-pencil",
                                onClick: _,
                                children: "Edit"
                            })
                        })]
                    }), Object(Y.jsx)("div", {
                        className: " settings-section-info-row",
                        children: Object(Y.jsx)("div", {
                            className: "settings-section-info settings-section-text-col",
                            children: Object(Y.jsx)("div", {
                                className: "settings-section-info-content subsubheading",
                                children: r === it ? Object(Y.jsx)(Ae, {
                                    type: "text",
                                    name: "name",
                                    placeholder: "Name",
                                    ref: u,
                                    value: f.name
                                }) : f.name
                            })
                        })
                    })]
                }), Object(Y.jsxs)("div", {
                    id: "settings-section-email",
                    className: "settings-section",
                    children: [Object(Y.jsx)("div", {
                        className: "settings-section-info-row",
                        children: Object(Y.jsx)("div", {
                            className: "settings-section-info-heading subheading",
                            children: "Email"
                        })
                    }), Object(Y.jsx)("div", {
                        className: "settings-section-info-row",
                        children: Object(Y.jsx)("div", {
                            className: "settings-section-info-content subsubheading",
                            children: f.email
                        })
                    })]
                }), Object(Y.jsx)("div", {
                    id: "settings-heading",
                    className: "settings-section",
                    children: Object(Y.jsx)("div", {
                        className: "heading",
                        children: "Linked Accounts"
                    })
                }), Object(Y.jsxs)("div", {
                    className: "settings-section",
                    children: [Object(Y.jsxs)("div", {
                        className: "settings-section-info settings-section-text-col",
                        children: [Object(Y.jsx)("div", {
                            className: "settings-section-info-heading subheading",
                            children: "Google"
                        }), Object(Y.jsx)("div", {
                            className: "settings-section-info-content subsubheading",
                            children: "Link with Google to view your calendar events when adding availabilities."
                        }), Object(Y.jsx)("div", {
                            className: "settings-section-info-caption hint",
                            children: "When you link your profile with Google, you let us view your calendar events, add/update only the events that LettuceMeet creates, and view your email address so we can identify you. We never store any of your event information."
                        })]
                    }), Object(Y.jsx)("div", {
                        className: "settings-section-button-col settings-cta-wrapper",
                        children: 1 === (null === f || void 0 === f ? void 0 : f.googleStatus) ? Object(Y.jsx)("div", {
                            className: "profile-button button button-yellow button-icon icon-calendar",
                            onClick: w,
                            children: "Re-Link Google Calendar"
                        }) : 2 === (null === f || void 0 === f ? void 0 : f.googleStatus) ? Object(Y.jsx)("div", {
                            className: "profile-button button button-icon icon-calendar",
                            onClick: x,
                            children: "Link Google Calendar"
                        }) : 0 === (null === f || void 0 === f ? void 0 : f.googleStatus) ? Object(Y.jsx)("div", {
                            className: "profile-button button button-disabled button-gray button-icon icon-calendar",
                            onClick: S,
                            children: "Unlink Google Calendar"
                        }) : void 0
                    })]
                }), Object(Y.jsx)("div", {
                    id: "settings-heading",
                    className: "settings-section",
                    children: Object(Y.jsx)("div", {
                        className: "heading",
                        children: "Notification Settings"
                    })
                }), Object(Y.jsxs)("div", {
                    className: "settings-section",
                    children: [Object(Y.jsxs)("div", {
                        className: "settings-section-info settings-section-text-col",
                        children: [Object(Y.jsx)("div", {
                            className: "settings-section-info-heading subheading",
                            children: "Email Updates"
                        }), Object(Y.jsx)("div", {
                            className: "settings-section-info-content subsubheading",
                            children: "Subscribe to receive emails when an event is scheduled."
                        })]
                    }), Object(Y.jsx)("div", {
                        className: "settings-section-button-col settings-cta-wrapper",
                        children: (null === f || void 0 === f ? void 0 : f.unsubscribedFromEmails) ? Object(Y.jsx)("div", {
                            className: "profile-button button button-icon icon-bell",
                            onClick: N,
                            children: "Subscribe to updates"
                        }) : Object(Y.jsx)("div", {
                            className: "profile-button button button-icon icon-bell",
                            onClick: N,
                            children: "Unsubscribe from updates"
                        })
                    })]
                }), Object(Y.jsx)("div", {
                    id: "settings-heading",
                    className: "settings-section",
                    children: Object(Y.jsx)("div", {
                        className: "heading",
                        children: "Account Settings"
                    })
                }), Object(Y.jsxs)("div", {
                    className: "settings-section",
                    children: [Object(Y.jsxs)("div", {
                        className: "settings-section-info settings-section-text-col",
                        children: [Object(Y.jsx)("div", {
                            className: "settings-section-info-heading subheading",
                            children: "Delete Account"
                        }), Object(Y.jsx)("div", {
                            className: "settings-section-info-content subsubheading",
                            children: "This will delete your account as well as all events and poll responses you've created. This action cannot be undone."
                        })]
                    }), Object(Y.jsx)("div", {
                        className: "settings-section-button-col settings-cta-wrapper",
                        children: Object(Y.jsx)("div", {
                            className: "profile-button button button-red button-icon icon-trash",
                            onClick: function(e) {
                                b.trackEvent(lt, st.DELETE_PRESS);
                                var n = new qn("Delete Account?","Are you sure you want to delete your account? This action cannot be undone.",[new Zn(Hn,"Cancel",T), new Zn(Wn,"Delete",E)],!0,T);
                                new Qn(n)
                            },
                            children: "Delete"
                        })
                    })]
                })]
            })
        }, rt = t(82), ct = "array", ut = "string", dt = "number", mt = "object", vt = {
            LETTUCES_CREATED: {
                key: "lettucemeet:lettuces_created",
                valueType: ct
            },
            TOURS_COMPLETED: {
                key: "lettucemeet:tours_completed",
                valueType: ct
            },
            ANNOUNCEMENTS: {
                key: "lettucemeet:announcements",
                valueType: ct
            },
            GOOGLE_AUTH_ERROR_DISMISSED: {
                key: "lettucemeet:google_auth_error_dismissed",
                valueType: ut
            },
            COOKIE_CONSENT: {
                key: "lettucemeet:cookie_consent",
                valueType: mt
            }
        }, pt = "localStorage", ht = function() {
            function e(n) {
                Object(v.a)(this, e),
                this.id = n,
                this.ts = Date.now()
            }
            return Object(p.a)(e, [{
                key: "toString",
                value: function() {
                    return JSON.stringify({
                        id: this.id,
                        ts: this.ts
                    })
                }
            }]),
            e
        }(), bt = new (function() {
            function e() {
                Object(v.a)(this, e),
                this.purgeLettucesCreated()
            }
            return Object(p.a)(e, [{
                key: "put",
                value: function(e, n, t) {
                    var a = window[e]
                      , i = null
                      , l = null;
                    switch (n.valueType) {
                    case ct:
                        l = JSON.parse(a.getItem(n.key)) || [],
                        -1 === f.a.findIndex(l, (function(e) {
                            return e === t
                        }
                        )) && l.push(t),
                        i = JSON.stringify(l);
                        break;
                    case ut:
                    case dt:
                        i = t;
                        break;
                    case mt:
                        l = JSON.parse(a.getItem(n.key)) || {},
                        f.a.merge(l, t),
                        i = JSON.stringify(l)
                    }
                    a.setItem(n.key, i)
                }
            }, {
                key: "get",
                value: function(e, n) {
                    var t = window[e]
                      , a = null;
                    switch (n.valueType) {
                    case ct:
                        a = JSON.parse(t.getItem(n.key)) || [];
                        break;
                    case ut:
                        a = t.getItem(n.key);
                        break;
                    case dt:
                        a = Number(t.getItem(n.key));
                        break;
                    case mt:
                        a = JSON.parse(t.getItem(n.key)) || {}
                    }
                    return a
                }
            }, {
                key: "throwAway",
                value: function(e, n, t) {
                    var a = window[e];
                    switch (n.valueType) {
                    case ct:
                        var i = JSON.parse(a.getItem(n.key)) || [];
                        f.a.remove(i, (function(e) {
                            return f.a.isEqual(e, t)
                        }
                        )),
                        a.setItem(n.key, JSON.stringify(i));
                        break;
                    case ut:
                    case dt:
                        a.removeItem(n.key)
                    }
                }
            }, {
                key: "purgeLettucesCreated",
                value: function() {
                    var e = this.get(pt, vt.LETTUCES_CREATED)
                      , n = Date.now()
                      , t = this;
                    e.forEach((function(e) {
                        n - e.ts >= 6048e5 && (h.log("CookieJar::cleanUpLettucesCreated: removing", e),
                        t.throwAway(pt, vt.LETTUCES_CREATED, e))
                    }
                    ))
                }
            }]),
            e
        }()), gt = (t(217),
        void 0 !== Un ? Un : Un = t(477));
        function ft() {
            return (ft = Object.assign || function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = arguments[n];
                    for (var a in t)
                        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function jt(e, n) {
            if (null == e)
                return {};
            var t, a, i = function(e, n) {
                if (null == e)
                    return {};
                var t, a, i = {}, l = Object.keys(e);
                for (a = 0; a < l.length; a++)
                    t = l[a],
                    n.indexOf(t) >= 0 || (i[t] = e[t]);
                return i
            }(e, n);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (a = 0; a < l.length; a++)
                    t = l[a],
                    n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t])
            }
            return i
        }
        function yt(e, n) {
            var t = e.title
              , a = e.titleId
              , i = jt(e, ["title", "titleId"]);
            return o.createElement("svg", ft({
                height: "100px",
                width: "100px",
                fill: "#000000",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                xmlns: "http://www.w3.org/2000/svg",
                strokeWidth: .501,
                strokeLinejoin: "bevel",
                fillRule: "evenodd",
                overflow: "visible",
                viewBox: "0 0 96 96",
                x: "0px",
                y: "0px",
                ref: n,
                "aria-labelledby": a
            }, i), t ? o.createElement("title", {
                id: a
            }, t) : null, Bn || (Bn = o.createElement("g", {
                fill: "none",
                stroke: "black",
                fontFamily: "Times New Roman",
                fontSize: 16,
                transform: "scale(1 -1)"
            }, o.createElement("g", {
                transform: "translate(0 -96)"
            }, o.createElement("g", null, o.createElement("path", {
                d: "M 31.351,19.175 L 31.351,20.843 C 31.351,25.789 33.233,29.446 36.407,31.815 C 39.509,34.128 43.651,35.073 47.991,35.073 C 52.332,35.073 56.476,34.128 59.575,31.815 C 62.749,29.447 64.634,25.785 64.634,20.843 L 64.634,19.175 L 31.351,19.175 Z M 15.151,23.542 L 15.151,25.209 C 15.151,28.628 16.462,31.208 18.708,32.883 C 20.879,34.504 23.742,35.14 26.667,35.14 C 29.208,35.14 31.701,34.66 33.735,33.474 C 30.896,31.015 29.088,27.651 28.54,23.542 L 15.151,23.542 Z M 62.265,33.5 C 64.299,34.686 66.792,35.166 69.333,35.166 C 72.258,35.166 75.121,34.53 77.292,32.909 C 79.538,31.234 80.849,28.654 80.849,25.235 L 80.849,23.568 L 67.46,23.568 C 66.912,27.677 65.104,31.041 62.265,33.5 Z M 3.299,26.947 L 3.299,28.118 C 3.299,30.52 4.22,32.332 5.797,33.508 C 7.322,34.646 9.333,35.093 11.387,35.093 C 12.912,35.093 14.413,34.847 15.708,34.255 C 13.771,32.36 12.583,29.866 12.249,26.947 L 3.299,26.947 Z M 80.292,34.281 C 81.587,34.873 83.088,35.119 84.613,35.119 C 86.667,35.119 88.678,34.672 90.203,33.534 C 91.78,32.358 92.701,30.546 92.701,28.144 L 92.701,26.973 L 83.751,26.973 C 83.417,29.892 82.229,32.386 80.292,34.281 Z M 6.452,42.359 C 6.452,45.082 8.663,47.293 11.387,47.293 C 14.112,47.293 16.322,45.082 16.322,42.359 C 16.322,39.632 14.112,37.423 11.387,37.423 C 8.663,37.423 6.452,39.632 6.452,42.359 Z M 79.678,42.385 C 79.678,45.108 81.888,47.319 84.613,47.319 C 87.337,47.319 89.548,45.108 89.548,42.385 C 89.548,39.658 87.337,37.449 84.613,37.449 C 81.888,37.449 79.678,39.658 79.678,42.385 Z M 19.641,45.917 C 19.641,49.794 22.788,52.942 26.667,52.942 C 30.547,52.942 33.694,49.794 33.694,45.917 C 33.694,42.035 30.547,38.89 26.667,38.89 C 22.788,38.89 19.641,42.035 19.641,45.917 Z M 62.306,45.943 C 62.306,49.82 65.453,52.968 69.333,52.968 C 73.212,52.968 76.359,49.82 76.359,45.943 C 76.359,42.061 73.212,38.916 69.333,38.916 C 65.453,38.916 62.306,42.061 62.306,45.943 Z M 38.749,48.507 C 38.749,53.608 42.889,57.749 47.99,57.749 C 53.092,57.749 57.232,53.608 57.232,48.507 C 57.232,43.406 53.092,39.266 47.99,39.266 C 42.889,39.266 38.749,43.406 38.749,48.507 Z",
                strokeLinejoin: "miter",
                strokeLinecap: "round",
                stroke: "none",
                fill: "#000000",
                strokeWidth: 3.75,
                markerStart: "none",
                markerEnd: "none",
                strokeMiterlimit: 79.8403193612775
            }))))))
        }
        var kt, Ot = o.forwardRef(yt);
        t.p;
        function Et() {
            return (Et = Object.assign || function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = arguments[n];
                    for (var a in t)
                        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function Tt(e, n) {
            if (null == e)
                return {};
            var t, a, i = function(e, n) {
                if (null == e)
                    return {};
                var t, a, i = {}, l = Object.keys(e);
                for (a = 0; a < l.length; a++)
                    t = l[a],
                    n.indexOf(t) >= 0 || (i[t] = e[t]);
                return i
            }(e, n);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (a = 0; a < l.length; a++)
                    t = l[a],
                    n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t])
            }
            return i
        }
        function wt(e, n) {
            var t = e.title
              , a = e.titleId
              , i = Tt(e, ["title", "titleId"]);
            return o.createElement("svg", Et({
                height: "100px",
                width: "100px",
                fill: "#000000",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                xmlns: "http://www.w3.org/2000/svg",
                strokeWidth: .501,
                strokeLinejoin: "bevel",
                fillRule: "evenodd",
                overflow: "visible",
                viewBox: "0 0 96 96",
                x: "0px",
                y: "0px",
                ref: n,
                "aria-labelledby": a
            }, i), t ? o.createElement("title", {
                id: a
            }, t) : null, kt || (kt = o.createElement("g", {
                fill: "none",
                stroke: "black",
                fontFamily: "Times New Roman",
                fontSize: 16,
                transform: "scale(1 -1)"
            }, o.createElement("g", {
                transform: "translate(0 -96)"
            }, o.createElement("g", null, o.createElement("path", {
                d: "M 55.389,36.67 C 57.431,37.86 59.934,38.343 62.486,38.343 C 65.423,38.343 68.298,37.704 70.478,36.076 C 72.734,34.395 74.05,31.803 74.05,28.371 L 74.05,26.696 L 60.605,26.696 C 60.055,30.823 58.239,34.201 55.389,36.67 Z",
                strokeLinejoin: "miter",
                strokeLinecap: "round",
                stroke: "none",
                fill: "#000000",
                strokeWidth: 3.75,
                markerStart: "none",
                markerEnd: "none",
                strokeMiterlimit: 79.8403193612775
            }), o.createElement("path", {
                d: "M 24.535,22.565 L 24.535,24.15 C 24.535,28.849 26.323,32.323 29.339,34.573 C 32.286,36.771 36.22,37.668 40.343,37.668 C 44.467,37.668 48.404,36.771 51.348,34.573 C 54.363,32.324 56.154,28.845 56.154,24.15 L 56.154,22.565 L 24.535,22.565 Z",
                strokeLinejoin: "miter",
                strokeLinecap: "round",
                stroke: "none",
                fill: "#000000",
                strokeWidth: 3.75,
                markerStart: "none",
                markerEnd: "none",
                strokeMiterlimit: 79.8403193612775
            }), o.createElement("path", {
                d: "M 31.564,50.431 C 31.564,55.277 35.497,59.211 40.342,59.211 C 45.189,59.211 49.122,55.277 49.122,50.431 C 49.122,45.585 45.189,41.652 40.342,41.652 C 35.497,41.652 31.564,45.585 31.564,50.431 Z",
                strokeLinejoin: "miter",
                strokeLinecap: "round",
                stroke: "none",
                fill: "#000000",
                strokeWidth: 3.75,
                markerStart: "none",
                markerEnd: "none",
                strokeMiterlimit: 79.8403193612775
            }), o.createElement("path", {
                d: "M 54.718,47.659 C 54.718,51.552 57.877,54.712 61.773,54.712 C 65.668,54.712 68.829,51.552 68.829,47.659 C 68.829,43.76 65.668,40.602 61.773,40.602 C 57.877,40.602 54.718,43.76 54.718,47.659 Z",
                strokeLinejoin: "miter",
                strokeLinecap: "round",
                stroke: "none",
                fill: "#000000",
                strokeWidth: 3.75,
                markerStart: "none",
                markerEnd: "none",
                strokeMiterlimit: 79.8403193612775
            }))))))
        }
        var xt, St, Nt, _t, Rt = o.forwardRef(wt), Ct = (t.p,
        w()("2018-01-01 09:00")), Dt = w()("2018-01-01 17:00"), At = "Lettuce", Lt = {
            CREATE_LETTUCE: "create"
        }, Ft = {
            CREATE_LETTUCE_BOTTOM_BAR: "create_lettuce_bb",
            CREATE_LETTUCE_TOP_BAR: "create_lettuce_tb",
            EVENT_TYPE_GROUP: "event_type_group",
            EVENT_TYPE_ONE_ON_ONE: "event_type_one_on_one",
            EVENT_LIMIT_CHANGE: "create_lettuce_event_limit_change"
        }, Pt = function(e) {
            var n, t = Object(o.useRef)(null), a = Object(o.useRef)(null), i = Object(o.useRef)(null), l = Object(o.useContext)(G), s = l.screenType, r = l.setBottomBarActions, c = Object(m.useRelayEnvironment)(), u = Object(H.h)(), v = Object(o.useRef)(null), p = Object(o.useRef)(null), g = Object(H.g)(), f = e.title || "", j = e.description || "", y = null === u || void 0 === u || null === (n = u.state) || void 0 === n ? void 0 : n.dates, k = null === e.id || void 0 === e.id, O = Object(o.useState)(0), E = Object(d.a)(O, 2), T = E[0], S = E[1];
            null !== y && void 0 !== y || g.push("/");
            K.twerk;
            Object(o.useEffect)((function() {
                var e;
                C() || (null === (e = v.current) || void 0 === e || e.setFocus());
                return N(),
                K.setDocumentTitle("Create a meeting"),
                b.setPage("/create"),
                b.trackPageView(),
                function() {
                    _(),
                    b.setPage(null)
                }
            }
            ), []),
            Object(o.useEffect)((function() {
                r([new Oe(fe,"Create",D)]);
                var e = 0 === T ? Ft.EVENT_TYPE_GROUP : Ft.EVENT_TYPE_ONE_ON_ONE;
                b.trackEvent(At, Lt.CREATE_LETTUCE, e, null)
            }
            ), [T]);
            var N = function() {
                window.addEventListener("keydown", R, !0)
            }
              , _ = function() {
                window.removeEventListener("keydown", R, !0)
            }
              , R = function(e) {
                var n;
                e.which !== x && e.keyCode !== x || ((null === (n = p.current) || void 0 === n ? void 0 : n.hasFocus()) || D(null))
            }
              , C = function() {
                return !K.isDesktop(s)
            }
              , D = function(e) {
                var n, l, s, o, r;
                e && e.preventDefault(),
                A() && Object(m.commitMutation)(c, {
                    mutation: gt,
                    variables: {
                        input: {
                            title: null === (n = v.current) || void 0 === n ? void 0 : n.getValue(),
                            description: null === (l = p.current) || void 0 === l ? void 0 : l.getValue(),
                            pollType: T,
                            maxScheduledDurationMins: null === (s = i.current) || void 0 === s ? void 0 : s.value,
                            pollStartTime: (null === (o = t.current) || void 0 === o ? void 0 : o.state.value.format("HH:mm:ss")) + "Z",
                            pollEndTime: (null === (r = a.current) || void 0 === r ? void 0 : r.state.value.format("HH:mm:ss")) + "Z",
                            pollDates: y,
                            timeZone: w.a.tz.guess()
                        }
                    },
                    onCompleted: function(e) {
                        var n = k ? e.createEvent.event.id : e.updateEvent.event.id;
                        b.trackEvent(At, Lt.CREATE_LETTUCE, C() ? Ft.CREATE_LETTUCE_BOTTOM_BAR : Ft.CREATE_LETTUCE_TOP_BAR, ue.hasSessionToken() ? 1 : 0),
                        bt.put(pt, vt.LETTUCES_CREATED, new ht(n)),
                        g.replace("/l/".concat(n))
                    },
                    onError: function(e) {
                        h.log(e)
                    }
                })
            }
              , A = function() {
                var e, n;
                return !!(null === (e = v.current) || void 0 === e ? void 0 : e.checkValid()) || (null === (n = v.current) || void 0 === n || n.setFocus(),
                !1)
            }
              , L = "create-event-type-box" + (0 === T ? " selected-box" : "")
              , F = "create-event-type-box" + (1 === T ? " selected-box" : "");
            return Object(Y.jsxs)("div", {
                id: "create-event-wrapper",
                children: [Object(Y.jsxs)("div", {
                    id: "create-event-title-wrapper",
                    className: "create-event-section",
                    children: [Object(Y.jsx)(Ae, {
                        id: "create-event-title",
                        type: "text",
                        name: "title",
                        placeholder: "Name your meeting",
                        ref: v,
                        value: f
                    }), Object(Y.jsx)("div", {
                        id: "create-event-create-button",
                        role: "button",
                        className: "button button-icon subsubheading icon-arrow-right-circle",
                        onClick: D,
                        children: k ? "Create" : "Save"
                    })]
                }), Object(Y.jsxs)("div", {
                    id: "create-event-description-wrapper",
                    className: "create-event-section",
                    children: [Object(Y.jsx)("div", {
                        className: "create-event-section-heading heading",
                        children: "What's your meeting about?"
                    }), Object(Y.jsx)(Ae, {
                        id: "create-event-description",
                        name: "description",
                        placeholder: "Product discussion on LettuceMeet vs. LettuceMeat",
                        value: j || "",
                        onFocusCallback: _,
                        onBlurCallback: N,
                        isTextArea: !0,
                        ref: p
                    })]
                }), Object(Y.jsxs)("div", {
                    id: "create-event-time-wrapper",
                    className: "create-event-section",
                    children: [Object(Y.jsx)("div", {
                        className: "create-event-section-heading heading",
                        children: "What times would you like to meet between?"
                    }), Object(Y.jsxs)("div", {
                        id: "create-event-time",
                        children: [Object(Y.jsx)(rt.a, {
                            ref: t,
                            use12Hours: !0,
                            allowEmpty: !1,
                            showMinute: !1,
                            showSecond: !1,
                            defaultValue: Ct
                        }), Object(Y.jsx)("div", {
                            id: "create-event-time-separator",
                            children: "to"
                        }), Object(Y.jsx)(rt.a, {
                            ref: a,
                            use12Hours: !0,
                            allowEmpty: !1,
                            showMinute: !1,
                            showSecond: !1,
                            defaultValue: Dt
                        }), Object(Y.jsx)("div", {
                            id: "create-event-timezone",
                            children: K.formatTimezone(w.a.tz.guess())
                        })]
                    })]
                }), Object(Y.jsxs)("div", {
                    id: "create-event-type-wrapper",
                    className: "create-event-section",
                    children: [Object(Y.jsx)("div", {
                        className: "create-event-section-heading heading",
                        children: "What type of meeting?"
                    }), Object(Y.jsxs)("div", {
                        id: "create-event-type-container",
                        className: "create-event-types-container",
                        children: [Object(Y.jsxs)("div", {
                            id: "create-event-type-group",
                            className: L,
                            onClick: function() {
                                S(0)
                            },
                            children: [Object(Y.jsx)("div", {
                                className: "create-event-type-title",
                                children: "Group"
                            }), Object(Y.jsx)(Ot, {
                                className: "create-event-svg marginTop"
                            }), Object(Y.jsx)("div", {
                                children: "For meetings with three or more people"
                            })]
                        }), Object(Y.jsxs)("div", {
                            id: "create-event-type-one",
                            className: F,
                            onClick: function() {
                                S(1)
                            },
                            children: [Object(Y.jsx)("div", {
                                className: "create-event-type-title",
                                children: "One on One"
                            }), Object(Y.jsx)("div", {
                                className: "create-event-type-beta",
                                children: "BETA"
                            }), Object(Y.jsx)(Rt, {
                                className: "create-event-svg"
                            }), Object(Y.jsx)("div", {
                                children: "For meetings with you and another person"
                            })]
                        })]
                    })]
                }), Object(Y.jsxs)("div", {
                    id: "create-event-advanced-wrapper",
                    className: "create-event-section",
                    children: [Object(Y.jsx)("div", {
                        className: "create-event-section-heading heading",
                        children: "Advanced Options"
                    }), Object(Y.jsxs)("div", {
                        id: "create-event-type-container",
                        className: "create-event-limit-container",
                        children: [Object(Y.jsx)("p", {
                            children: "Limit scheduled meeting time to:"
                        }), Object(Y.jsxs)("select", {
                            id: "create-event-type-limit",
                            ref: i,
                            onChange: function(e) {
                                return b.trackEvent(At, Lt.CREATE_LETTUCE, Ft.EVENT_LIMIT_CHANGE, e.target.value)
                            },
                            children: [Object(Y.jsx)("option", {
                                value: "0",
                                children: "None"
                            }), Object(Y.jsx)("option", {
                                value: "30",
                                children: "30 minutes"
                            }), Object(Y.jsx)("option", {
                                value: "60",
                                children: "1 hour"
                            }), Object(Y.jsx)("option", {
                                value: "90",
                                children: "1 hour 30 minutes"
                            }), Object(Y.jsx)("option", {
                                value: "120",
                                children: "2 hours"
                            }), Object(Y.jsx)("option", {
                                value: "150",
                                children: "2 hour 30 minutes"
                            }), Object(Y.jsx)("option", {
                                value: "180",
                                children: "3 hours"
                            })]
                        })]
                    })]
                })]
            })
        }, It = void 0 !== xt ? xt : xt = t(478), Mt = void 0 !== St ? St : St = t(479), Kt = Mt, Ut = void 0 !== Nt ? Nt : Nt = t(480), Bt = {
            CATEGORY: "Lettuce",
            ACTIONS: {
                EDIT_SUCCESS: "edit_success",
                EDIT_CANCEL: "edit_cancel",
                DELETE_PRESS: "delete_press",
                DELETE_CANCEL: "delete_cancel",
                DELETE_CONFIRM: "delete_confirm"
            },
            LABELS: {
                EDIT_LETTUCE_BOTTOM_BAR: "edit_lettuce_bb",
                EDIT_LETTUCE_TOP_BAR: "edit_lettuce_tb"
            }
        }, Vt = function(e) {
            var n, a = Object(o.useRef)(null), i = Object(o.useRef)(null), l = Object(o.useRef)(null), s = Object(o.useContext)(G), r = s.screenType, c = s.setBottomBarActions, u = Object(H.i)().id, d = Object(m.useRelayEnvironment)(), v = Object(o.useRef)(null), p = Object(o.useRef)(null), g = Object(H.g)(), f = Object(m.useLazyLoadQuery)(It, {
                id: u
            }), j = void 0 !== _t ? _t : _t = t(481), y = Object(m.useFragment)(j, f.event), k = Object(o.useRef)(null);
            if (Object(o.useEffect)((function() {
                if (null === y || void 0 === y)
                    return Object(Y.jsx)(Y.Fragment, {});
                var e;
                (c(W()),
                F()) || (null === (e = v.current) || void 0 === e || e.setFocus());
                return A(),
                K.setDocumentTitle("Edit - ".concat(T || (null === y || void 0 === y ? void 0 : y.title) || "Meeting")),
                b.setPage("/event/edit"),
                b.trackPageView(),
                function() {
                    L(),
                    b.setPage(null)
                }
            }
            ), []),
            null === y || void 0 === y)
                return g.push("/404"),
                Object(Y.jsx)(Y.Fragment, {});
            var E = function(e) {
                return K.convertEventToLocalTimezone(e)
            }(y)
              , T = E.title
              , w = E.description
              , _ = E.pollDates.map((function(e) {
                return be()(e).format("YYYY-MM-DD")
            }
            ))
              , R = be()(E.pollDates[0])
              , C = be()()
              , D = R < C ? R : C
              , A = function() {
                window.addEventListener("keydown", P, !0)
            }
              , L = function() {
                window.removeEventListener("keydown", P, !0)
            }
              , F = function() {
                return !K.isDesktop(r)
            }
              , P = function(e) {
                var n, t, a, i, l;
                switch (e.keyCode) {
                case x:
                    (null === (n = p.current) || void 0 === n ? void 0 : n.hasFocus()) || M(null);
                    break;
                case S:
                    ((null === (t = p.current) || void 0 === t ? void 0 : t.hasFocus()) || (null === (a = v.current) || void 0 === a ? void 0 : a.hasFocus())) && e.stopPropagation();
                    break;
                case N:
                    ((null === (i = p.current) || void 0 === i ? void 0 : i.hasFocus()) || (null === (l = v.current) || void 0 === l ? void 0 : l.hasFocus())) && e.stopPropagation()
                }
            }
              , I = function() {
                var e = null === y || void 0 === y ? void 0 : y.id;
                b.trackEvent(Bt.CATEGORY, Bt.ACTIONS.EDIT_CANCEL),
                g.replace("/l/".concat(e))
            }
              , M = function(e) {
                var n, t, s, o, r, c;
                e && e.preventDefault(),
                V() && Object(m.commitMutation)(d, {
                    mutation: Kt,
                    variables: {
                        input: {
                            id: null === y || void 0 === y ? void 0 : y.id,
                            title: null === (n = v.current) || void 0 === n ? void 0 : n.getValue(),
                            description: null === (t = p.current) || void 0 === t ? void 0 : t.getValue(),
                            maxScheduledDurationMins: null === (s = l.current) || void 0 === s ? void 0 : s.value,
                            pollStartTime: (null === (o = a.current) || void 0 === o ? void 0 : o.state.value.format("HH:mm:ss")) + "Z",
                            pollEndTime: (null === (r = i.current) || void 0 === r ? void 0 : r.state.value.format("HH:mm:ss")) + "Z",
                            pollDates: Array.from(null === (c = k.current) || void 0 === c ? void 0 : c.selectedDates).map((function(e) {
                                return be()(e).format("YYYY-MM-DD")
                            }
                            )),
                            timeZone: be.a.tz.guess()
                        }
                    },
                    onCompleted: function(e) {
                        b.trackEvent(Bt.CATEGORY, Bt.ACTIONS.EDIT_SUCCESS, F() ? Bt.LABELS.EDIT_LETTUCE_BOTTOM_BAR : Bt.LABELS.EDIT_LETTUCE_TOP_BAR, ue.hasSessionToken() ? 1 : 0),
                        g.replace("/l/".concat(e.updateEvent.event.id))
                    },
                    onError: function(e) {
                        var n, t = "", a = null === e || void 0 === e || null === (n = e.res) || void 0 === n ? void 0 : n.errors;
                        t = function(e) {
                            if ("undefined" === typeof e || !e)
                                return !1;
                            if (!e.res || !e.res.errors || 0 === e.res.errors.length)
                                return !1;
                            var n, t = Object(O.a)(e.res.errors);
                            try {
                                for (t.s(); !(n = t.n()).done; )
                                    if ("pollDates cannot be empty" === n.value.message)
                                        return !0
                            } catch (e) {
                                t.e(e)
                            } finally {
                                t.f()
                            }
                            return !1
                        }(a && a[0]) ? "Please select at least one date to meet on." : "Something went wrong updating your meeting.",
                        h.log(e),
                        Object(z.b)(t, {
                            position: z.b.POSITION.BOTTOM_CENTER,
                            autoClose: 3e3,
                            hideProgressBar: !0,
                            className: "error-toast"
                        })
                    }
                })
            }
              , U = function() {
                b.trackEvent(Bt.CATEGORY, Bt.ACTIONS.DELETE_CONFIRM),
                null,
                Object(m.commitMutation)(d, {
                    mutation: Ut,
                    variables: {
                        input: {
                            id: null === y || void 0 === y ? void 0 : y.id
                        }
                    },
                    onCompleted: function(e) {
                        Object(z.b)("Meeting successfully deleted!", {
                            position: z.b.POSITION.BOTTOM_CENTER,
                            autoClose: 2e3,
                            hideProgressBar: !0,
                            className: "success-toast"
                        }),
                        g.push("/me")
                    },
                    onError: function(e) {
                        h.log(e),
                        Object(z.b)("Something went wrong deleting your meeting.", {
                            position: z.b.POSITION.BOTTOM_CENTER,
                            autoClose: 3e3,
                            hideProgressBar: !0,
                            className: "error-toast"
                        })
                    }
                })
            }
              , B = function(e) {
                b.trackEvent(Bt.CATEGORY, Bt.ACTIONS.DELETE_CANCEL),
                null
            }
              , V = function() {
                var e;
                return !!(null === (e = v.current) || void 0 === e ? void 0 : e.checkValid())
            }
              , W = function() {
                var e = [];
                return e.push(new Oe(ge,"Cancel",I)),
                e.push(new Oe(fe,"Save",M,"check")),
                e
            };
            return Object(Y.jsxs)("div", {
                id: "create-event-wrapper",
                children: [Object(Y.jsxs)("div", {
                    id: "create-event-title-wrapper",
                    className: "create-event-section",
                    children: [Object(Y.jsx)(Ae, {
                        id: "create-event-title",
                        type: "text",
                        name: "title",
                        placeholder: "Name your meeting",
                        ref: v,
                        value: T
                    }), Object(Y.jsxs)("div", {
                        id: "edit-event-buttons-wrapper",
                        className: "event-buttons-wrapper",
                        children: [Object(Y.jsx)("div", {
                            id: "edit-event-delete-button",
                            role: "button",
                            className: "event-buttons button button-red button-icon button-icon-only subsubheading icon-trash",
                            onClick: function(e) {
                                b.trackEvent(Bt.CATEGORY, Bt.ACTIONS.DELETE_PRESS);
                                var n = new qn("Delete meeting?","Are you sure you want to delete this meeting? This action cannot be undone.",[new Zn(Hn,"Cancel",B), new Zn(Wn,"Delete",U)],!0,B);
                                new Qn(n)
                            },
                            children: Object(Y.jsx)("span", {
                                role: "button",
                                className: "button-text",
                                children: "Delete"
                            })
                        }), !F() && Object(Y.jsx)("div", {
                            id: "edit-event-cancel-button",
                            className: "event-buttons button button-icon subsubheading icon-close",
                            onClick: I,
                            children: "Cancel"
                        }), !F() && Object(Y.jsx)("div", {
                            id: "edit-event-update-button",
                            className: "event-buttons button button-green button-icon subsubheading icon-check",
                            onClick: M,
                            children: "Save"
                        })]
                    })]
                }), Object(Y.jsxs)("div", {
                    id: "create-event-description-wrapper",
                    className: "create-event-section",
                    children: [Object(Y.jsx)("div", {
                        className: "create-event-section-heading heading",
                        children: "What's your meeting about?"
                    }), Object(Y.jsx)(Ae, {
                        id: "create-event-description",
                        name: "description",
                        placeholder: "Product discussion on LettuceMeet vs. Doodle",
                        value: w || "",
                        onFocusCallback: L,
                        onBlurCallback: A,
                        isTextArea: !0,
                        ref: p
                    })]
                }), Object(Y.jsxs)("div", {
                    id: "create-event-date-wrapper",
                    className: "create-event-section",
                    children: [Object(Y.jsx)("div", {
                        className: "create-event-section-heading heading",
                        children: "What days would you like to meet on?"
                    }), Object(Y.jsx)(_n, {
                        ref: k,
                        startDate: D.format("YYYY-MM-DD"),
                        selectedDates: _,
                        onSelectCallback: function(e) {}
                    })]
                }), Object(Y.jsxs)("div", {
                    id: "create-event-time-wrapper",
                    className: "create-event-section",
                    children: [Object(Y.jsx)("div", {
                        className: "create-event-section-heading heading",
                        children: "What times would you like to meet between?"
                    }), Object(Y.jsxs)("div", {
                        id: "create-event-time",
                        children: [Object(Y.jsx)(rt.a, {
                            ref: a,
                            use12Hours: !0,
                            allowEmpty: !1,
                            showMinute: !1,
                            showSecond: !1,
                            defaultValue: be.a.utc(E.pollStartTime, "HH:mm:ssZ")
                        }), Object(Y.jsx)("div", {
                            id: "create-event-time-separator",
                            children: "to"
                        }), Object(Y.jsx)(rt.a, {
                            ref: i,
                            use12Hours: !0,
                            allowEmpty: !1,
                            showMinute: !1,
                            showSecond: !1,
                            defaultValue: be.a.utc(E.pollEndTime, "HH:mm:ssZ")
                        }), Object(Y.jsx)("div", {
                            id: "create-event-timezone",
                            children: K.formatTimezone(be.a.tz.guess())
                        })]
                    })]
                }), Object(Y.jsxs)("div", {
                    id: "create-event-advanced-wrapper",
                    className: "create-event-section",
                    children: [Object(Y.jsxs)("div", {
                        id: "create-event-bottom-wrapper",
                        children: [Object(Y.jsx)("div", {
                            className: "create-event-section-heading heading",
                            children: "Advanced Options"
                        }), Object(Y.jsx)("div", {
                            id: "create-event-create-button",
                            role: "button",
                            className: "button button-icon subsubheading icon-arrow-right-circle",
                            onClick: M,
                            children: "Save"
                        })]
                    }), Object(Y.jsxs)("div", {
                        id: "create-event-type-container",
                        className: "create-event-limit-container",
                        children: [Object(Y.jsx)("p", {
                            id: "create-event-type-group",
                            children: "Limit scheduled meeting time to:"
                        }), Object(Y.jsxs)("select", {
                            id: "create-event-type-limit",
                            ref: l,
                            defaultValue: null !== (n = E.maxScheduledDurationMins) && void 0 !== n ? n : 0,
                            onChange: function(e) {
                                return b.trackEvent(Bt.CATEGORY, Bt.ACTIONS.CREATE_LETTUCE, Bt.LABELS.EVENT_LIMIT_CHANGE, e.target.value)
                            },
                            children: [Object(Y.jsx)("option", {
                                value: "0",
                                children: "None"
                            }), Object(Y.jsx)("option", {
                                value: "30",
                                children: "30 minutes"
                            }), Object(Y.jsx)("option", {
                                value: "60",
                                children: "1 hour"
                            }), Object(Y.jsx)("option", {
                                value: "90",
                                children: "1 hour 30 minutes"
                            }), Object(Y.jsx)("option", {
                                value: "120",
                                children: "2 hours"
                            }), Object(Y.jsx)("option", {
                                value: "150",
                                children: "2 hour 30 minutes"
                            }), Object(Y.jsx)("option", {
                                value: "180",
                                children: "3 hours"
                            })]
                        })]
                    })]
                })]
            })
        }, Gt = t(230), Wt = t.n(Gt), Ht = (t(483),
        "guest"), zt = "login", Yt = Object(o.forwardRef)((function(e, n) {
            var t = Object(m.useRelayEnvironment)()
              , a = Object(o.useState)(Ht)
              , i = Object(d.a)(a, 2)
              , l = i[0]
              , s = i[1]
              , r = Object(o.useRef)(null)
              , c = Object(o.useRef)(null)
              , u = Object(o.useRef)(null);
            Object(o.useImperativeHandle)(n, (function() {
                return {
                    showErrors: function(e) {
                        var n, t;
                        e.hasOwnProperty("email") && (null === (n = c.current) || void 0 === n || n.showError(e.email));
                        e.hasOwnProperty("password") && (null === (t = u.current) || void 0 === t || t.showError(e.password))
                    }
                }
            }
            )),
            Object(o.useEffect)((function() {
                return window.addEventListener("keydown", p, !0),
                function() {
                    window.removeEventListener("keydown", p, !0)
                }
            }
            ), []),
            Object(o.useEffect)((function() {
                var n;
                if (e.setBottomBarActions(S()),
                !v())
                    if (l === Ht)
                        null === (n = r.current) || void 0 === n || n.setFocus();
                    else if (l === zt) {
                        var t;
                        null === (t = c.current) || void 0 === t || t.setFocus()
                    }
            }
            ), [l]);
            var v = function() {
                return !K.isDesktop(e.screenType)
            }
              , p = function(e) {
                e.which !== x && e.keyCode !== x || j(null)
            }
              , b = function() {
                s(Ht)
            }
              , g = function() {
                s(zt)
            }
              , f = function() {
                e.onClose && e.onClose()
            }
              , j = function() {
                switch (l) {
                case Ht:
                    y();
                    break;
                case zt:
                    k()
                }
            }
              , y = function(n) {
                var t, a;
                if (n && n.preventDefault(),
                O()) {
                    var i = null === (t = r.current) || void 0 === t ? void 0 : t.getValue()
                      , l = null === (a = c.current) || void 0 === a ? void 0 : a.getValue();
                    e.onGuest && e.onGuest({
                        name: i,
                        email: l
                    })
                }
            }
              , k = function(n) {
                var a, i;
                n && n.preventDefault(),
                E() && Object(m.commitMutation)(t, {
                    mutation: Re,
                    variables: {
                        input: {
                            email: null === (a = c.current) || void 0 === a ? void 0 : a.getValue(),
                            password: null === (i = u.current) || void 0 === i ? void 0 : i.getValue()
                        }
                    },
                    onCompleted: function(n) {
                        ue.setSessionToken(n.getToken.authToken),
                        e.resetRelayEnv(),
                        h.log("auth token: '".concat(n.getToken.authToken, "'")),
                        e.onLogin && e.onLogin()
                    },
                    onError: function(e) {
                        var n, t;
                        ue.clearSessionToken(),
                        h.log(e),
                        null === (n = c.current) || void 0 === n || n.showError("Invalid Email Address and/or Password!"),
                        null === (t = u.current) || void 0 === t || t.showError("Invalid Email Address and/or Password!")
                    }
                })
            }
              , O = function() {
                var e, n;
                return !!(null === (e = r.current) || void 0 === e ? void 0 : e.checkValid()) && !!(null === (n = c.current) || void 0 === n ? void 0 : n.checkValid())
            }
              , E = function() {
                var e, n;
                return !!(null === (e = c.current) || void 0 === e ? void 0 : e.checkValid()) && !!(null === (n = u.current) || void 0 === n ? void 0 : n.checkValid())
            }
              , T = function() {
                if (!v())
                    return Object(Y.jsxs)("div", {
                        id: "signup-footer",
                        className: "info-row info-footer",
                        children: [Object(Y.jsx)("div", {
                            id: "signin-forgot",
                            className: "link",
                            onClick: g,
                            children: "Already have an account?"
                        }), Object(Y.jsx)("div", {
                            id: "signup-footer-button",
                            role: "button",
                            className: "button button-green button-icon subsubheading icon-arrow-right-circle",
                            onClick: y,
                            children: "Continue"
                        })]
                    })
            }
              , w = function() {
                if (!v())
                    return Object(Y.jsxs)("div", {
                        id: "signup-footer",
                        className: "info-row info-footer",
                        children: [Object(Y.jsx)("div", {
                            id: "signin-forgot",
                            className: "link",
                            onClick: b,
                            children: "Continue as guest?"
                        }), Object(Y.jsx)("div", {
                            id: "signup-footer-button",
                            role: "button",
                            className: "button button-icon subsubheading icon-arrow-right-circle",
                            onClick: k,
                            children: "Log in"
                        })]
                    })
            }
              , S = function() {
                var e = [];
                switch (l) {
                case zt:
                    e.push(new Oe(ge,"Continue as guest?",b), new Oe(fe,"Log in",k));
                    break;
                case Ht:
                    e.push(new Oe(ge,"Have an account?",g), new Oe(fe,"Continue",y))
                }
                return e
            };
            return Object(Y.jsxs)("div", {
                id: "signin-wrapper",
                className: "signin-wrapper",
                children: [function() {
                    if (l === zt)
                        return Object(Y.jsxs)("div", {
                            className: "signin-content",
                            children: [Object(Y.jsxs)("div", {
                                className: "info-row info-header",
                                children: [Object(Y.jsx)("div", {
                                    className: "info-row heading",
                                    children: "Log in"
                                }), Object(Y.jsx)("div", {
                                    id: "close-button",
                                    role: "button",
                                    className: "button button-icon subsubheading icon-close",
                                    onClick: f,
                                    children: "Close"
                                })]
                            }), Object(Y.jsxs)("div", {
                                className: "info-row",
                                children: [Object(Y.jsx)("div", {
                                    className: "info-title subheading",
                                    children: "Email address"
                                }), Object(Y.jsx)(Ae, {
                                    id: "signin-email",
                                    className: "subheading",
                                    type: "email",
                                    placeholder: "What's your email address?",
                                    ref: c
                                })]
                            }), Object(Y.jsxs)("div", {
                                className: "info-row",
                                children: [Object(Y.jsx)("div", {
                                    className: "info-title subheading",
                                    children: "Password"
                                }), Object(Y.jsx)(Ae, {
                                    id: "signin-password",
                                    className: "subheading",
                                    type: "password",
                                    placeholder: "What's your password?",
                                    ref: u
                                })]
                            }), w()]
                        })
                }(), function() {
                    if (l === Ht) {
                        var n = 0 === e.eventType ? " (optional)" : ""
                          , t = "Email address" + n
                          , a = 1 === e.eventType ? "one-on-one" : "group";
                        "".concat(0 === e.eventType ? "info-title" : "", " subheading");
                        return Object(Y.jsxs)("div", {
                            className: "signin-content " + a,
                            children: [Object(Y.jsxs)("div", {
                                className: "info-row info-header",
                                children: [Object(Y.jsx)("div", {
                                    className: "info-row heading",
                                    children: "Continue as Guest"
                                }), Object(Y.jsx)("div", {
                                    id: "close-button",
                                    role: "button",
                                    className: "button button-icon subsubheading icon-close",
                                    onClick: f,
                                    children: "Close"
                                })]
                            }), Object(Y.jsxs)("div", {
                                className: "info-row",
                                children: [Object(Y.jsx)("div", {
                                    className: "info-title subheading",
                                    children: "Name"
                                }), Object(Y.jsx)(Ae, {
                                    id: "signin-email",
                                    className: "subheading",
                                    type: "text",
                                    placeholder: "What's your name?",
                                    ref: r
                                })]
                            }), Object(Y.jsxs)("div", {
                                className: "info-row",
                                children: [Object(Y.jsx)("div", {
                                    className: "email-title",
                                    children: t
                                }), Object(Y.jsx)(Ae, {
                                    id: "signin-email",
                                    className: "subheading",
                                    type: "email",
                                    placeholder: "What's your email address?" + n,
                                    optional: 0 === e.eventType,
                                    ref: c
                                }), Object(Y.jsx)("div", {
                                    className: "email-info",
                                    children: "Your email will only be used to update you for this meeting."
                                })]
                            }), T()]
                        })
                    }
                }()]
            })
        }
        ));
        Yt.defaultProps = {
            handleResize: !0,
            eventType: 0
        };
        var qt = Yt
          , Zt = (t(484),
        "slot");
        function $t(e) {
            return null === e ? "slot-" : "slot-" + e.toString()
        }
        var Qt = function(e) {
            Object(gn.a)(t, e);
            var n = Object(fn.a)(t);
            function t(e) {
                var a;
                return Object(v.a)(this, t),
                (a = n.call(this, e)).handleTouchMove = a.handleTouchMove.bind(Object(bn.a)(a)),
                a.handleMouseUpDocument = a.handleMouseUpDocument.bind(Object(bn.a)(a)),
                a.handleMouseLeave = a.handleMouseLeave.bind(Object(bn.a)(a)),
                a.currSelected = null,
                a.hasNextPage = !1,
                a.state = a.initialState(e),
                a.dispatch = e.dispatch,
                a
            }
            return Object(p.a)(t, [{
                key: "initialState",
                value: function(e) {
                    var n = K.hoursInPoll(e.startTime, e.endTime) * e.blocksPerHour
                      , a = e.dates.sort(K.sortAsc)
                      , i = t.groupDates(a)
                      , l = 0;
                    this.state && this.state.groups.length === i.length && (l = this.state.page),
                    this.state && this.state.groups.length === i.length && this.state.page === l || (this.hasNextPage = i.length > 1,
                    this.props.hasNextPageCallback(this.hasNextPage));
                    var s = null
                      , o = null
                      , r = e.editSelection;
                    null !== r || f.a.isEmpty(e.availabilities) || (s = t.sumAvailabilities(e.availabilities),
                    o = K.getMaxFromArray(s));
                    var c = t.processEvents(e.events, a, e.startTime, e.endTime);
                    this.lockSelectedPos = !1;
                    var u = r || new Array(a.length * n).fill(0);
                    return this.currSelected = K.availabilitiesToRanges(u.slice(0), a, this.props.startTime, this.props.endTime, this.props.blocksPerHour),
                    this.props.callback(this.currSelected),
                    {
                        savedSelection: u,
                        liveSelection: u,
                        page: l,
                        start: null,
                        value: null,
                        numRows: n,
                        dates: a,
                        groups: i,
                        availabilities: s,
                        maxAvailable: o,
                        selectedPos: null,
                        eventsByPos: t.eventsByPos(c, a, e.startTime, e.endTime, e.blocksPerHour)
                    }
                }
            }, {
                key: "componentWillReceiveProps",
                value: function(e) {
                    f.a.isEqual(this.props.availabilities, e.availabilities) && f.a.isEqual(this.props.events, e.events) ? this.props.mode !== e.mode && e.mode !== ra.LOGIN && this.props.mode !== ra.LOGIN && this.setState({
                        savedSelection: new Array(e.dates.length * this.state.numRows).fill(0),
                        liveSelection: new Array(e.dates.length * this.state.numRows).fill(0),
                        start: null,
                        value: null
                    }) : this.setState(this.initialState(e))
                }
            }, {
                key: "getBgColor",
                value: function(e) {
                    var n = "rgba(51, 204, 102, " + this.getOpacity(e) + ")";
                    if (null === this.state.availabilities) {
                        if (this.state.liveSelection[e] > 0)
                            return n
                    } else {
                        if (this.state.liveSelection[e] > 0)
                            return "rgb(238, 175, 238)";
                        if (this.state.availabilities[e] > 0)
                            return n
                    }
                    return "transparent"
                }
            }, {
                key: "getOpacity",
                value: function(e) {
                    return null === this.state.availabilities || this.state.liveSelection[e] > 0 ? .5 : this.state.availabilities[e] / this.state.maxAvailable * .9
                }
            }, {
                key: "getRowCol",
                value: function(e) {
                    return [e % this.state.numRows, Math.floor(e / this.state.numRows)]
                }
            }, {
                key: "getPos",
                value: function(e, n) {
                    return n * this.state.numRows + e
                }
            }, {
                key: "handleChangePage",
                value: function(e) {
                    this.hasNextPage = e < this.state.groups.length - 1,
                    e < this.state.groups.length && e >= 0 && (this.props.hasNextPageCallback(this.hasNextPage),
                    this.setState({
                        page: e
                    }))
                }
            }, {
                key: "handleNextPage",
                value: function() {
                    this.handleChangePage(this.state.page + 1)
                }
            }, {
                key: "handlePrevPage",
                value: function() {
                    this.handleChangePage(this.state.page - 1)
                }
            }, {
                key: "respondentIdsAtPos",
                value: function(e) {
                    if (!this.props.availabilities || null === e)
                        return null;
                    for (var n = new Set, t = 0, a = Object.keys(this.props.availabilities); t < a.length; t++) {
                        var i = a[t];
                        this.props.availabilities[i][e] > 0 && n.add(i)
                    }
                    return n
                }
            }, {
                key: "hover",
                value: function(e) {
                    this.lockSelectedPos || (this.props.hoverCallback(this.respondentIdsAtPos(e)),
                    this.setState({
                        selectedPos: e
                    }))
                }
            }, {
                key: "click",
                value: function(e) {
                    this.props.onMouseDown && this.props.onMouseDown(),
                    this.lockSelectedPos ? this.state.selectedPos === e && (e = null,
                    this.lockSelectedPos = !1) : this.lockSelectedPos = !0,
                    this.props.hoverCallback(this.respondentIdsAtPos(e)),
                    this.setState({
                        selectedPos: e
                    })
                }
            }, {
                key: "handleDragStart",
                value: function(e) {
                    var n = this.getRowCol(e)
                      , t = Object(d.a)(n, 2)
                      , a = t[0]
                      , i = t[1]
                      , l = this.state.savedSelection;
                    null !== this.props.availabilities && (l = new Array(this.state.dates.length * this.state.numRows).fill(0));
                    var s = 1 - l[e]
                      , o = l.slice(0);
                    (this.props.canScheduleOnEmptyAvailablities || 0 !== this.state.availabilities[e]) && (o[e] = s),
                    this.setState({
                        start: [a, i],
                        value: s,
                        liveSelection: o,
                        savedSelection: l
                    })
                }
            }, {
                key: "handleDragMove",
                value: function(e) {
                    if (null !== this.state.start && null !== e) {
                        var n = this.getRowCol(e)
                          , t = Object(d.a)(n, 2)
                          , a = t[0]
                          , i = t[1];
                        null !== this.props.availabilities && (i = this.state.start[1]);
                        var l = this.state.start[0]
                          , s = a;
                        if (this.props.mode == ra.SCHEDULING) {
                            var o = null;
                            if (!this.props.canScheduleOnEmptyAvailablities) {
                                o = new Array(this.state.numRows);
                                for (var r = 0; r < o.length; r++)
                                    o[r] = this.state.availabilities[this.getPos(r, i)]
                            }
                            var c = null;
                            this.props.maxScheduledMinutes && (c = Math.floor(this.props.maxScheduledMinutes / 60 * this.props.blocksPerHour),
                            Math.abs(s - l) > c ? this.dispatch({
                                type: "twerkScheduleLimit"
                            }) : this.dispatch({
                                type: "stopTwerkScheduleLimit"
                            }));
                            var u = K.firstContiguousSection(l, s, o, c)
                              , m = Object(d.a)(u, 2);
                            l = m[0],
                            s = m[1]
                        }
                        if (null !== l && null !== s) {
                            for (var v = this.state.savedSelection.slice(0), p = [l, s].sort(K.sortAsc), h = Object(d.a)(p, 2), b = h[0], g = h[1], f = [this.state.start[1], i].sort(K.sortAsc), j = Object(d.a)(f, 2), y = j[0], k = j[1], O = b; O <= g; O++)
                                for (var E = y; E <= k; E++) {
                                    v[this.getPos(O, E)] = this.state.value
                                }
                            this.setState({
                                liveSelection: v
                            })
                        }
                    }
                }
            }, {
                key: "handleDragEnd",
                value: function(e) {
                    null !== this.state.start && (this.setState({
                        savedSelection: this.state.liveSelection.slice(0),
                        start: null,
                        value: null
                    }),
                    this.currSelected = K.availabilitiesToRanges(this.state.liveSelection.slice(0), this.state.dates, this.props.startTime, this.props.endTime, this.props.blocksPerHour),
                    this.props.callback(this.currSelected))
                }
            }, {
                key: "handleMouseDown",
                value: function(e) {
                    ra.isView(this.props.mode) || this.handleDragStart(e)
                }
            }, {
                key: "handleMouseEnter",
                value: function(e) {
                    ra.isView(this.props.mode) ? this.hover(e) : this.handleDragMove(e)
                }
            }, {
                key: "handleMouseUp",
                value: function(e, n) {
                    n.stopPropagation(),
                    n.nativeEvent && n.nativeEvent.stopImmediatePropagation(),
                    ra.isView(this.props.mode) ? this.click(e) : this.handleDragEnd(e)
                }
            }, {
                key: "handleMouseUpDocument",
                value: function(e) {
                    ra.isView(this.props.mode) || this.handleDragEnd(null)
                }
            }, {
                key: "handleTouchStart",
                value: function(e, n) {
                    this.handleMouseDown(e)
                }
            }, {
                key: "handleTouchMove",
                value: function(e) {
                    if (!ra.isView(this.props.mode)) {
                        e.target.className === Zt && e.preventDefault();
                        var n = t.posOfEvent(e);
                        this.handleDragMove(n)
                    }
                }
            }, {
                key: "handleTouchEnd",
                value: function(e, n) {
                    if (!ra.isView(this.props.mode)) {
                        var a = t.posOfEvent(n);
                        this.handleDragEnd(a),
                        n.preventDefault()
                    }
                }
            }, {
                key: "handleMouseLeave",
                value: function(e) {
                    ra.isView(this.props.mode) ? this.hover(null) : this.handleDragMove(null)
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    this.grid.addEventListener("touchmove", this.handleTouchMove, {
                        passive: !1
                    }),
                    window.addEventListener("mouseup", this.handleMouseUpDocument)
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.grid.removeEventListener("touchmove", this.handleTouchMove, {
                        passive: !1
                    }),
                    window.removeEventListener("mouseup", this.handleMouseUpDocument)
                }
            }, {
                key: "renderEvents",
                value: function(e) {
                    var n = this;
                    if (!this.state.eventsByPos || !this.state.eventsByPos[e])
                        return null;
                    var t = this.props.eventsOnTop ? 3 : 1;
                    return this.state.eventsByPos[e].map((function(a) {
                        var i = a.start.minutes() / 60
                          , l = a.end.diff(a.start, "minutes") / 60
                          , s = a.posInGroup / a.groupSize
                          , o = 1 / a.groupSize;
                        return n.props.eventsOnTop && (s += .1,
                        o -= .2),
                        Object(Y.jsx)("div", {
                            className: "event",
                            style: {
                                height: K.toPercentString(l),
                                width: K.toPercentString(o),
                                top: K.toPercentString(i),
                                left: K.toPercentString(s),
                                zIndex: t
                            },
                            children: a.title
                        }, "event-" + e + "-" + s)
                    }
                    ))
                }
            }, {
                key: "renderSlot",
                value: function(e) {
                    var n = this
                      , t = !f.a.isEmpty(this.props.availabilities) && this.state.selectedPos === e;
                    return Object(Y.jsx)("div", {
                        id: $t(e),
                        className: Zt + (t ? " selected" : ""),
                        style: {
                            backgroundColor: this.getBgColor(e)
                        },
                        onMouseDown: function() {
                            return n.handleMouseDown(e)
                        },
                        onTouchStart: function(t) {
                            return n.handleTouchStart(e, t)
                        },
                        onMouseUp: function(t) {
                            return n.handleMouseUp(e, t)
                        },
                        onTouchEnd: function(t) {
                            return n.handleTouchEnd(e, t)
                        },
                        onMouseEnter: function() {
                            return n.handleMouseEnter(e)
                        }
                    }, e.toString())
                }
            }, {
                key: "renderSlotGroup",
                value: function(e, n) {
                    for (var t = [], a = e; a < e + this.props.blocksPerHour; a++)
                        t.push(this.renderSlot(this.getPos(a, n))),
                        t.push(this.renderEvents(this.getPos(a, n)));
                    var i = this.getPos(e, n);
                    return Object(Y.jsx)("div", {
                        className: "slotGroup",
                        children: t
                    }, i.toString())
                }
            }, {
                key: "renderCol",
                value: function(e) {
                    for (var n = [], t = 0; t < this.state.numRows; t += this.props.blocksPerHour)
                        n.push(this.renderSlotGroup(t, e));
                    var a = be.a.utc(this.state.dates[e])
                      , i = ra.isView(this.props.mode) ? "slots" : "slots slots-edit";
                    return Object(Y.jsxs)("div", {
                        className: "col",
                        children: [Object(Y.jsxs)("div", {
                            className: "header",
                            children: [Object(Y.jsx)("span", {
                                className: "day-of-week",
                                children: a.format("ddd")
                            }), Object(Y.jsx)("span", {
                                className: "day",
                                children: a.format("D")
                            })]
                        }), Object(Y.jsx)("div", {
                            className: i,
                            children: n
                        })]
                    }, e.toString())
                }
            }, {
                key: "renderTimeSlot",
                value: function(e) {
                    var n = "";
                    return e % this.props.blocksPerHour === 0 && (n = be()().hours(this.props.startTime + e / this.props.blocksPerHour).format("h a")),
                    Object(Y.jsx)("div", {
                        className: "timeSlot",
                        children: n
                    }, e.toString())
                }
            }, {
                key: "renderTimeGroup",
                value: function(e) {
                    for (var n = [], t = e; t < e + this.props.blocksPerHour; t++)
                        n.push(this.renderTimeSlot(t));
                    return Object(Y.jsx)("div", {
                        className: "timeGroup",
                        children: n
                    }, e.toString())
                }
            }, {
                key: "renderTimeCol",
                value: function() {
                    for (var e = [], n = 0; n < this.state.numRows; n += this.props.blocksPerHour)
                        e.push(this.renderTimeGroup(n));
                    var t = this.props.timezone ? K.formatTimezone(this.props.timezone) : null;
                    return Object(Y.jsxs)("div", {
                        className: "time-col",
                        children: [Object(Y.jsx)("div", {
                            className: "header timezone",
                            children: t
                        }), e]
                    })
                }
            }, {
                key: "render",
                value: function() {
                    for (var e = this, n = [], t = this.state.groups[this.state.page][0]; t < this.state.groups[this.state.page][1]; t++)
                        n.push(this.renderCol(t));
                    var a = this.state.dates[this.state.groups[this.state.page][0]]
                      , i = this.state.dates[this.state.groups[this.state.page][1] - 1]
                      , l = a.format("MMM Y");
                    a.month() !== i.month() && (l = a.format("MMM Y") + " - " + i.format("MMM Y"));
                    var s = 0 === this.state.page ? "invisible" : ""
                      , o = this.state.page === this.state.groups.length - 1 ? "invisible" : "";
                    return Object(Y.jsxs)("div", {
                        className: "ac-container ac-mode-" + this.props.mode,
                        children: [Object(Y.jsx)("div", {
                            id: "time-picker-prev-window",
                            className: "timepicker-nav" + s,
                            onClick: this.handlePrevPage.bind(this)
                        }), Object(Y.jsxs)("div", {
                            className: "calendar",
                            children: [Object(Y.jsx)("div", {
                                className: "month-header",
                                children: l
                            }), this.renderTimeCol(), Object(Y.jsx)("div", {
                                ref: function(n) {
                                    return e.grid = n
                                },
                                className: "ac-grid",
                                onMouseLeave: this.handleMouseLeave,
                                children: n
                            }), this.props.timezone && Object(Y.jsxs)("span", {
                                className: "timezone-text",
                                children: ["Shown in local time (", K.formatTimezone(this.props.timezone), ")"]
                            })]
                        }), Object(Y.jsx)("div", {
                            id: "time-picker-next-window",
                            className: "timepicker-nav" + o,
                            onClick: this.handleNextPage.bind(this)
                        })]
                    })
                }
            }], [{
                key: "processEvents",
                value: function(e, n, a, i) {
                    if (!e)
                        return null;
                    var l = K.hoursInPoll(a, i)
                      , s = n[0].clone().hours(a)
                      , o = n[n.length - 1].clone().hours(a).add(l, "hours")
                      , r = e.flatMap((function(e) {
                        return K.split(e, a, i)
                    }
                    )).filter((function(e) {
                        return e.start.isBefore(e.end) && e.start.isSameOrAfter(s) && e.end.isSameOrBefore(o)
                    }
                    )).sort(t.eventSortFunc);
                    return t.groupEvents(r).forEach((function(e) {
                        e.forEach((function(n, t) {
                            n.groupSize = e.length,
                            n.posInGroup = t
                        }
                        ))
                    }
                    )),
                    r
                }
            }, {
                key: "eventSortFunc",
                value: function(e, n) {
                    var t = e.start.diff(n.start);
                    return 0 === t ? n.end.diff(e.end) : t
                }
            }, {
                key: "groupEvents",
                value: function(e) {
                    var n, t = [], a = null, i = Object(O.a)(e);
                    try {
                        for (i.s(); !(n = i.n()).done; ) {
                            var l = n.value;
                            null === a || l.start.isSameOrAfter(a) ? (t.push([l]),
                            a = l.end) : t[t.length - 1].push(l)
                        }
                    } catch (s) {
                        i.e(s)
                    } finally {
                        i.f()
                    }
                    return t
                }
            }, {
                key: "eventsByPos",
                value: function(e, n, t, a, i) {
                    if (!e)
                        return null;
                    var l, s = {}, o = Object(O.a)(e);
                    try {
                        for (o.s(); !(l = o.n()).done; ) {
                            var r = l.value
                              , c = K.getBlock(r.start, n, t, a, i, !1);
                            s[c] || (s[c] = []),
                            s[c].push(r)
                        }
                    } catch (u) {
                        o.e(u)
                    } finally {
                        o.f()
                    }
                    return s
                }
            }, {
                key: "sumAvailabilities",
                value: function(e) {
                    var n = Object.values(e)[0].length;
                    return Object.values(e).reduce((function(e, n) {
                        return K.sumArrays(e, n)
                    }
                    ), new Array(n).fill(0))
                }
            }, {
                key: "groupDates",
                value: function(e) {
                    for (var n = [], t = 0; t < e.length; t += 7)
                        n.push([t, Math.min(t + 7, e.length)]);
                    return n
                }
            }, {
                key: "posOfEvent",
                value: function(e) {
                    var n, t = document.elementFromPoint(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
                    return t ? (n = t.id).startsWith($t(null)) ? parseInt(n.substring($t(null).length)) : null : null
                }
            }]),
            t
        }(r.a.Component);
        Qt.defaultProps = {
            availabilities: null,
            blocksPerHour: 2,
            startTime: 9,
            endTime: 18,
            timezone: "UTC+00",
            dates: [be.a.utc("2017-11-31"), be.a.utc("2018-01-01"), be.a.utc("2018-01-02"), be.a.utc("2018-01-03"), be.a.utc("2018-01-04"), be.a.utc("2018-01-05"), be.a.utc("2018-01-06"), be.a.utc("2018-01-07"), be.a.utc("2018-01-08"), be.a.utc("2018-01-09")],
            user: null,
            callback: function() {},
            hoverCallback: function() {},
            hasNextPageCallback: function() {},
            events: [],
            eventsOnTop: !1,
            canScheduleOnEmptyAvailablities: !0,
            maxScheduledMinutes: null
        };
        var Jt, Xt, ea, na, ta = Qt, aa = (t(485),
        function(e) {
            var n = function(n) {
                return null !== e.highlightedResponders && !e.highlightedResponders.has(n)
            }
              , t = function(t) {
                return "responder-name " + ((e.selectedResponderId ? e.selectedResponderId : e.hoverResponderId) === t ? "selected " : " ") + (n(t) ? "crossed-out" : "")
            };
            return Object(Y.jsxs)("div", {
                id: "responders-wrapper",
                children: [Object(Y.jsxs)("div", {
                    id: "responders-heading",
                    className: "subheading",
                    style: function() {
                        var n = K.numDigits(f.a.size(e.Responders));
                        return {
                            minWidth: "".concat(155 + 2 * n * 12, "px")
                        }
                    }(),
                    children: ["Responders ", null === e.highlightedResponders ? "(".concat(f.a.size(e.Responders), ")") : "(".concat(f.a.size(e.highlightedResponders), "/").concat(f.a.size(e.Responders), ")")]
                }), function() {
                    var a = Object.keys(e.Responders).sort((function(e, t) {
                        return n(e) ? -1 : n(t) ? 1 : 0
                    }
                    )).map((function(n, a) {
                        return Object(Y.jsx)("div", {
                            className: "responder-wrapper",
                            onMouseEnter: function() {
                                return t = n,
                                void (e.onResponderHover && e.onResponderHover(t));
                                var t
                            },
                            onMouseLeave: function() {
                                e.onResponderHover && e.onResponderHover(null)
                            },
                            onClick: function() {
                                return t = n,
                                void (e.selectedResponderId === t ? e.onResponderUnselect && e.onResponderUnselect(t) : e.onResponderSelect && e.onResponderSelect(t));
                                var t
                            },
                            children: Object(Y.jsx)("div", {
                                className: t(n),
                                children: e.Responders[n].name
                            })
                        }, a)
                    }
                    ));
                    return Object(Y.jsx)("div", {
                        id: "responders-names",
                        children: a
                    })
                }()]
            })
        }
        ), ia = void 0 !== Jt ? Jt : Jt = t(486), la = void 0 !== Xt ? Xt : Xt = t(487), sa = void 0 !== ea ? ea : ea = t(488), oa = void 0 !== na ? na : na = t(489), ra = (t(490),
        {
            ADD: "add",
            EDIT: "edit",
            LOGIN: "login",
            VIEW: "view",
            SCHEDULING: "scheduling",
            VIEW_RESPONDENT: "view-respondent",
            isView: function(e) {
                return e === ra.VIEW || e === ra.VIEW_RESPONDENT
            },
            isEdit: function(e) {
                return e === ra.EDIT
            }
        }), ca = "AvailabilityForm", ua = {
            ADD_STATE: "add_availability_state",
            CANCEL_ADD: "cancel_add_availability",
            EDIT_STATE: "edit_availability_state",
            LOGIN_STATE: "login_state",
            CANCEL_LOGIN: "cancel_login",
            VIEW_RESPONDENT_STATE: "view_respondent_state",
            UNVIEW_RESPONDENT_STATE: "unview_respondent_state",
            SCHEDULE_STATE: "schedule_state",
            CANCEL_SCHEDULE: "cancel_schedule",
            ADD_RESPONSE: "add_availability",
            EDIT_RESPONSE: "edit_availability",
            DELETE_RESPONSE: "delete_availability",
            SCHEDULE_EVENT: "schedule_event",
            UNSCHEDULE_EVENT: "unschedule_event",
            DELETE_PRESS: "delete_availability_press",
            DELETE_CANCEL: "delete_availability_cancel",
            DELETE_CONFIRM: "delete_availability_confirm",
            EDIT_RESPONSE_INVALID_USER: "edit_response_invalid_user",
            DELETE_RESPONSE_INVALID_USER: "delete_response_invalid_user"
        }, da = {
            ADD_BOTTOM_BAR: "add_availability_bb",
            ADD_TOP_BAR: "add_availability_tb",
            CANCEL_BOTTOM_BAR: "cancel_bb",
            CANCEL_TOP_BAR: "cancel_tb",
            EDIT_BOTTOM_BAR: "edit_availability_bb",
            EDIT_TOP_BAR: "edit_availability_tb",
            SCHEDULE_BOTTOM_BAR: "schedule_bb",
            SCHEDULE_TOP_BAR: "schedule_tb",
            LOGIN_BOTTOM_BAR: "login_bb",
            LOGIN_TOP_BAR: "login_tb",
            SAVE_BOTTOM_BAR: "save_bb",
            SAVE_TOP_BAR: "save_tb",
            DELETE_BOTTOM_BAR: "delete_availability_bb",
            DELETE_TOP_BAR: "delete_availability_tb"
        }, ma = function(e) {
            var n = function() {
                return 0 === e.event.type
            }
              , t = function() {
                return 1 === e.event.type
            }
              , a = Object(m.useRelayEnvironment)()
              , i = Object(o.useRef)(null)
              , l = Object(o.useRef)(null)
              , s = Object(o.useRef)(null)
              , r = Object(o.useRef)(null)
              , c = Object(o.useRef)(null)
              , u = Object(o.useState)(null)
              , v = Object(d.a)(u, 2)
              , p = v[0]
              , h = v[1]
              , g = Object(o.useState)(null)
              , j = Object(d.a)(g, 2)
              , y = j[0]
              , k = j[1]
              , E = Object(o.useState)(t() && f.a.isEmpty(e.event.pollResponses) ? ra.ADD : ra.VIEW)
              , T = Object(d.a)(E, 2)
              , w = T[0]
              , x = T[1]
              , S = Object(o.useState)(null)
              , N = Object(d.a)(S, 2)
              , _ = N[0]
              , R = N[1]
              , C = Object(o.useState)(null)
              , D = Object(d.a)(C, 2)
              , A = D[0]
              , L = D[1];
            var F, P, I, M, U, B = Object(o.useReducer)((function(e, n) {
                switch (n.type) {
                case "twerkScheduleLimit":
                    return {
                        twerkScheduleLimit: !0
                    };
                case "stopTwerkScheduleLimit":
                    return {
                        twerkScheduleLimit: !1
                    }
                }
            }
            ), {
                twerkScheduleLimit: !1
            }), V = Object(d.a)(B, 2), G = V[0], W = V[1], H = K.convertEventToLocalTimezone(e.event), q = [], Z = H.calendarEvents, $ = {
                hasViewedRespondent: !1,
                hasUnselectedRespondent: !1
            }, Q = function() {
                return !f.a.isEmpty(P)
            };
            Object(o.useEffect)((function() {
                var a = [];
                switch (w) {
                case ra.SCHEDULING:
                    a.push(new Oe(ge,"Cancel",re), new Oe(fe,"Save",he,"check"));
                    break;
                case ra.VIEW:
                    if (n())
                        if (Q()) {
                            var i = F ? "Edit" : "Add"
                              , l = F ? "pencil" : "plus"
                              , s = F ? oe : ae
                              , o = H.isScheduled ? "Unschedule" : "Schedule"
                              , r = H.isScheduled ? pe : ve;
                            a.push(new Oe(ge,o,r,"calendar"), new Oe(fe,"".concat(i, " availability"),s,l))
                        } else
                            a.push(new Oe(fe,"Add availability",ae,"plus"));
                    else if (t()) {
                        var c = H.isScheduled ? "Unschedule" : "Schedule"
                          , u = H.isScheduled ? pe : ve
                          , d = F ? "Edit" : "Add"
                          , m = F ? "pencil" : "plus"
                          , v = F ? oe : ae;
                        Q() && !F || a.push(new Oe(Q() ? ge : fe,"".concat(d, " availability"),v,m)),
                        Q() && a.push(new Oe(fe,c,u,"calendar"))
                    }
                    break;
                case ra.VIEW_RESPONDENT:
                    var h = I[p].id === (e.user && e.user.id) ? "" : "".concat(I[p].name.split(" ")[0], "'s");
                    a.push(new Oe(fe,"Edit ".concat(h, " availability"),oe,"pencil"));
                    break;
                case ra.ADD:
                    a.push(new Oe(ge,"Cancel",re), new Oe(fe,X(),me,ee()));
                    break;
                case ra.EDIT:
                    a.push(new Oe(ge,"Cancel",re), new Oe(ge,"Delete",ce), new Oe(fe,X(),me,ee()))
                }
                w !== ra.LOGIN && e.setBottomBarActions(a),
                Te()
            }
            ), [w, p, F, H.isScheduled]);
            var J = function() {
                return w === ra.ADD && !e.user
            }
              , X = function() {
                var e;
                return (null === i || void 0 === i || null === (e = i.current) || void 0 === e ? void 0 : e.hasNextPage) ? "Next" : J() ? "Continue" : "Save"
            }
              , ee = function() {
                var e;
                return (null === i || void 0 === i || null === (e = i.current) || void 0 === e ? void 0 : e.hasNextPage) || J() ? "arrow-right-circle" : "check"
            }
              , ne = function() {
                var n;
                return null === i || void 0 === i || null === (n = i.current) || void 0 === n ? void 0 : n.currSelected.map((function(n) {
                    return {
                        start: K.convertTimezone(n.start, H.timeZone, e.event.timeZone),
                        end: K.convertTimezone(n.end, H.timeZone, e.event.timeZone)
                    }
                }
                ))
            }
              , te = function(n, t, i, s) {
                Object(m.commitMutation)(a, {
                    mutation: la,
                    variables: {
                        input: {
                            eventId: t,
                            availabilities: n,
                            name: i && s && i.name || null,
                            email: i && s && i.email || null
                        }
                    },
                    onCompleted: function(t) {
                        Object(z.b)("Response saved!", {
                            position: z.b.POSITION.BOTTOM_CENTER,
                            autoClose: 3e3,
                            hideProgressBar: !0,
                            className: "success-toast"
                        }),
                        L(null),
                        x(ra.VIEW),
                        b.trackEvent(ca, ua.ADD_RESPONSE, null, ie() ? 1 : 0),
                        e.onAddAvailability && e.onAddAvailability(n)
                    },
                    onError: function(e) {
                        var n, t;
                        "Poll response exists with that email" === (null === e || void 0 === e || null === (n = e.res) || void 0 === n ? void 0 : n.errors[0]).message ? null === (t = l.current) || void 0 === t || t.showErrors({
                            email: "Response already exists with this email! Click the respondent to edit their availability instead."
                        }) : (L(null),
                        x(ra.VIEW),
                        Object(z.b)("Uh-oh, looks like we ran into an error", {
                            position: z.b.POSITION.BOTTOM_CENTER,
                            autoClose: 3e3,
                            hideProgressBar: !0,
                            className: "error-toast"
                        }))
                    }
                })
            }
              , ae = function() {
                x(ra.ADD),
                b.trackEvent(ca, ua.ADD_STATE, ye() ? da.ADD_BOTTOM_BAR : da.ADD_TOP_BAR, ie() ? 1 : 0)
            }
              , ie = function() {
                return e.user
            }
              , le = function() {
                return p && I[p] && I[p].id
            }
              , se = function() {
                return !(le() && (!le() || !F || F !== p))
            }
              , oe = function() {
                if (!p && F && h(F),
                !se())
                    return Object(z.b)("You must be signed in as this user to edit this response.", {
                        position: z.b.POSITION.BOTTOM_CENTER,
                        autoClose: 3e3,
                        hideProgressBar: !0,
                        className: "error-toast"
                    }),
                    void b.trackEvent(ca, ua.EDIT_RESPONSE_INVALID_USER, ie() ? 1 : 0);
                x(ra.EDIT),
                b.trackEvent(ca, ua.EDIT_STATE, ye() ? da.EDIT_BOTTOM_BAR : da.EDIT_TOP_BAR, ie() ? 1 : 0)
            }
              , re = function() {
                b.trackEvent(ca, w === ra.SCHEDULING ? ua.CANCEL_SCHEDULE : ua.CANCEL_ADD, ye() ? da.CANCEL_BOTTOM_BAR : da.CANCEL_TOP_BAR, ie() ? 1 : 0),
                L(null),
                x(ra.VIEW),
                h(null)
            }
              , ce = function() {
                if (!se())
                    return Object(z.b)("You must be signed in as this user to delete this response.", {
                        position: z.b.POSITION.BOTTOM_CENTER,
                        autoClose: 3e3,
                        hideProgressBar: !0,
                        className: "error-toast"
                    }),
                    void b.trackEvent(ca, ua.DELETE_RESPONSE_INVALID_USER, ie() ? 1 : 0);
                b.trackEvent(ca, ua.DELETE_PRESS, ye() ? da.DELETE_BOTTOM_BAR : da.DELETE_TOP_BAR, e.user ? 1 : 0);
                var n = new qn("Delete Availability?","Are you sure you want to delete this availability? This action cannot be undone.",[new Zn(Hn,"Cancel",ue), new Zn(Wn,"Delete",de)],!0,ue);
                new Qn(n)
            }
              , ue = function() {
                b.trackEvent(ca, ua.DELETE_CANCEL, null, e.user ? 1 : 0),
                null
            }
              , de = function() {
                null !== p && void 0 !== p ? (b.trackEvent(ca, ua.DELETE_CONFIRM, ye() ? da.DELETE_BOTTOM_BAR : da.DELETE_TOP_BAR, e.user ? 1 : 0),
                Object(m.commitMutation)(a, {
                    mutation: oa,
                    variables: {
                        input: {
                            id: p
                        }
                    },
                    onCompleted: function(n) {
                        Object(z.b)("Response deleted successfully!", {
                            position: z.b.POSITION.BOTTOM_CENTER,
                            autoClose: 3e3,
                            hideProgressBar: !0,
                            className: "success-toast"
                        }),
                        h(null),
                        F = null,
                        x(ra.VIEW),
                        b.trackEvent(ca, ua.DELETE_RESPONSE, ye() ? da.DELETE_BOTTOM_BAR : da.DELETE_TOP_BAR, e.user ? 1 : 0)
                    },
                    onError: function(e) {
                        Object(z.b)("Uh-oh, looks like we ran into an error", {
                            position: z.b.POSITION.BOTTOM_CENTER,
                            autoClose: 3e3,
                            hideProgressBar: !0,
                            className: "error-toast"
                        })
                    }
                })) : Object(z.b)("Please select a response to delete.", {
                    position: z.b.POSITION.BOTTOM_CENTER,
                    autoClose: 3e3,
                    hideProgressBar: !0,
                    className: "error-toast"
                })
            }
              , me = function() {
                var n;
                if (null === i || void 0 === i || null === (n = i.current) || void 0 === n ? void 0 : n.hasNextPage) {
                    var t;
                    null === i || void 0 === i || null === (t = i.current) || void 0 === t || t.handleNextPage()
                } else {
                    var l = ne();
                    w === ra.ADD ? e.user ? te(l, e.event.id, e.user, !1) : (L(l),
                    x(ra.LOGIN),
                    b.trackEvent(ca, ua.LOGIN_STATE, ye() ? da.LOGIN_BOTTOM_BAR : da.LOGIN_TOP_BAR)) : w === ra.EDIT && function(e) {
                        var n = ne();
                        n && 0 !== n.length ? Object(m.commitMutation)(a, {
                            mutation: sa,
                            variables: {
                                input: {
                                    id: e,
                                    availabilities: n
                                }
                            },
                            onCompleted: function(e) {
                                Object(z.b)("Response updated!", {
                                    position: z.b.POSITION.BOTTOM_CENTER,
                                    autoClose: 3e3,
                                    hideProgressBar: !0,
                                    className: "success-toast"
                                }),
                                x(ra.VIEW),
                                h(null),
                                b.trackEvent(ca, ua.EDIT_RESPONSE, ye() ? da.SAVE_BOTTOM_BAR : da.SAVE_TOP_BAR, ie() ? 1 : 0)
                            },
                            onError: function(e) {
                                Object(z.b)("Uh-oh, looks like we ran into an error", {
                                    position: z.b.POSITION.BOTTOM_CENTER,
                                    autoClose: 3e3,
                                    hideProgressBar: !0,
                                    className: "error-toast"
                                })
                            }
                        }) : x(ra.VIEW_RESPONDENT)
                    }(p)
                }
            }
              , ve = function() {
                f.a.isEmpty(P) ? Object(z.b)("Oops, can't schedule without any availabilities", {
                    position: z.b.POSITION.BOTTOM_CENTER,
                    autoClose: 3e3,
                    hideProgressBar: !0,
                    className: "error-toast"
                }) : (x(ra.SCHEDULING),
                b.trackEvent(ca, ua.SCHEDULE_STATE, ye() ? da.SCHEDULE_BOTTOM_BAR : da.SCHEDULE_TOP_BAR, ie() ? 1 : 0))
            }
              , pe = function() {
                Object(m.commitMutation)(a, {
                    mutation: ia,
                    variables: {
                        input: {
                            id: e.event.id,
                            start: null,
                            end: null
                        }
                    },
                    onCompleted: function(e) {
                        Object(z.b)("Event successfully unscheduled!", {
                            position: z.b.POSITION.BOTTOM_CENTER,
                            autoClose: 3e3,
                            hideProgressBar: !0,
                            className: "success-toast"
                        }),
                        x(ra.VIEW),
                        b.trackEvent(ca, ua.UNSCHEDULE_EVENT, ye() ? da.SAVE_BOTTOM_BAR : da.SAVE_TOP_BAR, ie() ? 1 : 0)
                    },
                    onError: function(e) {
                        Object(z.b)("Uh-oh, looks like we ran into an error", {
                            position: z.b.POSITION.BOTTOM_CENTER,
                            autoClose: 3e3,
                            hideProgressBar: !0,
                            className: "error-toast"
                        }),
                        x(ra.VIEW)
                    }
                })
            }
              , he = function() {
                var n = ne();
                L(n),
                t() && !e.user ? (x(ra.LOGIN),
                b.trackEvent(ca, ua.LOGIN_STATE, ye() ? da.LOGIN_BOTTOM_BAR : da.LOGIN_TOP_BAR)) : je(n, null)
            }
              , je = function(n, t) {
                n && 0 !== n.length ? Object(m.commitMutation)(a, {
                    mutation: ia,
                    variables: {
                        input: {
                            id: e.event.id,
                            start: be.a.utc(n[0].start).toISOString(),
                            end: be.a.utc(n[0].end).toISOString(),
                            name: null === t || void 0 === t ? void 0 : t.name,
                            email: null === t || void 0 === t ? void 0 : t.email
                        }
                    },
                    onCompleted: function(e) {
                        Object(z.b)("Event successfully scheduled!", {
                            position: z.b.POSITION.BOTTOM_CENTER,
                            autoClose: 3e3,
                            hideProgressBar: !0,
                            className: "success-toast"
                        }),
                        L(null),
                        x(ra.VIEW),
                        b.trackEvent(ca, ua.SCHEDULE_EVENT, ye() ? da.SAVE_BOTTOM_BAR : da.SAVE_TOP_BAR, ie() ? 1 : 0)
                    },
                    onError: function(e) {
                        Object(z.b)("Uh-oh, looks like we ran into an error", {
                            position: z.b.POSITION.BOTTOM_CENTER,
                            autoClose: 3e3,
                            hideProgressBar: !0,
                            className: "error-toast"
                        }),
                        L(null),
                        x(ra.VIEW)
                    }
                }) : Object(z.b)("Please select a time to schedule", {
                    position: z.b.POSITION.BOTTOM_CENTER,
                    autoClose: 3e3,
                    hideProgressBar: !0,
                    className: "error-toast"
                })
            }
              , ye = function() {
                return !K.isDesktop(e.screenType)
            }
              , ke = function() {
                if (!t() || !Q() || F) {
                    var e = F ? "Edit" : "Add"
                      , a = F ? "pencil" : "plus"
                      , i = n() || t() && !Q() ? "button-green" : ""
                      , l = F ? oe : ae;
                    return Object(Y.jsxs)("div", {
                        className: "button availability-button ".concat(i, " button-icon subsubheading icon-").concat(a),
                        onClick: l,
                        ref: c,
                        children: [e, " availability"]
                    })
                }
            }
              , Ee = function() {
                var n = "button availability-button button-icon\n    ".concat(t() && Q() ? "button-green" : "", "\n    subsubheading icon-calendar\n    ").concat(Q() ? "" : "button-disabled button-gray")
                  , a = e.event.isScheduled ? "Unschedule" : "Schedule"
                  , i = e.event.isScheduled ? pe : ve;
                return Object(Y.jsx)("div", {
                    className: n,
                    onClick: i,
                    ref: s,
                    children: a
                })
            }
              , Te = function() {
                H = K.convertEventToLocalTimezone(e.event),
                Z = H.calendarEvents,
                F = function(e, n) {
                    if (!e || !n)
                        return null;
                    var t, a = Object(O.a)(n);
                    try {
                        for (a.s(); !(t = a.n()).done; ) {
                            var i = t.value;
                            if (i.user.id === e.id)
                                return i.id
                        }
                    } catch (l) {
                        a.e(l)
                    } finally {
                        a.f()
                    }
                    return null
                }(e.user, H.pollResponses),
                P = function(e, n, t, a, i) {
                    var l = {};
                    if (e) {
                        var s, o = Object(O.a)(e);
                        try {
                            for (o.s(); !(s = o.n()).done; ) {
                                var r = s.value;
                                l[r.id] = K.rangesToAvailabilities(r.availabilities, n, t, a, i)
                            }
                        } catch (c) {
                            o.e(c)
                        } finally {
                            o.f()
                        }
                    }
                    return l
                }(H.pollResponses, H.pollDates, H.pollStartTime, H.pollEndTime, e.blocksPerHour),
                I = function(e) {
                    var n = {};
                    if (e) {
                        var t, a = Object(O.a)(e);
                        try {
                            for (a.s(); !(t = a.n()).done; ) {
                                var i = t.value;
                                n[i.id] = i.user
                            }
                        } catch (l) {
                            a.e(l)
                        } finally {
                            a.f()
                        }
                    }
                    return n
                }(H.pollResponses),
                U = function() {
                    var e = P;
                    switch (w) {
                    case ra.ADD:
                    case ra.LOGIN:
                    case ra.EDIT:
                        e = null;
                        break;
                    case ra.VIEW_RESPONDENT:
                        p && ((e = {})[p] = P[p]);
                        break;
                    case ra.VIEW:
                        _ && ((e = {})[_] = P[_])
                    }
                    return e
                }(),
                M = function() {
                    var e = null;
                    return w === ra.EDIT && p ? e = P[p] : t() && null !== A && (e = A),
                    e
                }(),
                H.isScheduled && w !== ra.SCHEDULING ? q = [{
                    title: "Scheduled Time",
                    start: H.start,
                    end: H.end
                }] : (w === ra.ADD || w === ra.EDIT && e.user && p && I[p] && e.user.id === I[p].id) && (q = Z)
            };
            return Te(),
            Object(Y.jsxs)("div", {
                id: "af-container",
                className: "af-mode-" + w,
                children: [function() {
                    var a = null
                      , i = (e.event.isScheduled,
                    function() {
                        switch (w) {
                        case ra.SCHEDULING:
                            return "Schedule your meeting";
                        case ra.VIEW:
                            if (e.event && e.event.isScheduled) {
                                var n = H.start.format("dddd[,] MMMM DD [from] h:mmA")
                                  , a = H.end.format("h:mmA");
                                return "".concat(n, " - ").concat(a)
                            }
                            var i, l;
                            return t() && Q() ? "".concat(null === (i = H.pollResponses[0]) || void 0 === i || null === (l = i.user) || void 0 === l ? void 0 : l.name, "'s availability") : "Availabilities";
                        case ra.VIEW_RESPONDENT:
                            return I[p].id === (e.user && e.user.id) ? "Your availability" : "".concat(I[p].name, "'s availability");
                        case ra.ADD:
                            return "Add your availability";
                        case ra.EDIT:
                            return p && I[p] && I[p].id !== (e.user && e.user.id) ? "Edit ".concat(I[p].name, "'s availability") : "Edit your availability";
                        default:
                            return "Availabilities"
                        }
                    }())
                      , l = 0 === H.maxScheduledDurationMins || null === H.maxScheduledDurationMins || void 0 === H.maxScheduledDurationMins ? null : function() {
                        var e = H.maxScheduledDurationMins / 60 | 0
                          , n = H.maxScheduledDurationMins % 60 | 0;
                        return "This event has a scheduling limit of " + (e ? e + (1 === e ? " hour" : " hours") + (e && n ? " and " : "") : "") + (n ? n + " minutes" : "")
                    }()
                      , s = !n() && t() && Q() ? Object(Y.jsxs)(Y.Fragment, {
                        children: [ke(), Ee()]
                    }) : Object(Y.jsxs)(Y.Fragment, {
                        children: [Ee(), ke()]
                    });
                    switch (w) {
                    case ra.SCHEDULING:
                        a = Object(Y.jsxs)("div", {
                            className: "availability-button-wrapper",
                            children: [Object(Y.jsx)("div", {
                                role: "button",
                                className: "button availability-button button-icon subsubheading icon-close",
                                onClick: re,
                                children: "Cancel"
                            }), Object(Y.jsx)("div", {
                                role: "button",
                                className: "button button-green availability-button button-icon subsubheading icon-check",
                                onClick: function() {
                                    return he()
                                },
                                children: "Save"
                            })]
                        });
                        break;
                    case ra.VIEW:
                        a = Object(Y.jsx)("div", {
                            className: "availability-button-wrapper",
                            children: s
                        });
                        break;
                    case ra.VIEW_RESPONDENT:
                        var o = I[p].id === (e.user && e.user.id) ? "" : "".concat(I[p].name.split(" ")[0], "'s")
                          , c = "button availability-button\n          button-icon subsubheading icon-pencil ".concat(se() ? "button-green" : "button-disabled button-gray");
                        a = Object(Y.jsxs)("div", {
                            className: "availability-button-wrapper",
                            children: [Ee(), Object(Y.jsxs)("div", {
                                className: c,
                                onClick: oe,
                                ref: r,
                                children: ["Edit ", o, " availability"]
                            })]
                        });
                        break;
                    case ra.ADD:
                    case ra.EDIT:
                        a = Object(Y.jsxs)("div", {
                            className: "availability-button-wrapper",
                            children: [w === ra.EDIT && Object(Y.jsx)("div", {
                                role: "button",
                                className: "button availability-button button-icon subsubheading icon-trash ".concat(se() ? "button-red" : "button-disabled button-gray"),
                                onClick: ce,
                                children: "Delete"
                            }), Object(Y.jsx)("div", {
                                role: "button",
                                className: "button availability-button button-icon subsubheading icon-close",
                                onClick: re,
                                children: "Cancel"
                            }), Object(Y.jsx)("div", {
                                role: "button",
                                className: "button button-green availability-button button-icon subsubheading icon-".concat(ee()),
                                onClick: me,
                                children: X()
                            })]
                        })
                    }
                    return Object(Y.jsxs)("div", {
                        id: "header-container",
                        children: [Object(Y.jsxs)("div", {
                            id: "af-header",
                            children: [Object(Y.jsx)("div", {
                                className: "heading",
                                children: i
                            }), ye() ? null : a]
                        }), w === ra.SCHEDULING && null !== l && Object(Y.jsx)("div", {
                            className: G.twerkScheduleLimit ? "twerkText" : "",
                            children: l
                        })]
                    })
                }(), Object(Y.jsxs)("div", {
                    id: "af-content",
                    children: [H && Object(Y.jsx)(ta, {
                        canScheduleOnEmptyAvailablities: n() || t() && w !== ra.SCHEDULING,
                        maxScheduledMinutes: H.maxScheduledDurationMins,
                        availabilities: U,
                        dates: H.pollDates,
                        startTime: H.pollStartTime,
                        endTime: H.pollEndTime,
                        blocksPerHour: H.blocksPerHour,
                        timezone: H.timeZone,
                        user: e.user,
                        events: q,
                        callback: function(e) {},
                        hoverCallback: function(e) {
                            return n = e,
                            void (w !== ra.VIEW_RESPONDENT && k(n));
                            var n
                        },
                        onMouseDown: function() {
                            ra.isView(w) && K.scale(c.current || r.current)
                        },
                        mode: w,
                        editSelection: M,
                        eventsOnTop: H.isScheduled,
                        hasNextPageCallback: function(e) {},
                        ref: i,
                        dispatch: W
                    }), !t() && !f.a.isEmpty(I) && Object(Y.jsx)(aa, {
                        Responders: I,
                        onResponderSelect: function(e) {
                            return n = e,
                            x(ra.VIEW_RESPONDENT),
                            h(n),
                            k(null),
                            void ($.hasViewedRespondent || ($.hasViewedRespondent = !0,
                            b.trackEvent(ca, ua.VIEW_RESPONDENT_STATE, null, ie() ? 1 : 0)));
                            var n
                        },
                        onResponderUnselect: function(e) {
                            return x(ra.VIEW),
                            h(null),
                            R(null),
                            k(null),
                            void ($.hasUnselectedRespondent || ($.hasUnselectedRespondent = !0,
                            b.trackEvent(ca, ua.UNVIEW_RESPONDENT_STATE, null, ie() ? 1 : 0)))
                        },
                        onResponderHover: function(e) {
                            return n = e,
                            void (y || R(n));
                            var n
                        },
                        highlightedResponders: y,
                        selectedResponderId: p,
                        hoverResponderId: _
                    })]
                }), w === ra.LOGIN && Object(Y.jsx)("div", {
                    className: "af-overlay",
                    children: Object(Y.jsx)(qt, {
                        resetRelayEnv: e.resetRelayEnv,
                        onClose: function() {
                            t() ? (L(null),
                            x(ra.VIEW)) : x(ra.ADD),
                            b.trackEvent(ca, ua.CANCEL_LOGIN)
                        },
                        onGuest: function(n) {
                            return function(n) {
                                var a = t() ? A : ne();
                                t() && Q() ? je(a, n) : te(a, e.event.id, n, !0)
                            }(n)
                        },
                        onLogin: function() {
                            var n = t() ? A : ne();
                            t() && Q() ? je(n, null) : te(n, e.event.id, null, !1)
                        },
                        setBottomBarActions: e.setBottomBarActions,
                        screenType: e.screenType,
                        eventType: H.type,
                        ref: l
                    })
                })]
            })
        }, va = "share_lettuce", pa = function e(n, t) {
            Object(v.a)(this, e),
            this.event = n || null,
            this.user = t || null
        }, ha = new (function() {
            function e() {
                Object(v.a)(this, e)
            }
            return Object(p.a)(e, [{
                key: "shouldStart",
                value: function(e, n) {
                    switch (e) {
                    case va:
                        return this.shouldStartShare(n)
                    }
                }
            }, {
                key: "shouldStartShare",
                value: function(e) {
                    if (!e || !e.event)
                        return h.log("TourManager::shouldStartShare: no options or options.event provided, skipping tour"),
                        !1;
                    if (e.user)
                        return h.log("TourManager::shouldStartShare: logged in user, skipping tour"),
                        !1;
                    var n = bt.get(pt, vt.TOURS_COMPLETED)
                      , t = bt.get(pt, vt.LETTUCES_CREATED);
                    return (0 === n.length || -1 === n.indexOf(va)) && -1 !== f.a.findIndex(t, ["id", e.event.id])
                }
            }, {
                key: "started",
                value: function(e) {
                    bt.put(pt, vt.TOURS_COMPLETED, e)
                }
            }]),
            e
        }()), ba = (t(491),
        "tour"), ga = "Tour", fa = {
            START: "start",
            SHOW_ATTRACTION: "show_attraction",
            CONFIRM: "confirm",
            FINISH: "finish",
            CANCEL: "cancel"
        }, ja = function e(n, t, a, i) {
            Object(v.a)(this, e),
            this.attraction = n,
            this.title = t,
            this.description = a,
            this.confirmation = i
        }, ya = function(e) {
            var n = function() {
                return window.innerHeight
            }
              , t = Object(o.useState)(0)
              , a = Object(d.a)(t, 2)
              , i = a[0]
              , l = a[1]
              , s = ha.shouldStart(e.tourName, e.options)
              , r = e.attractions[0];
            Object(o.useEffect)((function() {
                if (s)
                    return document.body.classList.add(ba),
                    document.getElementsByTagName("html")[0].classList.add(ba),
                    ha.started(e.tourName),
                    b.trackEvent(ga, fa.START, null, e.attractions.length),
                    b.trackEvent(ga, fa.SHOW_ATTRACTION, e.attractions[i].title),
                    function() {
                        document.body.classList.remove(ba),
                        document.getElementsByTagName("html")[0].classList.remove(ba)
                    }
                    ;
                e.onFinishTour && e.onFinishTour()
            }
            ), []);
            var c = function() {
                return i < e.attractions.length - 1
            };
            if (!s)
                return Object(Y.jsx)("div", {});
            window.scrollTo(0, 0);
            var u = function(e) {
                var n = Math.ceil(Math.max(e.width, e.height));
                return {
                    x: Math.ceil(e.x - 25 - (n - e.width) / 2),
                    y: Math.ceil(e.y - 25 - (n - e.height) / 2),
                    width: n + 50,
                    height: n + 50
                }
            }(r.attraction.getBoundingClientRect());
            return Object(Y.jsxs)("div", {
                id: "tour",
                className: e.attractions.length < 2 ? "tour-single" : "tour-multi",
                onClick: function() {
                    b.trackEvent(ga, fa.CANCEL, null, i),
                    e.onFinishTour && e.onFinishTour()
                }
                .bind(undefined),
                children: [function(e) {
                    var t = {
                        top: 0,
                        bottom: "".concat(n() - e.y, "px"),
                        left: 0,
                        right: 0
                    };
                    return Object(Y.jsx)("div", {
                        id: "tour-overlay-top",
                        className: "tour-overlay",
                        style: t
                    })
                }(u), function(e) {
                    var n = {
                        top: "".concat(e.y + e.height, "px"),
                        bottom: 0,
                        left: 0,
                        right: 0
                    };
                    return Object(Y.jsx)("div", {
                        id: "tour-overlay-bottom",
                        className: "tour-overlay",
                        style: n
                    })
                }(u), function(e) {
                    var t = {
                        top: "".concat(e.y, "px"),
                        bottom: "".concat(n() - (e.y + e.height), "px"),
                        left: 0,
                        right: "".concat(window.innerWidth - e.x, "px")
                    };
                    return Object(Y.jsx)("div", {
                        id: "tour-overlay-left",
                        className: "tour-overlay",
                        style: t
                    })
                }(u), function(e) {
                    var t = {
                        top: "".concat(e.y, "px"),
                        bottom: "".concat(n() - (e.y + e.height), "px"),
                        left: "".concat(e.x + e.width, "px"),
                        right: 0
                    };
                    return Object(Y.jsx)("div", {
                        id: "tour-overlay-right",
                        className: "tour-overlay",
                        style: t
                    })
                }(u), function(e) {
                    var n = {
                        top: "".concat(e.y, "px"),
                        left: "".concat(e.x, "px"),
                        width: "".concat(e.width, "px"),
                        height: "".concat(e.height, "px")
                    };
                    return Object(Y.jsx)("div", {
                        id: "tour-highlight",
                        style: n
                    })
                }(u), Object(Y.jsxs)("div", {
                    id: "tour-content-wrapper",
                    children: [function(n) {
                        var t = e.attractions[i]
                          , a = {
                            top: "".concat(n.height + 50, "px")
                        };
                        return Object(Y.jsxs)("div", {
                            id: "tour-content",
                            style: a,
                            children: [Object(Y.jsx)("div", {
                                className: "tour-content-section heading",
                                children: t.title
                            }), Object(Y.jsx)("div", {
                                className: "tour-content-section subsubheading",
                                children: t.description
                            }), Object(Y.jsx)("div", {
                                className: "tour-content-section subsubheading button button-white button-icon icon-" + (c() ? "arrow-right-circle" : "check"),
                                onClick: function(n) {
                                    return function(n) {
                                        if (n.stopPropagation(),
                                        !c())
                                            return b.trackEvent(ga, fa.FINISH, null, e.attractions.length),
                                            void (e.onFinishTour && e.onFinishTour());
                                        b.trackEvent(ga, fa.SHOW_ATTRACTION, e.attractions[i + 1].title),
                                        l(i + 1)
                                    }(n)
                                },
                                children: t.confirmation
                            })]
                        })
                    }(u), function() {
                        if (!(e.attractions.length < 2)) {
                            var n = [];
                            return e.attractions.forEach((function(e, t) {
                                n.push(Object(Y.jsx)("div", {
                                    className: "tour-page-indicator " + (i === t ? "selected" : "")
                                }, "indicator-".concat(t)))
                            }
                            )),
                            Object(Y.jsx)("div", {
                                id: "tour-pagination",
                                children: n
                            })
                        }
                    }()]
                })]
            })
        };
        ya.defaultProps = {
            handleResizeAll: !0
        };
        var ka, Oa, Ea, Ta = ya, wa = (t(492),
        "Lettuce"), xa = {
            SHARE_PRESS: "share_press",
            EDIT_PRESS: "edit_press",
            DISABLED_EDIT_PRESS: "disabled_edit_press",
            DISABLED_EDIT_TOAST_PRESS: "disabled_edit_toast_press"
        }, Sa = function(e) {
            var n = Object(o.useContext)(U)
              , a = Object(o.useContext)(G)
              , i = a.screenType
              , l = a.setBottomBarActions
              , s = Object(H.g)()
              , r = Object(o.useRef)(null)
              , c = Object(o.useState)(null)
              , u = Object(d.a)(c, 2)
              , v = u[0]
              , p = u[1]
              , h = Object(H.i)().id
              , g = Object(m.useLazyLoadQuery)(It, {
                id: h
            })
              , f = void 0 !== ka ? ka : ka = t(493)
              , j = void 0 !== Oa ? Oa : Oa = t(494)
              , y = Object(m.useFragment)(f, n)
              , k = Object(m.useFragment)(j, g.event);
            if (Object(o.useEffect)((function() {
                return K.setDocumentTitle("".concat((null === k || void 0 === k ? void 0 : k.title) || "Event")),
                b.setPage("/event"),
                b.trackPageView(),
                function() {
                    b.setPage(null)
                }
            }
            ), []),
            null === k || void 0 === k)
                return s.push("/404"),
                Object(Y.jsx)(Y.Fragment, {});
            var O = function() {
                return (null === k || void 0 === k ? void 0 : k.user) && y && (null === k || void 0 === k ? void 0 : k.user.id) === (null === y || void 0 === y ? void 0 : y.id)
            }
              , E = function() {
                if (O()) {
                    var e = null === k || void 0 === k ? void 0 : k.id;
                    b.trackEvent(wa, xa.EDIT_PRESS),
                    s.push("/l/".concat(e, "/edit"))
                } else {
                    b.trackEvent(wa, xa.DISABLED_EDIT_PRESS);
                    var n = Object(Y.jsx)(W.b, {
                        to: "/signup",
                        onClick: function() {
                            b.trackEvent(wa, xa.DISABLED_EDIT_TOAST_PRESS)
                        },
                        children: "Meetings can only be edited by registered users. Sign up now."
                    });
                    Object(z.b)(Object(Y.jsx)(M, {
                        content: n
                    }), {
                        position: z.b.POSITION.BOTTOM_CENTER,
                        autoClose: 5e3,
                        hideProgressBar: !0,
                        pauseOnHover: !0,
                        className: "success-toast"
                    })
                }
            }
              , T = function() {
                p({
                    shouldRender: !1
                })
            };
            if (!k)
                return Object(Y.jsx)("div", {});
            var w = y
              , x = k
              , S = 1 === x.type ? "one-on-one" : "group"
              , N = 0 === x.type ? "Group" : "One on One";
            return Object(Y.jsxs)("div", {
                className: "create-event-wrapper " + S,
                children: [Object(Y.jsxs)("div", {
                    id: "create-event-title-wrapper",
                    className: "create-event-section",
                    children: [Object(Y.jsx)("div", {
                        id: "event-title",
                        children: x.title
                    }), Object(Y.jsxs)("div", {
                        id: "event-buttons-wrapper",
                        className: "event-buttons-wrapper",
                        children: [Object(Y.jsx)("div", {
                            id: "event-type-container",
                            className: "event-type-container",
                            title: N,
                            children: 0 === x.type ? Object(Y.jsx)(Ot, {}) : Object(Y.jsx)(Rt, {})
                        }), function() {
                            if (!(y ? O() : !(null === k || void 0 === k ? void 0 : k.user)))
                                return null;
                            var e = O() ? "event-buttons button button-icon button-icon-only subsubheading icon-pencil" : "event-buttons button button-icon button-icon-only subsubheading icon-pencil button-disabled button-gray";
                            return Object(Y.jsx)("div", {
                                id: "create-event-edit-button",
                                onClick: E,
                                role: "button",
                                className: e,
                                children: Object(Y.jsx)("span", {
                                    role: "button",
                                    className: "button-text",
                                    children: "Edit"
                                })
                            })
                        }(), Object(Y.jsx)("div", {
                            role: "button",
                            id: "create-event-share-button",
                            className: "event-buttons button button-icon button-icon-only subsubheading icon-share",
                            onClick: function() {
                                Wt()(window.location.href),
                                Object(z.b)("Link copied to clipboard!", {
                                    position: z.b.POSITION.BOTTOM_CENTER,
                                    autoClose: 3e3,
                                    hideProgressBar: !0,
                                    className: "success-toast"
                                }),
                                b.trackEvent(wa, xa.SHARE_PRESS)
                            },
                            ref: r,
                            children: Object(Y.jsx)("span", {
                                role: "button",
                                className: "button-text",
                                children: "Share"
                            })
                        })]
                    })]
                }), Object(Y.jsx)("div", {
                    id: "event-description",
                    className: "create-event-section-padding-25",
                    children: x.description
                }), Object(Y.jsx)("div", {
                    className: "create-event-section-divider",
                    children: Object(Y.jsx)("div", {
                        className: "horizontal-divider"
                    })
                }), x && Object(Y.jsx)("div", {
                    id: "create-event-calendar-wrapper",
                    className: "create-event-section",
                    children: Object(Y.jsx)(ma, {
                        resetRelayEnv: e.resetRelayEnv,
                        event: x,
                        blocksPerHour: 2,
                        user: w,
                        screenType: i,
                        setBottomBarActions: l,
                        onAddAvailability: function(e) {
                            var n = {
                                id: null === k || void 0 === k ? void 0 : k.id
                            }
                              , t = new pa(n,y);
                            p({
                                shouldRender: !0,
                                options: t
                            })
                        }
                    })
                }), function() {
                    if (v && v.shouldRender) {
                        var e = [];
                        return e.push(new ja(r.current,"Next step: Share the meeting","Nice job adding your availability! Tap Share to copy a link to the meeting, then send it to your group so they can add their availabilities too.","Got it")),
                        Object(Y.jsx)(Ta, {
                            attractions: e,
                            tourName: va,
                            options: v.options,
                            onFinishTour: T
                        })
                    }
                }()]
            })
        };
        var Na, _a, Ra, Ca, Da = function() {
            var e = Object(o.useContext)(U)
              , n = void 0 !== Ea ? Ea : Ea = t(495)
              , a = Object(m.useFragment)(n, e);
            return null !== a && void 0 !== a
        }, Aa = t(94), La = (t(496),
        "visible"), Fa = "closed", Pa = "announcement", Ia = "error", Ma = "", Ka = "amber", Ua = "Announcement", Ba = {
            CLICK_LINK: "click_link",
            CLOSE: "close",
            RELINK_GOOGLE_CALENDAR: "relink_google_calendar"
        }, Va = function(e) {
            var n, t = Object(o.useState)(La), a = Object(d.a)(t, 2), i = a[0], l = a[1], s = e.announcement, r = function() {
                bt.put(pt, s.cookieJar, s.id),
                l(Fa)
            };
            if (i === Fa)
                return null;
            var c = null
              , u = Ma;
            return s.type === Ia && (u = Ka),
            s.linkText && s.linkHref && (c = Object(Y.jsx)("a", {
                className: "announcement-link",
                href: s.linkHref,
                target: s.linkTarget,
                onClick: function() {
                    r(),
                    b.trackEvent(Ua, Ba.CLICK_LINK, s.title, s.id, s.type)
                },
                children: s.linkText
            })),
            Object(Y.jsxs)("div", {
                className: "announcement " + u,
                children: [Object(Y.jsx)("div", {
                    className: "announcement-content",
                    children: Object(Y.jsxs)("div", {
                        className: "announcement-title",
                        children: [s.title, c]
                    })
                }), Object(Y.jsx)("div", (n = {
                    className: "announcement-close"
                },
                Object(Aa.a)(n, "className", "icon-close"),
                Object(Aa.a)(n, "onClick", (function() {
                    r(),
                    b.trackEvent(Ua, Ba.CLOSE, s.title, s.id, s.type)
                }
                )),
                n))]
            })
        }, Ga = function(e) {
            var n = Object(o.useContext)(U)
              , a = Object(o.useContext)(V)
              , i = void 0 !== Na ? Na : Na = t(497)
              , l = void 0 !== _a ? _a : _a = t(498)
              , s = Object(m.useFragment)(i, a)
              , r = Object(m.useFragment)(l, n)
              , c = Object(o.useContext)(B).calendar
              , u = bt.get(pt, vt.ANNOUNCEMENTS)
              , d = bt.get(pt, vt.GOOGLE_AUTH_ERROR_DISMISSED)
              , v = null;
            return function() {
                var e = !0;
                return s && s.id || (e = !1),
                s && u.indexOf(s.id) > -1 && (e = !1),
                e
            }() && (v = Object(k.a)(Object(k.a)({}, s), {}, {
                cookieJar: vt.ANNOUNCEMENTS,
                type: Pa,
                linkTarget: "_blank"
            })),
            function() {
                var e = 1 === (null === r || void 0 === r ? void 0 : r.googleStatus);
                return e || f.a.isEmpty(d) || bt.throwAway(pt, vt.GOOGLE_AUTH_ERROR_DISMISSED, null),
                e && f.a.isEmpty(d)
            }() && (v = {
                id: 1,
                title: "Your Google account needs to be relinked.",
                linkText: "Relink",
                linkHref: null === c || void 0 === c ? void 0 : c.redirectURL,
                cookieJar: vt.GOOGLE_AUTH_ERROR_DISMISSED,
                type: Ia,
                linkTarget: "_self"
            }),
            null === v || void 0 === v ? Object(Y.jsx)(Y.Fragment, {}) : Object(Y.jsx)(Va, {
                announcement: v
            })
        }, Wa = (t(499),
        Object(o.forwardRef)((function(e, n) {
            var t = Object(o.useRef)()
              , a = !0;
            void 0 !== e.defaultValue && null !== e.defaultValue && (a = e.defaultValue);
            var i = Object(o.useState)(a)
              , l = Object(d.a)(i, 2)
              , s = l[0]
              , r = l[1];
            Object(o.useImperativeHandle)(n, (function() {
                return {
                    setValue: function(e) {
                        t.current && r(e)
                    },
                    getValue: function() {
                        return s
                    }
                }
            }
            ));
            var c = "toggle-enabled";
            return s || (c = "toggle-disabled"),
            Object(Y.jsx)("div", {
                className: "toggle toggle-white " + c,
                onClick: function() {
                    r(!s)
                },
                children: Object(Y.jsx)("div", {
                    className: "toggle-switch"
                })
            })
        }
        ))), Ha = (t(500),
        "mini"), za = "full", Ya = "closed", qa = "CookieConsent", Za = {
            ACCEPT_ALL: "accept_all",
            CUSTOMIZE: "customize",
            SAVE_CUSTOMIZATIONS: "save_customizations"
        }, $a = function(e) {
            var n = Object(o.useState)(Ya)
              , t = Object(d.a)(n, 2)
              , a = t[0]
              , i = t[1]
              , l = (Object(o.useRef)(null),
            Object(o.useRef)(null));
            Object(o.useEffect)((function() {
                bt.get(pt, vt.COOKIE_CONSENT).updatedOn || i(Ha)
            }
            ), []);
            var s = function() {
                i(a !== Ha ? Ha : za)
            }
              , r = function() {
                bt.put(pt, vt.COOKIE_CONSENT, {
                    marketing: !0,
                    updatedOn: Date.now()
                }),
                b.trackEvent(qa, Za.ACCEPT_ALL),
                i(Ya)
            }
              , c = function() {
                var e, n;
                h.log("Marketing cookie ref: ", null === (e = l.current) || void 0 === e ? void 0 : e.getValue()),
                bt.put(pt, vt.COOKIE_CONSENT, {
                    marketing: null === (n = l.current) || void 0 === n ? void 0 : n.getValue(),
                    updatedOn: Date.now()
                }),
                b.trackEvent(qa, Za.SAVE_CUSTOMIZATIONS),
                i(Ya)
            };
            return a === Ya ? null : Object(Y.jsxs)("div", {
                id: "cookie-consent-wrapper",
                className: "cookie-consent-" + a,
                children: [Object(Y.jsx)("div", {
                    id: "cookie-consent-mini-wrapper",
                    children: Object(Y.jsxs)("div", {
                        className: "cookie-consent-row",
                        children: [Object(Y.jsx)("div", {
                            className: "cookie-consent-description",
                            children: Object(Y.jsx)("div", {
                                className: "hint",
                                children: "This website uses necessary and marketing cookies."
                            })
                        }), Object(Y.jsxs)("div", {
                            className: "cookie-consent-actions",
                            children: [Object(Y.jsx)("div", {
                                className: "cookie-consent-action button button-white button-icon icon-check",
                                onClick: r,
                                children: "Accept"
                            }), Object(Y.jsx)("div", {
                                className: "cookie-consent-action button button-white-outline button-icon icon-settings",
                                onClick: s,
                                children: "Customize"
                            })]
                        })]
                    })
                }), a !== za ? null : Object(Y.jsx)("div", {
                    className: "horizontal-divider"
                }), a !== za ? null : Object(Y.jsxs)("div", {
                    id: "cookie-consent-full-wrapper",
                    children: [Object(Y.jsxs)("div", {
                        className: "cookie-consent-row",
                        children: [Object(Y.jsxs)("div", {
                            className: "cookie-consent-description",
                            children: [Object(Y.jsx)("div", {
                                className: "subsubsubheading",
                                children: "Necessary cookies"
                            }), Object(Y.jsx)("div", {
                                className: "caption",
                                children: "These cookies are essential for this site to work properly, and are used for things such as saving your preferences."
                            })]
                        }), Object(Y.jsx)("div", {
                            className: "cookie-consent-actions",
                            children: Object(Y.jsx)("div", {
                                className: "subsubsubheading",
                                children: "Always active"
                            })
                        })]
                    }), Object(Y.jsxs)("div", {
                        className: "cookie-consent-row",
                        children: [Object(Y.jsxs)("div", {
                            className: "cookie-consent-description",
                            children: [Object(Y.jsx)("div", {
                                className: "subsubsubheading",
                                children: "Marketing cookies"
                            }), Object(Y.jsx)("div", {
                                className: "caption",
                                children: "Marketing cookies are used to provide visitors with customized ads."
                            })]
                        }), Object(Y.jsx)("div", {
                            className: "cookie-consent-actions",
                            children: Object(Y.jsx)(Wa, {
                                defaultValue: !0,
                                ref: l
                            })
                        })]
                    }), Object(Y.jsx)("div", {
                        className: "cookie-consent-row cookie-consent-save",
                        children: Object(Y.jsx)("div", {
                            className: "cookie-consent-actions",
                            children: Object(Y.jsx)("div", {
                                className: "cookie-consent-action button button-white-outline button-icon icon-check",
                                onClick: c,
                                children: "Save"
                            })
                        })
                    })]
                })]
            })
        }, Qa = function(e) {
            var n = Object(o.useContext)(G).screenType
              , t = Da();
            return Object(Y.jsxs)(W.a, {
                children: [Object(Y.jsx)(Ga, {}), Object(Y.jsx)($a, {}), Object(Y.jsx)($, {}), Object(Y.jsxs)("div", {
                    id: "content-wrapper",
                    children: [Object(Y.jsx)(z.a, {}), Object(Y.jsxs)(H.d, {
                        children: [Object(Y.jsx)(H.b, {
                            exact: !0,
                            path: "/",
                            children: Object(Y.jsx)(Vn, {})
                        }), Object(Y.jsx)(H.b, {
                            path: "/create",
                            children: Object(Y.jsx)(Pt, {})
                        }), Object(Y.jsx)(H.b, {
                            path: "/feedback",
                            children: Object(Y.jsx)(Ve, {})
                        }), Object(Y.jsx)(H.b, {
                            path: "/how-it-works",
                            children: Object(Y.jsx)(pe, {})
                        }), Object(Y.jsx)(H.b, {
                            path: "/logout",
                            children: Object(Y.jsx)(de, {
                                resetRelayEnv: e.resetRelayEnv
                            })
                        }), Object(Y.jsx)(H.b, {
                            exact: !0,
                            path: "/login",
                            children: Object(Y.jsx)(Ie, {
                                resetRelayEnv: e.resetRelayEnv
                            })
                        }), Object(Y.jsx)(H.b, {
                            exact: !0,
                            path: "/me",
                            children: t ? Object(Y.jsx)(_e, {
                                resetRelayEnv: e.resetRelayEnv
                            }) : Object(Y.jsx)(H.a, {
                                to: "/login"
                            })
                        }), Object(Y.jsx)(H.b, {
                            path: "/me/notifications",
                            children: t ? Object(Y.jsx)(en, {}) : Object(Y.jsx)(H.a, {
                                to: "/login"
                            })
                        }), Object(Y.jsx)(H.b, {
                            path: "/me/settings",
                            children: t ? Object(Y.jsx)(ot, {
                                resetRelayEnv: e.resetRelayEnv
                            }) : Object(Y.jsx)(H.a, {
                                to: "/login"
                            })
                        }), Object(Y.jsx)(H.b, {
                            exact: !0,
                            path: "/l/:id",
                            children: Object(Y.jsx)(Sa, {
                                resetRelayEnv: e.resetRelayEnv
                            })
                        }), Object(Y.jsx)(H.b, {
                            path: "/l/:id/edit",
                            children: Object(Y.jsx)(Vt, {})
                        }), Object(Y.jsx)(H.b, {
                            path: "/signup",
                            children: Object(Y.jsx)(Ye, {
                                resetRelayEnv: e.resetRelayEnv
                            })
                        }), Object(Y.jsx)(H.b, {
                            path: "/404",
                            children: Object(Y.jsx)(me, {})
                        }), Object(Y.jsx)(H.b, {
                            path: "/notifications/unsubscribe",
                            children: Object(Y.jsx)(ve, {})
                        }), Object(Y.jsx)(H.b, {
                            path: "/privacy",
                            children: Object(Y.jsx)(Me, {})
                        }), Object(Y.jsx)(H.b, {
                            path: "/forgot-password",
                            children: Object(Y.jsx)(tn, {})
                        }), Object(Y.jsx)(H.b, {
                            path: "/reset-password/:token",
                            children: Object(Y.jsx)(ln, {})
                        }), Object(Y.jsx)(H.b, {
                            exact: !0,
                            path: "/login/auth/:provider/:token",
                            children: Object(Y.jsx)(hn, {
                                resetRelayEnv: e.resetRelayEnv
                            })
                        }), Object(Y.jsx)(H.b, {
                            exact: !0,
                            path: "/login/:provider/:token",
                            children: Object(Y.jsx)(dn, {
                                resetRelayEnv: e.resetRelayEnv
                            })
                        }), Object(Y.jsx)(H.a, {
                            from: "/*",
                            to: "/404"
                        })]
                    })]
                }), Object(Y.jsxs)("div", {
                    id: "footer-wrapper",
                    children: [Object(Y.jsx)("a", {
                        role: "button",
                        href: "https://medium.com/lettucemeet",
                        children: "Blog"
                    }), Object(Y.jsx)(W.b, {
                        role: "button",
                        to: "/privacy",
                        children: "Privacy"
                    }), Object(Y.jsx)(W.b, {
                        role: "button",
                        to: "/feedback",
                        children: "Feedback"
                    })]
                }), Object(Y.jsx)("div", {
                    id: "dialog-container"
                }), !K.isDesktop(n) && Object(Y.jsx)(Ee, {
                    actions: e.bottomBarActions
                })]
            })
        }, Ja = function(e) {
            var n = Object(o.useState)([])
              , a = Object(d.a)(n, 2)
              , i = a[0]
              , l = a[1]
              , s = Object(o.useState)({
                screenType: K.getScreenType(window.innerWidth, window.innerHeight),
                setBottomBarActions: function(e) {
                    l(e)
                }
            })
              , r = Object(d.a)(s, 2)
              , c = r[0]
              , u = r[1]
              , v = Object(m.usePreloadedQuery)(j, e.announcementData)
              , p = Object(m.usePreloadedQuery)(y, e.userData)
              , h = Object(m.usePreloadedQuery)(Jn, e.googleCalendarQuery)
              , g = Object(m.usePreloadedQuery)(Jn, e.googleAuthQuery)
              , f = void 0 !== Ra ? Ra : Ra = t(501)
              , k = Object(m.useFragment)(f, null === p || void 0 === p ? void 0 : p.currentUser)
              , O = void 0 !== Ca ? Ca : Ca = t(502)
              , E = Object(m.useFragment)(O, null === h || void 0 === h ? void 0 : h.googleOAuthUrl)
              , T = Object(m.useFragment)(O, null === g || void 0 === g ? void 0 : g.googleOAuthUrl)
              , w = Object(o.useState)({
                calendar: E,
                auth: T
            })
              , x = Object(d.a)(w, 2)
              , S = x[0]
              , N = (x[1],
            function() {
                var e = K.getScreenType(window.innerWidth, window.innerHeight);
                u({
                    screenType: e,
                    setBottomBarActions: function(e) {
                        l(e)
                    }
                })
            }
            );
            return Object(o.useEffect)((function() {
                return window.addEventListener("resize", N),
                function() {
                    window.removeEventListener("resize", N)
                }
            }
            ), []),
            Object(o.useEffect)((function() {
                b.setUserId(null === k || void 0 === k ? void 0 : k.id)
            }
            ), [k]),
            Object(Y.jsx)(G.Provider, {
                value: c,
                children: Object(Y.jsx)(V.Provider, {
                    value: null === v || void 0 === v ? void 0 : v.getAnnouncement,
                    children: Object(Y.jsx)(U.Provider, {
                        value: null === p || void 0 === p ? void 0 : p.currentUser,
                        children: Object(Y.jsx)(B.Provider, {
                            value: S,
                            children: Object(Y.jsx)(Qa, {
                                resetRelayEnv: e.resetRelayEnv,
                                bottomBarActions: i
                            })
                        })
                    })
                })
            })
        }, Xa = t(29), ei = t.n(Xa), ni = t(231), ti = t(12), ai = t(43), ii = t(235), li = null, si = null, oi = function() {
            return si = new ai.RelayNetworkLayer([Object(ai.cacheMiddleware)({
                size: 100,
                ttl: 9e5
            }), Object(ai.urlMiddleware)({
                url: function(e) {
                    return "".concat("https://api.lettucemeet.com", "/graphql")
                }
            }), Object(ai.loggerMiddleware)(), Object(ai.errorMiddleware)(), Object(ai.perfMiddleware)(), Object(ai.retryMiddleware)({
                fetchTimeout: 15e3,
                retryDelays: function(e) {
                    return 100 * Math.pow(2, e + 4)
                },
                beforeRetry: function(e) {
                    var n = e.forceRetry
                      , t = e.abort
                      , a = e.delay
                      , i = e.attempt;
                    e.lastError,
                    e.req;
                    i > 5 && t(),
                    window.forceRelayRetry = n,
                    h.log("call `forceRelayRetry()` for immediately retry! Or wait " + a + " ms.")
                },
                statusCodes: [500, 503, 504]
            }), Object(ai.authMiddleware)({
                allowEmptyToken: !0,
                header: "Authorization",
                prefix: "Bearer ",
                token: ue.getSessionToken,
                tokenRefreshPromise: null
            }), Object(ai.progressMiddleware)({
                onProgress: function(e, n) {
                    h.log("Downloaded: " + e + " B, total: " + n + " B")
                }
            }), Object(ai.uploadMiddleware)(), function(e) {
                return function() {
                    var n = Object(ni.a)(ei.a.mark((function n(t) {
                        var a, i, l;
                        return ei.a.wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    return h.groupCollapsed(t.relayReqId),
                                    h.log(null === (a = t.relayReqObj) || void 0 === a ? void 0 : a.getQueryString()),
                                    h.log("Variables", null === (i = t.relayReqObj) || void 0 === i ? void 0 : i.getVariables()),
                                    h.groupEnd(),
                                    h.log("RelayRequest", t),
                                    n.next = 7,
                                    e(t);
                                case 7:
                                    return l = n.sent,
                                    h.log("RelayResponse", l),
                                    n.abrupt("return", l);
                                case 10:
                                case "end":
                                    return n.stop()
                                }
                        }
                        ), n)
                    }
                    )));
                    return function(e) {
                        return n.apply(this, arguments)
                    }
                }()
            }
            ]),
            li = new ti.Environment({
                log: Object(ii.a)(),
                network: si,
                store: new ti.Store(new ti.RecordSource,{})
            })
        };
        oi();
        var ri = li
          , ci = function(e) {
            var n = Object(o.useState)(ri)
              , t = Object(d.a)(n, 2)
              , a = t[0]
              , i = t[1]
              , l = Object(m.loadQuery)(a, j)
              , s = Object(m.loadQuery)(a, y)
              , r = Object(m.loadQuery)(a, Jn, {
                redirectPath: "/",
                authType: P
            })
              , c = Object(m.loadQuery)(a, Jn, {
                redirectPath: "/",
                authType: I
            });
            return Object(Y.jsx)(m.RelayEnvironmentProvider, {
                environment: a,
                children: Object(Y.jsx)(Ja, {
                    resetRelayEnv: function() {
                        i(oi())
                    },
                    announcementData: l,
                    userData: s,
                    googleCalendarQuery: c,
                    googleAuthQuery: r
                })
            })
        }
          , ui = t(83)
          , di = function(e) {
            e && e instanceof Function && (Object(ui.a)(e),
            Object(ui.c)(e),
            Object(ui.b)(e),
            Object(ui.d)(e),
            Object(ui.e)(e))
        };
        s.a({
            dsn: "https://12266a599b6f4708a212525c0fd08c65@sentry.io/1764131",
            environment: "production",
            release: "d0621ba27c8d8a9dccecf7d5d3c5c92d3220b1e1"
        }),
        u.a.render(Object(Y.jsx)(r.a.StrictMode, {
            children: Object(Y.jsx)(o.Suspense, {
                fallback: Object(Y.jsx)("div", {}),
                children: Object(Y.jsx)(ci, {})
            })
        }), document.getElementById("page-wrapper"));
        di((function(e) {
            var n = e.id
              , t = e.name
              , a = e.value;
            b.trackEvent("Web Vitals", t, n, Math.round("CLS" === t ? 1e3 * a : a), !0)
        }
        ))
    }
}, [[517, 1, 2]]]);
//# sourceMappingURL=main.0670f3f4.chunk.js.map
