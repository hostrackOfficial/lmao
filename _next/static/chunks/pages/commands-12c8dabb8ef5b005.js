(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[941], {
		2666: function(e, t, i) {
			(window.__NEXT_P = window.__NEXT_P || []).push(["/commands", function() {
				return i(8040)
			}])
		},
		856: function(e, t, i) {
			"use strict";
			i.d(t, {
				Z: function() {
					return n
				}
			});
			var s = i(5893),
				a = i(5135);

			function n(e) {
				var t = e.isOpen,
					i = e.className,
					n = e.layout,
					o = void 0 !== n && n;
				return (0, s.jsx)(a.E.i, {
					layout: o,
					animate: t ? {
						rotate: 180,
						transition: {
							bounce: !1,
							duration: 0
						}
					} : {
						rotate: 0,
						transition: {
							bounce: !1,
							duration: 0
						}
					},
					className: "fas fa-chevron-down " + i
				})
			}
		},
		8040: function(e, t, i) {
			"use strict";
			i.r(t), i.d(t, {
				default: function() {
					return y
				}
			});
			var s = i(5893),
				a = i(7294),
				n = i(116),
				o = i(5135),
				c = i(5421),
				l = i(5926),
				r = i(2262),
				d = i.n(r);

			function m(e) {
				var t = e.categories,
					i = e.setCategory,
					a = e.selectedCategory;
				return (0, s.jsx)("div", {
					children: t.categories.map((function(e, t) {
						return (0, s.jsx)("div", {
							children: (0, s.jsxs)("div", {
								onClick: function() {
									i(e.name)
								},
								className: d()["menu-btn"] + " " + (e.name === a ? d().selectedCategory : d().hoveredCategory),
								children: [(0, s.jsx)("i", {
									className: e.icon
								}), e.display]
							})
						}, t)
					}))
				})
			}
			var u = i(856);

			function h(e) {
				var t = e.commands,
					i = e.selectedCategory,
					a = t.commands[i];
				return (0, s.jsx)(s.Fragment, {
					children: a.commands.map((function(e, t) {
						return (0, s.jsx)(o.E.div, {
							variants: {
								hidden: function(e) {
									return {
										opacity: 0
									}
								},
								visible: function(e) {
									return {
										opacity: 1,
										transition: {
											delay: .05 * e
										}
									}
								}
							},
							custom: t,
							className: "flex gap-20 flex-row text-left items-center ",
							initial: "hidden",
							animate: "visible",
							exit: "hidden",
							layout: !0,
							children: (0, s.jsx)(f, {
								y: e
							})
						}, t)
					}))
				})
			}

			function f(e) {
				var t = e.y,
					i = (0, a.useState)(!1),
					n = i[0],
					r = i[1];
				return (0, s.jsxs)(o.E.div, {
					layout: !0,
					className: "flex-1 p-3 rounded-md  transition duration-300 hover:bg-slate-600 hover:bg-opacity-80" + (n ? " bg-dark-5" : " bg-dark-2 "),
					children: [(0, s.jsxs)(o.E.div, {
						layout: !0,
						onClick: function() {
							r(!n)
						},
						className: "flex flex-row cursor-pointer",
						children: [(0, s.jsx)("div", {
							className: "relative mr-7 flex items-center",
							children: (0, s.jsx)("div", {
								className: d()[t.status]
							})
						}), (0, s.jsx)(l.Z, {
							className: "select-none",
							children: t.command
						}), (0, s.jsx)(o.E.div, {
							layout: !0,
							className: "ml-auto",
							children: (0, s.jsx)(u.Z, {
								isOpen: n,
								className: "self-center"
							})
						})]
					}), (0, s.jsx)(c.M, {
						children: n && (0, s.jsx)(o.E.div, {
							layout: !0,
							initial: {
								opacity: 0
							},
							animate: {
								opacity: 1,
								transition: {
									duration: .5
								}
							},
							className: "bg-dark-1 p-3 rounded-md mt-3 mx-3 overflow-hidden",
							children: (0, s.jsx)(l.Z, {
								className: "flex-1",
								children: t.desc
							})
						})
					})]
				})
			}
			var p = JSON.parse('{"categories":[{"name":"general","display":"General","icon":"fa fa-cog"},{"name":"verification","display":"Verification","icon":"fa fa-check"},{"name":"protections","display":"Protections","icon":"fa fa-shield"},{"name":"moderation","display":"Moderation","icon":"fa fa-gavel"},{"name":"whitelist","display":"Whitelisting","icon":"fas fa-user-tag"}]}'),
				v = JSON.parse('{"commands":{"general":{"commands":[{"command":"/help","desc":"Sends **help** panel.","status":"active"},{"command":"/language **<language>**","desc":"Specifies the language of Verifier. Available languages are **Turkish** and **English**.","status":"active"},{"command":"/log channel set **<#channel>**","desc":"Sets the log channel of the Verifier. Log channel is **mandatory for some features** in Verifier.","status":"active"},{"command":"/log channel delete","desc":"Removes log channel from Verifier\'s configuration.","status":"active"},{"command":"/log channel create **[name]**","desc":"Creates a new channel and sets it as a log channel.","status":"active"},{"command":"/log send **<color> <description> <timestamp> [title]**","desc":"Sends log message to the log channel *(if it has been set)* with given properties. **If you want to make a new line in description, you can use use `<>`**.","status":"active"},{"command":"/link-premium","desc":"If you have purchased premium membership from patreon page, **you have to link your premium with this command**. If you have used it in one guild, you cannot use it another server.","status":"active"},{"command":"/bot-stats","desc":"Displays bot status.","status":"active"}]},"verification":{"commands":[{"command":"/verification create **<type> <welcome message> <welcome channel> <unverified role> <verified role> <emoji> [2nd verified role] [3rd verified role]**","desc":"Creates new verification system. If you want to make it as in Verifier support server, **you have to adjust permissions of the roles and channels**. Verifier does not handle channel permissions, since it can cause undesirable problems. **Unverified role is given automatically when users are joined to server. If you want to make a new line in welcome message, you can use `<>`**.","status":"active"},{"command":"/verification delete","desc":"Deletes current verification system if it exists.","status":"active"},{"command":"/verification type **<type>**","desc":"Adjusts verification system type. Available types are **CAPTCHA** and **Click To Pass**.","status":"active"},{"command":"/verification info","desc":"Displays current verification system informations. This includes type, channel, unverified and verified role(s), emoji and verified user count.","status":"active"},{"command":"/verification message send-new-message **[channel]**","desc":"Sends new verification message. If you have deleted verification message accidentally or want to carry the message to another channel; you can send new one with this command.","status":"active"},{"command":"/verification message edit-channel-message **<embed color> [description] [title] [button color] [emoji] [button text] [image-url]**","desc":"This commands allows you to edit verification message completely. **If you want to make a new line in description, you can use use `<>`**.","status":"active","premium_only":true},{"command":"/verification message edit-dm-message **<embed color> [description] [title]**","desc":"This commands allows you to edit verification message completely. **If you want to make a new line in description, you can use use `<>`**.","status":"active","premium_only":true},{"command":"/verification verify **<user>**","desc":"You can manually verify an user with this command.","status":"active","premium_only":true}]},"protections":{"commands":[{"command":"/lock add **<#channel>**","desc":"Locks the channel for users who don\'t have administrator role.","status":"active"},{"command":"/lock add-all","desc":"Locks all text channels. This process may take time.","status":"active"},{"command":"/lock delete **<#channel>**","desc":"Unlocks the channel if it is locked.","status":"active"},{"command":"/lock delete-all","desc":"Unlocks all locked text channels. This process may take time.","status":"active"},{"command":"/lock list","desc":"Displays locked channels with their timestamps.","status":"active"},{"command":"/protections","desc":"Sends a list that displays all of the protections and **selected protections\' status will be reverted**. If it is on it will be off or visa versa.","status":"active"},{"command":"/protection-punishments text **<protection> <punishment> <threshold> <threshold clear interval> [quantity of mute time] [unit of mute time]**","desc":"Selected punishment will be applied to selected protection. **If mute is selected as punishment then quantity and unit of the mute time should be specified**.","status":"active"},{"command":"/protection-punishments non-text **<protection> <punishment> <threshold> <threshold clear interval>**","desc":"Selected punishment will be applied to selected protection.","status":"active"},{"command":"/protection-punishments log-channel set **<protection> <#channel>**","desc":"Selected channel will be set as log channel of selected protection.","status":"active"},{"command":"/protection-punishments list","desc":"Displays detailed punishment and log channel list of the protections.","status":"active"},{"command":"/protection-punishments log-channel delete **<protection>**","desc":"Deletes log channel of the selected protection from configuration of Verifier.","status":"active"},{"command":"/alt-identifier on **<required day to join> <action>**","desc":"Members who have joined Discord before the day you set will be punished or logged. **Log channel is mendatory for this command**. If log channel is deleted after turned on; alt identifier won\'t work until new log channel is set.","status":"active"},{"command":"/alt-identifier off","desc":"Turns off alt identifier.","status":"active"},{"command":"/alt-identifier info","desc":"Displays the information about current alt identifier system. Kicked, banned or logged alts exc.","status":"active"}]},"moderation":{"commands":[{"command":"/clear **<1 \u2264 number of messages \u2264 200>**","desc":"Verifier will delete given amount of messages. **Message count should be between 1 and 200**.","status":"active"},{"command":"/mute **<@user> <quantity of time> <unit of time> [reason]**","desc":"Timeouts user until given amount of time is passed.","status":"active"},{"command":"/unmute **<@user> [reason]**","desc":"Unmutes the user if muted.","status":"active"},{"command":"/on-join-announcer create **<message> <#channel-to-be-announced> <is-embed> <is-sync-with-verification>**","desc":"Sends message to the specified channel when user is joined.","status":"active"},{"command":"/on-join-announcer delete","desc":"Deletes current on join announcer system.","status":"active"},{"command":"/on-join-announcer info","desc":"Sends information about current on join announcer system.","status":"active"},{"command":"/on-join-announcer edit **[message] [channel-to-be-announced] [is-embed] [is-sync-with-verification]**","desc":"Edits current on join announcer system.","status":"active"}]},"whitelist":{"commands":[{"command":"/whitelist add user **<@user> [whitelist type]**","desc":"Adds the user to specified whitelist type. **If whitelist type is not specified then user will be added to all protections whitelist**.","status":"active"},{"command":"/whitelist remove user **<@user> [whitelist type]**","desc":"Removes the user from specified whitelist type. **If whitelist type is not specified then user will be removed from all protections whitelist**.","status":"active"},{"command":"/whitelist add channel **<#channel or category> [whitelist type]**","desc":"Adds the channel or category to specified whitelist type. **If whitelist type is not specified then channel or category will be added to all protections whitelist**. *(If category is whitelisted then all of the child channels will be counted as they are whitelisted.)*","status":"active"},{"command":"/whitelist remove channel **<#channel or category> [whitelist type]**","desc":"Removes the channel or category from specified whitelist type. **If whitelist type is not specified then channel or category will be removed from all protections whitelist**.","status":"active"},{"command":"/whitelist add role **<@role> [whitelist type]**","desc":"Adds the role to specified whitelist type. **If whitelist type is not specified then role will be added to all protections whitelist**.","status":"active"},{"command":"/whitelist remove role **<@role> [whitelist type]**","desc":"Removes the role or category from specified whitelist type. **If whitelist type is not specified then role or category will be removed from all protections whitelist**.","status":"active"},{"command":"/whitelist purge **[whitelist category]**","desc":"Selected category will be purged. That means all of the entites will be removed from specified category. **If category is not specified then all of the categories will be purged**.","status":"active"},{"command":"/whitelist find **<whitelist category> <ID of the entity>**","desc":"Searchs through entities in specified category and displays whitelists of it.","status":"active"},{"command":"/whitelist list","desc":"Sends the whitelisted entities list that can be switched between categories.","status":"active"}]}}}');
			var y = function() {
				var e = (0, a.useState)("general"),
					t = e[0],
					i = e[1],
					r = (0, a.useState)("general"),
					u = r[0],
					f = r[1],
					y = (0, a.useState)(!0),
					g = y[0],
					w = y[1];
				return (0, a.useEffect)((function() {
					w(!1), setTimeout((function() {
						f(t), w(!0)
					}), 750)
				}), [t]), (0, s.jsx)(s.Fragment, {
					children: (0, s.jsx)("div", {
						children: (0, s.jsx)("div", {
							
							children: (0, s.jsxs)("div", {
								
								children: [(0, s.jsx)("div", {
									className: d().info_div + " bg-dark-4",
									
								}), (0, s.jsxs)("div", {
									className: "justify-center md:grid md:grid-cols-8 gap-x-4",
									children: [(0, s.jsx)("div", {
										className: "col-span-2 relative",
										children: (0, s.jsx)("div", {
											className: "md:absolute md:min-h-screen w-full",
											children: (0, s.jsxs)("div", {
												className: "bg-dark-3 p-4 md:sticky top-28 rounded-lg space-y-2 transform duration-300",
												id: "category",
												children: [(0, s.jsx)("p", {
													className: "font-bold text-white text-lg mb-2",
													children: "Quick Menu"
												}), (0, s.jsx)(m, {
													categories: p,
													setCategory: i,
													selectedCategory: t
												})]
											})
										})
									}), (0, s.jsx)(n.s, {
										children: (0, s.jsx)(o.E.div, {
											layout: !0,
											className: "col-span-6 bg-dark-3 flex flex-col gap-y-7 p-5 w-full",
											children: (0, s.jsx)(c.M, {
												children: g && (0, s.jsx)(h, {
													commands: v,
													selectedCategory: u
												})
											})
										})
									})]
								})]
							})
						})
					})
				})
			}
		},
		2262: function(e) {
			e.exports = {
				header: "commands_header__30tNy",
				info_div: "commands_info_div__Es5I9",
				"menu-btn": "commands_menu-btn__epHAX",
				selectedCategory: "commands_selectedCategory__qTIki",
				hoveredCategory: "commands_hoveredCategory__TanFq",
				active: "commands_active__1xzlc",
				deactive: "commands_deactive__dAvml"
			}
		}
	},
	function(e) {
		e.O(0, [926, 774, 888, 179], (function() {
			return t = 2666, e(e.s = t);
			var t
		}));
		var t = e.O();
		_N_E = t
	}
]);