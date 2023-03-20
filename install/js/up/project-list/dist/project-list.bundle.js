this.BX = this.BX || {};
this.BX.Up = this.BX.Up || {};
(function (exports,main_core) {
	'use strict';

	var _templateObject, _templateObject2;
	var ProjectList = /*#__PURE__*/function () {
	  function ProjectList() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    babelHelpers.classCallCheck(this, ProjectList);
	    if (main_core.Type.isStringFilled(options.rootNodeId)) {
	      this.rootNodeId = options.rootNodeId;
	    } else {
	      throw new Error('ProjectList: options.rootNodeId required');
	    }
	    this.rootNode = document.getElementById(this.rootNodeId);
	    if (!this.rootNode) {
	      throw new Error("ProjectList: element with id \"".concat(this.rootNodeId, "\" not found"));
	    }
	    this.projectList = [];
	    this.reload();
	  }
	  babelHelpers.createClass(ProjectList, [{
	    key: "reload",
	    value: function reload() {
	      var _this = this;
	      this.loadList().then(function (projectList) {
	        _this.projectList = projectList;
	        _this.render();
	      });
	    }
	  }, {
	    key: "loadList",
	    value: function loadList() {
	      return new Promise(function (resolve, reject) {
	        BX.ajax.runAction('up:projector.project.getList', {
	          data: {
	            apiKey: 'very_secret_key'
	          }
	        }).then(function (responce) {
	          var projectList = responce.data.projectList;
	          resolve(projectList);
	        })["catch"](function (error) {
	          console.error(error);
	        });
	      });
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      this.rootNode.innerHTML = '';
	      var moviesContainerNode = main_core.Tag.render(_templateObject || (_templateObject = babelHelpers.taggedTemplateLiteral(["<div class=\"columns\"></div>"])));
	      this.projectList.forEach(function (projectData) {
	        var projectNode = main_core.Tag.render(_templateObject2 || (_templateObject2 = babelHelpers.taggedTemplateLiteral(["\n\t\t\t\t<div class=\"column\">\n\t\t\t\t\t<div class=\"card project-card\">\n\t\t\t\t\t\t<header class=\"card-header\">\n\t\t\t\t\t\t\t<a class=\"card-header-title card-header-title-from-database\" href=\"/projects/", "/\">\n\t\t\t\t\t\t\t\t", "\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<button class=\"card-header-icon\" aria-label=\"more options\">\n\t\t\t\t\t\t\t\t<span class=\"icon disabled\">\n\t\t\t\t\t\t\t\t*\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</header>\n\t\t\t\t\t<div class=\"card-content\">\n\t\t\t\t\t\t<div class=\"content\">\n\t\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit. Autem blanditiis commodi cum dicta ex excepturi in ipsa, iusto maxime molestiae nobis non officia officiis porro sunt, tempore vel vero, voluptates!\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<footer class=\"card-footer\">\n\t\t\t\t\t\t\t<span class=\"card-footer-item is-size-7\">\n\t\t\t\t\t\t\t\t<strong>", "</strong>: 10\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span class=\"card-footer-item is-size-7\">\n\t\t\t\t\t\t\t\t<strong>", "</strong>: 20.Mar 14:49\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</footer>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t"], ["\n\t\t\t\t<div class=\"column\">\n\t\t\t\t\t<div class=\"card project-card\">\n\t\t\t\t\t\t<header class=\"card-header\">\n\t\t\t\t\t\t\t<a class=\"card-header-title card-header-title-from-database\" href=\"/projects/", "/\">\n\t\t\t\t\t\t\t\t", "\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<button class=\"card-header-icon\" aria-label=\"more options\">\n\t\t\t\t\t\t\t\t<span class=\"icon disabled\">\n\t\t\t\t\t\t\t\t*\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</header>\n\t\t\t\t\t<div class=\"card-content\">\n\t\t\t\t\t\t<div class=\"content\">\n\t\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit. Autem blanditiis commodi cum dicta ex excepturi in ipsa, iusto maxime molestiae nobis non officia officiis porro sunt, tempore vel vero, voluptates!\\t\\t\\t\\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<footer class=\"card-footer\">\n\t\t\t\t\t\t\t<span class=\"card-footer-item is-size-7\">\n\t\t\t\t\t\t\t\t<strong>", "</strong>: 10\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span class=\"card-footer-item is-size-7\">\n\t\t\t\t\t\t\t\t<strong>", "</strong>: 20.Mar 14:49\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</footer>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t"])), projectData.ID, projectData.NAME, main_core.Loc.getMessage('UP_PROJECTOR_PROJECT_LIST_TASKS_OPENED'), main_core.Loc.getMessage('UP_PROJECTOR_PROJECT_LIST_LAST_ACTIVITY'));
	        moviesContainerNode.appendChild(projectNode);
	      });
	      this.rootNode.appendChild(moviesContainerNode);
	    }
	  }]);
	  return ProjectList;
	}();

	exports.ProjectList = ProjectList;

}((this.BX.Up.Projector = this.BX.Up.Projector || {}),BX));
