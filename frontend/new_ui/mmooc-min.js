this["mmooc"] = this["mmooc"] || {};
this["mmooc"]["templates"] = this["mmooc"]["templates"] || {};

this["mmooc"]["templates"]["actionbutton"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"mmooc-action-button\">\n    <a href=\"#\" id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"btn btn-done\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\n</div>\n";
  return buffer;
  });

this["mmooc"]["templates"]["activitystream"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <li class=\""
    + escapeExpression((helper = helpers.checkReadStateFor || (depth0 && depth0.checkReadStateFor),options={hash:{},data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "checkReadStateFor", depth0, options)))
    + "\"><a href=\""
    + escapeExpression((helper = helpers.findRightUrlFor || (depth0 && depth0.findRightUrlFor),options={hash:{},data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "findRightUrlFor", depth0, options)))
    + "\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "<br><span class=\"mmooc-notification-type\">"
    + escapeExpression((helper = helpers.localize || (depth0 && depth0.localize),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.type), options) : helperMissing.call(depth0, "localize", (depth0 && depth0.type), options)))
    + "</span></a></li>\n";
  return buffer;
  }

  buffer += "<ul id=\"mmooc-notifications\">\n";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.activities), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n</ul>\n\n<a href=\"#\" id=\"mmooc-notifications-showall\">Vis alle</a>";
  return buffer;
  });

this["mmooc"]["templates"]["assignmentPageWithPeerReviewRightSide"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return " late";
  }

function program3(depth0,data) {
  
  
  return " (for sen)";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n				<ul class=\"mmooc-assignment-files\">\n					";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.submission)),stack1 == null || stack1 === false ? stack1 : stack1.attachments), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n				</ul>\n            ";
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                        <li>\n							<a href=\"";
  if (helper = helpers.url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"file-big\">";
  if (helper = helpers.display_name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.display_name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\n						</li>\n                    ";
  return buffer;
  }

function program8(depth0,data) {
  
  
  return "\n				<li>Ingen innleveringer tildelt</li>\n			";
  }

function program10(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n				<li>\n					<a class=\""
    + escapeExpression((helper = helpers.getPeerReviewWorkflowIconClass || (depth0 && depth0.getPeerReviewWorkflowIconClass),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.workflow_state), options) : helperMissing.call(depth0, "getPeerReviewWorkflowIconClass", (depth0 && depth0.workflow_state), options)))
    + "\" href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.assessor)),stack1 == null || stack1 === false ? stack1 : stack1.mmooc_url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.assessor)),stack1 == null || stack1 === false ? stack1 : stack1.display_name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n				</li>	\n			";
  return buffer;
  }

  buffer += "<div class=\"mmooc-assignment-rightside\">\n	<div class=\"mmooc-assignment-responses\">\n		<h3>Besvarelser</h3>\n		<div class=\"mmooc-assignment-responses-contents\">\n			<p class=\"mmooc-assignment-delivery-date";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.submission)),stack1 == null || stack1 === false ? stack1 : stack1.late), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">Levert "
    + escapeExpression((helper = helpers.norwegianDateAndTime || (depth0 && depth0.norwegianDateAndTime),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.submission)),stack1 == null || stack1 === false ? stack1 : stack1.submitted_at), options) : helperMissing.call(depth0, "norwegianDateAndTime", ((stack1 = (depth0 && depth0.submission)),stack1 == null || stack1 === false ? stack1 : stack1.submitted_at), options)));
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.submission)),stack1 == null || stack1 === false ? stack1 : stack1.late), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n			";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.submission)),stack1 == null || stack1 === false ? stack1 : stack1.attachments), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		</div>\n		<div class=\"mmooc-assignment-details\">\n			<a href=\""
    + escapeExpression((helper = helpers.getPathFromUrl || (depth0 && depth0.getPathFromUrl),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.submission)),stack1 == null || stack1 === false ? stack1 : stack1.preview_url), options) : helperMissing.call(depth0, "getPathFromUrl", ((stack1 = (depth0 && depth0.submission)),stack1 == null || stack1 === false ? stack1 : stack1.preview_url), options)))
    + "\">Vis detaljer om innlevering &raquo;</a>\n		</div>\n	</div>\n	<div class=\"mmooc-peer-reviews\">\n		<h3>Hverandrevurdering tildelt deg</h3>\n		<ul class=\"unstyled_list\">\n			";
  stack1 = helpers.unless.call(depth0, ((stack1 = (depth0 && depth0.peerReview)),stack1 == null || stack1 === false ? stack1 : stack1.length), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.peerReview), {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		</ul>\n	</div>\n</div>\n";
  return buffer;
  });

this["mmooc"]["templates"]["assignmentPageWithPeerReviewSaveRubricButton"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<button type=\"button\" id=\"mmooc_save_rubric_button\" class=\"save_rubric_button btn btn-small\">Lagre kommentar</button>";
  });

this["mmooc"]["templates"]["assignmentPageWithPeerReviewWarning"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"mmooc-peer-review-warning\">\n	<p class=\"mmooc-warning\">\n		Denne oppgaven er ikke ferdig før du har fylt ut vurderingsskjemaet til hver tildelte hverandrevurdering\n	</p>\n</div>";
  });

this["mmooc"]["templates"]["assignmentSubmission"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return " late";
  }

function program3(depth0,data) {
  
  
  return " (for sen)";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n							<span class=\"mmooc-assignment-delivered-by\"> av "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.submission)),stack1 == null || stack1 === false ? stack1 : stack1.user)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n						";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n			";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isPeerReviewFinished), {hash:{},inverse:self.program(10, program10, data),fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		";
  return buffer;
  }
function program8(depth0,data) {
  
  
  return "\n				<div class=\"mmooc-peer-review-success\">\n					<p class=\"mmooc-success singleLine\">\n						Du har fullført hverandrevurderingen.\n					</p>\n				</div>\n			";
  }

function program10(depth0,data) {
  
  
  return "\n				<div class=\"mmooc-peer-review-warning\">\n					<p class=\"mmooc-warning singleLine\">\n						Denne oppgaven er ikke ferdig før du har fylt ut vurderingsskjemaet.\n					</p>\n				</div>\n			";
  }

function program12(depth0,data) {
  
  
  return "\n					<h3>Din vurdering</h3>\n				";
  }

function program14(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n					";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isTeacherViewingStudentsSubmission), {hash:{},inverse:self.program(17, program17, data),fn:self.program(15, program15, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n					\n				";
  return buffer;
  }
function program15(depth0,data) {
  
  
  return "\n						<h3>Vurdering av besvarelse</h3>\n					";
  }

function program17(depth0,data) {
  
  
  return "\n						<h3>Vurdering av din besvarelse</h3>	\n					";
  }

function program19(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n				<p class=\"assessment\">Karakter: "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.submission)),stack1 == null || stack1 === false ? stack1 : stack1.grade)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.assignment)),stack1 == null || stack1 === false ? stack1 : stack1.points_possible)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n				";
  return buffer;
  }

function program21(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n					";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.isPeerReviewFinished), {hash:{},inverse:self.noop,fn:self.program(22, program22, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n					<a href=\"#\" class=\"open-assessment-dialog-button\">Vurderingsskjema</a>\n				";
  return buffer;
  }
function program22(depth0,data) {
  
  
  return "\n						<p class=\"assessment-warning\">Du har ikke vurdert denne oppgaven.</p>\n					";
  }

function program24(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n					<p class=\"assessment-text\">"
    + escapeExpression((helper = helpers.getSubmissionAssessmentText || (depth0 && depth0.getSubmissionAssessmentText),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.peerReview), options) : helperMissing.call(depth0, "getSubmissionAssessmentText", (depth0 && depth0.peerReview), options)))
    + "</p>\n					<a href=\"#\" class=\"open-assessment-dialog-button\">Vis vurdering</a>\n				";
  return buffer;
  }

function program26(depth0,data) {
  
  
  return " isPeerReviewPage";
  }

function program28(depth0,data) {
  
  
  return " isSubmissionDetaisPage";
  }

function program30(depth0,data) {
  
  
  return " withGradesText";
  }

function program32(depth0,data) {
  
  
  return " withNoGradesText";
  }

  buffer += "<div class=\"mmooc-assignment-submission\">\n	<div class=\"mmooc-assignment-submission-leftside\">\n		<div class=\"mmooc-assignment-submission-metadata\">\n			<h2 class=\"mmooc-assignment-submission-header\">";
  if (helper = helpers.submissionTitle) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.submissionTitle); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h2>\n			<ul class=\"mmooc-assignment-submission-metadata-list\">\n				<li>\n					<span class=\"title\">Oppgave:</span>\n					<span class=\"value\"><a href=\"/courses/"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.submission)),stack1 == null || stack1 === false ? stack1 : stack1.course)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/assignments/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.submission)),stack1 == null || stack1 === false ? stack1 : stack1.assignment_id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.assignment)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></span>\n				</li>\n				<li>\n					<span class=\"title\">Innlevert:</span>\n					<span class=\"value\">\n						<span class=\"mmooc-assignment-delivery-date";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.submission)),stack1 == null || stack1 === false ? stack1 : stack1.late), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">"
    + escapeExpression((helper = helpers.norwegianDateAndTime || (depth0 && depth0.norwegianDateAndTime),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.submission)),stack1 == null || stack1 === false ? stack1 : stack1.submitted_at), options) : helperMissing.call(depth0, "norwegianDateAndTime", ((stack1 = (depth0 && depth0.submission)),stack1 == null || stack1 === false ? stack1 : stack1.submitted_at), options)));
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.submission)),stack1 == null || stack1 === false ? stack1 : stack1.late), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n						";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isPeerReview), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n						";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isTeacherViewingStudentsSubmission), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n					</span>\n				</li>\n			</ul>\n		</div>\n		";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isPeerReview), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</div>\n	<div class=\"mmooc-assignment-submission-rightside\">\n		<div class=\"mmooc-assignment-submission-assessment\">\n			<div class=\"mmooc-assignment-submission-assessment-header\">\n				";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isPeerReview), {hash:{},inverse:self.program(14, program14, data),fn:self.program(12, program12, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			</div>\n			<div class=\"mmooc-assignment-submission-assessment-contents\">\n				";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.submission)),stack1 == null || stack1 === false ? stack1 : stack1.grade), {hash:{},inverse:self.noop,fn:self.program(19, program19, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n				";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isPeerReview), {hash:{},inverse:self.program(24, program24, data),fn:self.program(21, program21, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			</div>\n		</div>\n	</div>\n</div>\n<div class=\"mmooc-assignment-submission-answers";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isPeerReview), {hash:{},inverse:self.program(28, program28, data),fn:self.program(26, program26, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.submission)),stack1 == null || stack1 === false ? stack1 : stack1.grade), {hash:{},inverse:self.program(32, program32, data),fn:self.program(30, program30, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n	<h3>Besvarelser</h3>\n</div>";
  return buffer;
  });

this["mmooc"]["templates"]["backbutton"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"mmooc-back-button\">\n    <a href=\"";
  if (helper = helpers.url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\n</div>\n";
  return buffer;
  });

this["mmooc"]["templates"]["courselist"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n            <div id=\"course_";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"mmooc-size-1of3\">\n                <div class=\"mmooc-course-list-item\">\n                    <div class=\"mmooc-course-list-heading\">\n                        <h2><a href=\""
    + escapeExpression((helper = helpers.urlForCourseId || (depth0 && depth0.urlForCourseId),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.id), options) : helperMissing.call(depth0, "urlForCourseId", (depth0 && depth0.id), options)))
    + "\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></h2>\n                    </div>\n\n                    <div class=\"mmooc-course-list-description\">\n						";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.syllabus_body), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    </div>\n                </div>\n            </div>\n\n		";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n\n							";
  if (helper = helpers.syllabus_body) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.syllabus_body); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n						";
  return buffer;
  }

  buffer += "<div class=\"mmooc-course-list\">\n    <h1>Mine studier</h1>\n    <div class=\"mmooc-row\">\n		";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.courses), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n</div>";
  return buffer;
  });

this["mmooc"]["templates"]["courselistprogress"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    	<a href=\""
    + escapeExpression((helper = helpers.urlForCourseId || (depth0 && depth0.urlForCourseId),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.id), options) : helperMissing.call(depth0, "urlForCourseId", (depth0 && depth0.id), options)))
    + "\" class=\"btn rounded ";
  stack1 = helpers['with'].call(depth0, (depth0 && depth0.course_progress), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">"
    + escapeExpression(((stack1 = (depth1 && depth1.navname)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n    ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.requirement_count), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += " ";
  stack1 = (helper = helpers.ifEquals || (depth0 && depth0.ifEquals),options={hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.requirement_completed_count), (depth0 && depth0.requirement_count), options) : helperMissing.call(depth0, "ifEquals", (depth0 && depth0.requirement_completed_count), (depth0 && depth0.requirement_count), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  return buffer;
  }
function program4(depth0,data) {
  
  
  return " btn-done ";
  }

function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		";
  stack1 = helpers['with'].call(depth0, (depth0 && depth0.course_progress), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	";
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n			";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.requirement_count), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		";
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n	            <div class=\"mmooc-progress-bar";
  stack1 = (helper = helpers.ifEquals || (depth0 && depth0.ifEquals),options={hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.requirement_completed_count), (depth0 && depth0.requirement_count), options) : helperMissing.call(depth0, "ifEquals", (depth0 && depth0.requirement_completed_count), (depth0 && depth0.requirement_count), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n	                <div class=\"mmooc-progress-bar-inner\" style=\"width:"
    + escapeExpression((helper = helpers.percentage || (depth0 && depth0.percentage),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.requirement_completed_count), (depth0 && depth0.requirement_count), options) : helperMissing.call(depth0, "percentage", (depth0 && depth0.requirement_completed_count), (depth0 && depth0.requirement_count), options)))
    + "%\">\n	                </div>\n	            </div>\n			";
  return buffer;
  }
function program9(depth0,data) {
  
  
  return " mmooc-progress-bar-done";
  }

  buffer += "<div class=\"mmooc-course-list-button\">\n	";
  stack1 = helpers['with'].call(depth0, (depth0 && depth0.course), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n\n<div class=\"mmooc-course-list-progress\">\n	";
  stack1 = helpers['with'].call(depth0, (depth0 && depth0.course), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n";
  return buffer;
  });

this["mmooc"]["templates"]["coursemenu"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += " class=\"no-tabs\"";
  if (helper = helpers.subtitle) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.subtitle); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1);
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "<span class=\"h1-sub-heading\">";
  if (helper = helpers.subtitle) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.subtitle); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <ul class=\"mmooc-course-tabs\">\n            ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.menuItems), {hash:{},inverse:self.noop,fn:self.programWithDepth(6, program6, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </ul>\n        ";
  return buffer;
  }
function program6(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                <li class=\"mmooc-course-tab ";
  stack1 = (helper = helpers.ifEquals || (depth0 && depth0.ifEquals),options={hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.title), (depth1 && depth1.selectedMenuItem), options) : helperMissing.call(depth0, "ifEquals", (depth0 && depth0.title), (depth1 && depth1.selectedMenuItem), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"><a href=\"";
  if (helper = helpers.url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></li>\n            ";
  return buffer;
  }
function program7(depth0,data) {
  
  
  return "selected";
  }

  buffer += "<div id=\"mmooc-course-tabs-container\"";
  stack1 = helpers.unless.call(depth0, ((stack1 = (depth0 && depth0.menuItems)),stack1 == null || stack1 === false ? stack1 : stack1.length), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n    <div id=\"mmooc-course-tabs-container-inner\">\n\n        <h1>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h1>\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.subtitle), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        \n        ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.menuItems)),stack1 == null || stack1 === false ? stack1 : stack1.length), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n</div>";
  return buffer;
  });

this["mmooc"]["templates"]["courseprogress"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return " mmooc-progress-bar-done";
  }

  buffer += "<div class=\"mmooc-course-progress\">\n    <div>\n        <div class=\"mmooc-course-progress-label\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n        <div class=\"mmooc-course-progress-bar\">\n            <div class=\"mmooc-progress-bar";
  stack1 = (helper = helpers.ifAllModulesCompleted || (depth0 && depth0.ifAllModulesCompleted),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.modules), options) : helperMissing.call(depth0, "ifAllModulesCompleted", (depth0 && depth0.modules), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n                <div class=\"mmooc-progress-bar-inner\" style=\"width:"
    + escapeExpression((helper = helpers.percentageForModules || (depth0 && depth0.percentageForModules),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.modules), options) : helperMissing.call(depth0, "percentageForModules", (depth0 && depth0.modules), options)))
    + "%\">\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>";
  return buffer;
  });

this["mmooc"]["templates"]["footer-license"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<footer role=\"contentinfo\" id=\"mmooc-footer\" class=\"ic-app-footer\">\n    <div class=\"mmooc-license\">\n        <p class=\"public-license-text\">Lisensnivå: Illustrasjoner og filmer utviklet i regi av prosjektet: <a href=\"http://creativecommons.org/licenses/by-nc-nd/4.0/\" class=\"external\" target=\"_blank\" rel=\"license\"><span>CC BY-NC-ND 4.0</span></a><br>\n        Annet innhold utviklet i regi av prosjektet: <a href=\"http://creativecommons.org/licenses/by-nc-sa/4.0\" class=\"external\" target=\"_blank\" rel=\"license\"><span>CC BY-NC-SA 4.0</span></a>\n        </p>\n    </div>\n</footer>";
  });

this["mmooc"]["templates"]["groupdiscussionGetHelpFromTeacher"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"getTeachersHelpContainer\">\n    <button type=\"button\" id=\"mmooc-get-teachers-help\" class=\"btn btn-primary getTeachersHelp\">Tilkall veileder</button>\n</div>";
  });

this["mmooc"]["templates"]["groupdiscussionheader"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div id=\"mmooc-group-header\">\n    <div id=\"mmooc-group-members\">\n        <div class=\"mmooc-back-button\">\n            <a href=\"/groups/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.group)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/discussion_topics\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.group)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n        </div>\n    </div>\n    <div id=\"mmooc-group-links\">\n    </div>\n\n</div>\n";
  return buffer;
  });

this["mmooc"]["templates"]["groupheader"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                <div class=\"mmooc-group-member\">\n                    <div class=\"mmooc-group-member-avatar\" style=\"background-image: url('";
  if (helper = helpers.avatar_url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.avatar_url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\"></div>\n                    <div class=\"mmooc-group-member-link\">\n                        <a href=\"/about/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\n                    </div>\n                </div>\n            ";
  return buffer;
  }

  buffer += "<div class=\"mmooc-back-button\">\n    <a href=\""
    + escapeExpression((helper = helpers.urlForCourseId || (depth0 && depth0.urlForCourseId),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.courseId), options) : helperMissing.call(depth0, "urlForCourseId", (depth0 && depth0.courseId), options)))
    + "/groups\">Tilbake til kursgrupper</a>\n</div>\n<div id=\"mmooc-group-header\">\n    <div id=\"mmooc-group-members\">\n        <p><b>Gruppemedlemmer</b></p>\n\n        <div class=\"mmooc-group-members-list\">\n            ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.members), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n    </div>\n    <div id=\"mmooc-group-links\">\n        <p>\n            <a target=\"_new\" href=\"https://connect.uninett.no/uit-videorom-matematikkmooc-";
  if (helper = helpers.groupId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.groupId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"external\"><b>Videorom for gruppa</b> <span class=\"ui-icon ui-icon-extlink ui-icon-inline\" title=\"Lenker til en ekstern side.\"></span></a>\n        </p>\n    </div>\n\n</div>\n";
  return buffer;
  });

this["mmooc"]["templates"]["moduleitems"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, self=this, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n        <div class=\"header\">\n            ";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n        </div>\n\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.items), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <ul class=\"mmooc-module-items\">\n                ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.items), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </ul>\n        ";
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                    <li class=\"mmooc-module-item mmooc-module-item-icon\">\n                        <a class=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isCurrent), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" href=\"";
  if (helper = helpers.html_url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.html_url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n                            <span class=\"mmooc-module-item-title\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n                            <span class=\"mmooc-module-items-icons-";
  if (helper = helpers.type) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.type); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1);
  stack1 = (helper = helpers.ifItemIsCompleted || (depth0 && depth0.ifItemIsCompleted),options={hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.completion_requirement), options) : helperMissing.call(depth0, "ifItemIsCompleted", (depth0 && depth0.completion_requirement), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n                               href=\"";
  if (helper = helpers.html_url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.html_url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n                                <i class=\"icon-"
    + escapeExpression((helper = helpers.lowercase || (depth0 && depth0.lowercase),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.type), options) : helperMissing.call(depth0, "lowercase", (depth0 && depth0.type), options)))
    + escapeExpression((helper = helpers.overrideIconClassByTitle || (depth0 && depth0.overrideIconClassByTitle),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.title), options) : helperMissing.call(depth0, "overrideIconClassByTitle", (depth0 && depth0.title), options)))
    + "\"></i>\n                            </span>\n                        </a>\n                    </li>\n                ";
  return buffer;
  }
function program4(depth0,data) {
  
  
  return "active";
  }

function program6(depth0,data) {
  
  
  return " done";
  }

  buffer += "<nav aria-label=\"content\" role=\"navigation\">\n\n    <div class=\"mmooc-module-items-back-to-course-button mmooc-back-button\">\n        <a href=\""
    + escapeExpression((helper = helpers.urlForCourseId || (depth0 && depth0.urlForCourseId),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.courseId), options) : helperMissing.call(depth0, "urlForCourseId", (depth0 && depth0.courseId), options)))
    + "\">";
  if (helper = helpers.backToCoursePage) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.backToCoursePage); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\n    </div>\n\n    ";
  stack1 = helpers['with'].call(depth0, (depth0 && depth0.module), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</nav>";
  return buffer;
  });

this["mmooc"]["templates"]["modules"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <div class=\"mmooc-module\">\n            <h2 class=\"light\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h2>\n            <a href=\""
    + escapeExpression((helper = helpers.urlForFirstNoneCompleteItem || (depth0 && depth0.urlForFirstNoneCompleteItem),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.items), options) : helperMissing.call(depth0, "urlForFirstNoneCompleteItem", (depth0 && depth0.items), options)))
    + "\" class=\"btn rounded ";
  stack1 = (helper = helpers.ifAllItemsCompleted || (depth0 && depth0.ifAllItemsCompleted),options={hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.items), options) : helperMissing.call(depth0, "ifAllItemsCompleted", (depth0 && depth0.items), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">"
    + escapeExpression(((stack1 = (depth1 && depth1.navname)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.items), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n    ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return " btn-done ";
  }

function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                <ul class=\"mmooc-module-items-icons\">\n                    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.items), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </ul>\n            ";
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                        <li class=\"mmooc-module-item-icon\"><a class=\"mmooc-module-items-icons-";
  if (helper = helpers.type) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.type); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " ";
  stack1 = (helper = helpers.ifItemIsCompleted || (depth0 && depth0.ifItemIsCompleted),options={hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.completion_requirement), options) : helperMissing.call(depth0, "ifItemIsCompleted", (depth0 && depth0.completion_requirement), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" href=\"";
  if (helper = helpers.html_url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.html_url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" title=\"";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"><i class=\"icon-"
    + escapeExpression((helper = helpers.lowercase || (depth0 && depth0.lowercase),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.type), options) : helperMissing.call(depth0, "lowercase", (depth0 && depth0.type), options)))
    + escapeExpression((helper = helpers.overrideIconClassByTitle || (depth0 && depth0.overrideIconClassByTitle),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.title), options) : helperMissing.call(depth0, "overrideIconClassByTitle", (depth0 && depth0.title), options)))
    + "\"></i></a></li>\n                    ";
  return buffer;
  }
function program6(depth0,data) {
  
  
  return "done";
  }

  buffer += "<div class=\"mmooc-modules\">\n    <h2 class=\"h3\">";
  if (helper = helpers.coursemodules) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.coursemodules); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h2>\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.modules), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div> \n";
  return buffer;
  });

this["mmooc"]["templates"]["navigateToPreviousPage"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<nav class=\"mmooc-module-items-back-to-course-button mmooc-back-button\">\n    <span href=\"#\" onclick=\"mmooc.util.goBack()\">\n        ";
  if (helper = helpers.linkText) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.linkText); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n    </span>\n</nav>";
  return buffer;
  });

this["mmooc"]["templates"]["powerfunctions/account-picker"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n      <option value=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</option>\n      ";
  return buffer;
  }

  buffer += "<div>\n  <form>\n    <select name=\"account\">\n      <option value=\"\">Choose the account...</option>\n      ";
  options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}
  if (helper = helpers.accounts) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.accounts); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.accounts) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </select>\n  </form>\n</div>\n";
  return buffer;
  });

this["mmooc"]["templates"]["powerfunctions/assign-process"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n    <tr id=\"mmpf-assign-"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n      <td>";
  if (helper = helpers.group_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.group_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n      <td>";
  if (helper = helpers.user_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.user_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n      <td class=\"status waiting\">Waiting</td>\n    ";
  return buffer;
  }

  buffer += "<table>\n  <thead>\n    <tr>\n      <th>Group ID</th>\n      <th>Student ID</th>\n      <th>Status</th>\n    </tr>\n  </thead>\n  <tbody>\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.assigns), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </tbody>\n<table>\n\n";
  return buffer;
  });

this["mmooc"]["templates"]["powerfunctions/assign"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<form>\n  <dl>\n    <dt><label for=\"csv\">Upload CSV file</label></dt>\n    <dd><input type=\"file\" name=\"csv\"></dd>\n  </dl>\n  <input type=\"submit\"/>\n</form>\n\n<div class=\"side-information\">\n  <h3>Decription of CSV format</h3>\n  <p>First line of the file must be the name of the columns. Column separators are commas. Fields optionally encloused by double quotes (\").\n  <dl>\n    <dt>group_id [Integer]\n    <dd>The group ID\n    <dt>user_id [String]\n    <dd>The FEIDE user ID\n  </dl>\n</div>\n\n";
  });

this["mmooc"]["templates"]["powerfunctions/course-groups"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "\n          <option value=\"\">No courses defined for account</option>\n        ";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n          <option value=\"\">Choose a course</option>\n          ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.courses), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n            <option value=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</option>\n          ";
  return buffer;
  }

  buffer += "<form>\n  <ol>\n    <li class=\"step-1\">\n      <select id=\"mmpf-course-select\">\n        ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.courses), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </select>\n    <li class=\"step-2\">\n      <select name=\"category\"  onchange=\"$('.step-3').css('display', 'list-item')\">\n          <option value=\"\">No group sets defined for course</option>\n      </select>\n    <li class=\"step-3\"><input type=\"file\" name=\"csv\"  onchange=\"$('.step-4').css('display', 'list-item')\">\n    <li class=\"step-4\"><input type=\"submit\"/>\n  </ol>\n</form>\n\n<div class=\"side-information\">\n  <h3>Decription of CSV format</h3>\n  <p>First line of the file must be the name of the columns. Column separators are commas. Fields optionally encloused by double quotes (\").\n  <dl>\n    <dt>name [String]\n    <dd>The name of the group\n    <dt>description [String]\n    <dd>A description of the group\n  </dl>\n</div>\n";
  return buffer;
  });

this["mmooc"]["templates"]["powerfunctions/group-category"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "\n          <option value=\"\">No group sets defined for account</option>\n        ";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n          <option value=\"\">Choose a group set</option>\n          ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.categories), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n            <option value=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</option>\n          ";
  return buffer;
  }

  buffer += "<form>\n  <ol>\n    <li class=\"step-1\">\n      <select name=\"category\"  onchange=\"$('.step-2').css('display', 'list-item')\">\n        ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.categories), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </select>\n    <li class=\"step-2\"><input type=\"file\" name=\"csv\"  onchange=\"$('.step-3').css('display', 'list-item')\">\n    <li class=\"step-3\"><input type=\"submit\"/>\n  </ol>\n</form>\n\n<div class=\"side-information\">\n  <h3>Decription of CSV format</h3>\n  <p>First line of the file must be the name of the columns. Column separators are commas. Fields optionally encloused by double quotes (\").\n  <dl>\n    <dt>name [String]\n    <dd>The name of the group\n    <dt>description [String]\n    <dd>A description of the group\n  </dl>\n</div>\n";
  return buffer;
  });

this["mmooc"]["templates"]["powerfunctions/groups-process"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n    <tr id=\"mmpf-group-"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n      <td>";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n      <td>";
  if (helper = helpers.description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n      <td class=\"status waiting\">Waiting</td>\n    ";
  return buffer;
  }

  buffer += "<table>\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Description</th>\n      <th>Status</th>\n    </tr>\n  </thead>\n  <tbody>\n    ";
  options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}
  if (helper = helpers.groups) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.groups); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.groups) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </tbody>\n<table>\n\n";
  return buffer;
  });

this["mmooc"]["templates"]["powerfunctions/head"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"mmooc-power-functions\">\n  <h1 class=\"xl\">Power Functions</h1>\n  <h2>";
  if (helper = helpers.heading) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.heading); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h2>\n  <p><a href=\"/?mmpf\">Back</a></p>\n\n";
  return buffer;
  });

this["mmooc"]["templates"]["powerfunctions/headteacher"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"mmooc-power-functions\">\r\n  <h1 class=\"xl\">Power Functions</h1>\r\n  <h2>";
  if (helper = helpers.heading) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.heading); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h2>\r\n\r\n";
  return buffer;
  });

this["mmooc"]["templates"]["powerfunctions/list-groups"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "\n  <p>No groups found for account</p>\n";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n  <table>\n    <tr><th>ID</th><th>Name</th><th>Description</th></tr>\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.groups), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </table>\n";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n      <tr>\n        <td class=\"right\">";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n        <td>";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n        <td>";
  if (helper = helpers.description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n      </tr>\n    ";
  return buffer;
  }

  stack1 = helpers.unless.call(depth0, (depth0 && depth0.groups), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });

this["mmooc"]["templates"]["powerfunctions/logins-process"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n    <tr id=\"mmpf-logins-"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n      <td>";
  if (helper = helpers.user_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.user_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n      <td>";
  if (helper = helpers.login_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.login_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n      <td class=\"status waiting\">Waiting</td>\n    ";
  return buffer;
  }

  buffer += "<table>\n  <thead>\n    <tr>\n      <th>User ID</th>\n      <th>Login ID</th>\n      <th>Status</th>\n    </tr>\n  </thead>\n  <tbody>\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.logins), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </tbody>\n<table>\n";
  return buffer;
  });

this["mmooc"]["templates"]["powerfunctions/logins"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<form>\n  <dl>\n    <dt><label for=\"csv\">Upload CSV file</label></dt>\n    <dd><input type=\"file\" name=\"csv\"></dd>\n  </dl>\n  <input type=\"submit\"/>\n</form>\n\n<div class=\"side-information\">\n  <h3>Decription of CSV format</h3>\n  <p>First line of the file must be the name of the columns. Column separators are commas. Fields optionally encloused by double quotes (\").\n  <dl>\n    <dt>current_id [String]\n    <dd>The current FEIDE user ID \n    <dt>new_id [String]\n    <dd>The new  FEIDE user ID\n  </dl>\n</div>\n\n";
  });

this["mmooc"]["templates"]["powerfunctions/main"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"mmooc-pf-main\">\n	<h3>Teacher functions</h3>\n	<div class=\"mmooc-pf-list\">\n	  <div id=\"mmooc-pf-peer-review-btn\" class=\"item\">Peer review</div>\n	  <div id=\"mmooc-pf-student-progress-btn\" class=\"item\">Student progress</div>\n	</div>\n	<h3>Administrator functions</h3>\n	<div class=\"mmooc-pf-list\">\n	  <div id=\"mmooc-pf-list-group-btn\" class=\"item\">List groups</div>\n	  <div id=\"mmooc-pf-group-btn\" class=\"item\">Create account groups</div>\n	  <div id=\"mmooc-pf-course-group-btn\" class=\"item\">Create course groups</div>\n	  <div id=\"mmooc-pf-assign-btn\" class=\"item\">Assign students to groups</div>\n	  <div id=\"mmooc-pf-logins-btn\" class=\"item\">Add new logins</div>\n	</div>\n</div>\n";
  });

this["mmooc"]["templates"]["powerfunctions/mainteacher"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"mmooc-pf-main-teacher\">\r\n	<h3>Teacher functions</h3>\r\n	<div class=\"mmooc-pf-list\">\r\n	  <div id=\"mmooc-pf-peer-review-btn\" class=\"item\">Peer review</div>\r\n	  <div id=\"mmooc-pf-student-progress-btn\" class=\"item\">Student progress</div>\r\n	</div>\r\n</div>\r\n";
  });

this["mmooc"]["templates"]["powerfunctions/peer-review"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "\n          <option value=\"\">No courses defined for account</option>\n        ";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n          <option value=\"\">Choose a course</option>\n          ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.courses), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n            <option value=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</option>\n          ";
  return buffer;
  }

  buffer += "<form>\n  <ol>\n    <li class=\"step-1\">\n      <select id=\"mmpf-course-select\">\n        ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.courses), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </select>\n    <li class=\"step-2\">\n      <select id=\"mmpf-category-select\" name=\"category\">\n          <option value=\"\">No group sets defined for course</option>\n      </select>\n    <li class=\"step-3\">\n      <select id=\"mmpf-group-select\" name=\"group\">\n          <option value=\"\">No groups defined for course</option>\n      </select>\n    <li class=\"step-4\">\n      <select id=\"mmpf-assignment-select\" name=\"assignment\">\n          <option value=\"\">No assignments defined for course</option>\n      </select>\n  </ol>\n  <div class=\"peer-review-list\"></div>\n  <div id=\"progress\">\n  	<div id=\"bar\"></div>\n  </div>\n  <div class=\"peer-review-create\"></div>\n</form>\n";
  return buffer;
  });

this["mmooc"]["templates"]["powerfunctions/student-progress"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "\n          <option value=\"\">No courses defined for account</option>\n        ";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n          <option value=\"\">Choose a course</option>\n          ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.courses), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n            <option value=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</option>\n          ";
  return buffer;
  }

  buffer += "<form>\n  <ol>\n    <li class=\"step-1\">\n      <select id=\"mmpf-course-select\">\n        ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.courses), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </select>\n    <li class=\"step-2\">\n      <select id=\"mmpf-section-select\" name=\"section\">\n          <option value=\"\">No sections defined for course</option>\n      </select>\n    <li class=\"step-3\">\n      <select id=\"mmpf-module-select\" name=\"module\">\n          <option value=\"\">No modules defined for course</option>\n      </select>\n  </ol>\n  <div id=\"progress\">\n  	<div id=\"bar\"></div>\n  </div>\n  <div class=\"student-progress-table\"></div>\n</form>\n";
  return buffer;
  });

this["mmooc"]["templates"]["powerfunctions/tail"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "</div>\n";
  });

this["mmooc"]["templates"]["usermenu"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<ul id=\"user-menu\">\n    <li class=\"mmooc-menu-item\">\n        <a href=\"#\" class=\"mmooc-menu-item-title\">Varsler <i class=\"icon-mini-arrow-down\"></i><span id=\"mmooc-notification-count\"></span></a>\n        <div class=\"mmooc-menu-item-drop\" id=\"mmooc-activity-stream\">\n        </div>\n    </li>\n    <li class=\"mmooc-menu-item\">\n        <a href=\"/conversations\" class=\"mmooc-menu-item-title\">Innboks <span id=\"mmooc-unread-messages-count\"></span></a>\n    </li>\n    <li class=\"mmooc-menu-item profile-settings\">\n        <a href=\"#\" class=\"mmooc-menu-item-title\">\n            <div class=\"ic-avatar\" aria-hidden=\"true\">\n                <img src=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.user)),stack1 == null || stack1 === false ? stack1 : stack1.avatar_image_url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" alt=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.user)),stack1 == null || stack1 === false ? stack1 : stack1.display_name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" />\n            </div>\n            <i class=\"icon-mini-arrow-down\"></i>\n        </a>\n        <div class=\"mmooc-menu-item-drop\">\n            <ul>\n                <li><a href=\"/profile/settings\">Innstillinger</a></li>\n                <li class=\"helpMenu\"><a href=\"#\">Hjelp</a></li>\n                <li><a href=\"/logout\">Logg ut</a></li>\n            </ul>\n        </div>\n    </li>\n</ul>\n";
  return buffer;
  });

this["mmooc"]["templates"]["waitIcon"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"fountainG\">\n    <div id=\"fountainG_1\" class=\"fountainG\">\n    </div>\n    <div id=\"fountainG_2\" class=\"fountainG\">\n    </div>\n    <div id=\"fountainG_3\" class=\"fountainG\">\n    </div>\n    <div id=\"fountainG_4\" class=\"fountainG\">\n    </div>\n    <div id=\"fountainG_5\" class=\"fountainG\">\n    </div>\n    <div id=\"fountainG_6\" class=\"fountainG\">\n    </div>\n    <div id=\"fountainG_7\" class=\"fountainG\">\n    </div>\n    <div id=\"fountainG_8\" class=\"fountainG\">\n    </div>\n</div>";
  });
this.mmooc=this.mmooc||{};

this.mmooc.api = function() {
    var _urlToTypeMapping = [];

    _urlToTypeMapping['quizzes'] = 'Quiz';
    _urlToTypeMapping['assignments'] = 'Assignment';
    _urlToTypeMapping['discussion_topics'] = 'Discussion';


    return {
        _ajax: typeof $   !== "undefined" ? $   : {},

        _env:  typeof ENV !== "undefined" ? ENV : {},

        _location: typeof document !== "undefined" ? document.location : {search:"", href:""},

        _uriPrefix: "/api/v1",

        _defaultError: function (event, jqxhr, settings, thrownError) {
            console.log(event, jqxhr, settings, thrownError);
        },

        _sendRequest: function(method, options) {
            var error    = options.error || this._defaultError;
            var uri      = this._uriPrefix + options.uri;
            var params   = options.params || {};
            var callback = options.callback;
            method(uri, params, callback).fail(error);
        },

        _get: function(options) {
            //this._sendRequest(this._ajax.get, options);
            
            /*  Fix for returning student_id in response. 
            *   Needed for powerfunction _printStudentProgressForSection to list progress for correct student.
            */
            
            var uri      = this._uriPrefix + options.uri;
            var params   = options.params || {};
            var callback = options.callback;
 
            $.ajax({
                url: uri,
                type: 'GET',
                data: params,
                success: function(response) {
                    if("student_id" in params) {
                        response = response.map(function(el){el.student_id = params.student_id; return el});
                    }
                    callback(response);
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    console.log("Error during GET");
                }
            });           
                
        },

        _post: function(options) {
            this._sendRequest(this._ajax.post, options);
        },

        _put: function(options) {
            var uri      = this._uriPrefix + options.uri;
            var params   = options.params || {};
            var callback = options.callback;

            $.ajax({
                url: uri,
                type: 'PUT',
                data: params,
                success: function(response) {
                    callback(response);
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    console.log("Error during PUT");
                }
            });
        },

        /*  FIXME for listModulesForCourse()
         *  This function loads data in a blocking manner no matter how many items and modules are present.
         *  This could potentially pose problems in the future, as page load time increases rapidly when
         *  the number of requests are numerous. This function should be updated to use non-blocking loading
         *  if Canvas is not updated to allow for better data loading through their API.
         */
        listModulesForCourse: function(callback, error, cid)
        {
            var href= "/api/v1/courses/" + cid + "/modules?per_page=100";
            $.getJSON(href, function(modules) {
                    var noOfModules = modules.length;
                    var asyncsDone = 0;
                    for (var i = 0; i < noOfModules; i++) {
                        var m = modules[i];
                        var href= "/api/v1/courses/" + cid + "/modules/" + m.id + "/items?per_page=100";
                        $.getJSON(
                            href,
                            (function(j) {
                                return function(items) {
                                    modules[j].items = items;
                                    asyncsDone++;

                                    if(asyncsDone === noOfModules) {
                                        callback(modules);
                                    }
                                };
                            }(i)) // calling the function with the current value
                        );
                    };
                }
            );
        },

        getCurrentModuleItemId : function() {
            var moduleId;
            var relativeUrl = location.pathname;
            var patt = /\/courses\/\d+\/modules\/items\/\d+$/;
            var isRelativeUrlMatching = patt.test(relativeUrl);
            if (isRelativeUrlMatching) {
                var n = relativeUrl.lastIndexOf('/');
                moduleId = relativeUrl.substring(n + 1);
            } else {
                var paramName = "module_item_id";
                var q = "" + this._location.search;
                if (typeof q === "undefined" || q.indexOf(paramName) == -1) {
                    return null;
                }

                moduleId = q.substring(q.indexOf(paramName) + paramName.length + 1, q.length);
                if (moduleId.indexOf("&") != -1) {
                    moduleId = moduleId.substring(0, moduleId.indexOf("&"));
                }
            }

            return parseInt(moduleId, 10);
        },

        getCurrentTypeAndContentId: function() {
            var regexp = /\/courses\/\d+\/\w+\/\d+/;

            if (regexp.test("" + this._location.pathname)) {
                var tmp = this._location.pathname.split("/");
                if (tmp.length >= 5) {
                    var type = _urlToTypeMapping[tmp[3]];
                    var contentId = parseInt(tmp[4], 10);
                    return { contentId: contentId, type: type};
                }
            }
            return null;
        },


        getEnrolledCourses: function(callback, error) {
            this._get({
                "callback": callback,
                "error":    error,
                "uri":      "/courses",
                "params":   { "include": ["syllabus_body"], "per_page": "100" }
            });
        },
        
        getEnrolledCoursesProgress: function(callback, error) {
            this._get({
                "callback": callback,
                "error":    error,
                "uri":      "/courses",
                "params":   { "include": ["course_progress"], "per_page": "100" }
            });
        },

        /* FIXME Regarding include items: This parameter suggests that
         * Canvas return module items directly in the Module object
         * JSON, to avoid having to make separate API requests for
         * each module when enumerating modules and items. Canvas is
         * free to omit 'items' for any particular module if it deems
         * them too numerous to return inline. Callers must be
         * prepared to use the List Module Items API if items are not
         * returned.
         */
        getModulesForCurrentCourse: function(callback, error) {
            var courseId = this.getCurrentCourseId();
            this.listModulesForCourse(callback, error, courseId);
        },

        getModulesForCourseId: function(callback, error, courseId) {
            this._get({
                "callback": callback,
                "error":    error,
                "uri":      "/courses/" + courseId + "/modules",
                "params":   { per_page: 999 }
            });
        },

        getItemsForModuleId: function(callback, error, courseId, moduleId, params) {
            this._get({
                "callback": callback,
                "error": error,
                "uri": "/courses/" + courseId + "/modules/" + moduleId + "/items",
                "params": params
            });
        },

        getCurrentCourseId: function() {
            var currentUrl = "" + this._location.pathname;
            var matches = currentUrl.match(/\/courses\/(\d+)/);
            if (matches != null) {
                return parseInt(matches[1], 10);
            } else if (this._env.group) {
                // Group pages does not contain course id in URL, but is available via JavaScript variable
                return this._env.group.context_id;
            } else if ($("#section-tabs-header-subtitle").size() > 0) {
                // Group subpages contains course id only in a link
                var tmp = $("#section-tabs-header-subtitle").attr("href").split("/");
                if (tmp.length == 3) {
                    return parseInt(tmp[2], 10);
                }
            }

            return null;
        },

        getCourse: function(courseId, callback, error) {
            this._get({
                "callback": callback,
                "error":    error,
                "uri":      "/courses/" + courseId,
                "params":   {  }
            });
        },

        getCurrentGroupId: function() {
            var currentUrl = "" + this._location.pathname;
            var matches = currentUrl.match(/\/groups\/(\d+)/);
            if (matches != null) {
                return parseInt(matches[1], 10);
            }
            return null;
        },

        getGroup: function(groupId, callback, error) {
            this._get({
                "callback": callback,
                "error":    error,
                "uri":      "/groups/" + groupId,
                "params":   {}
            });
        },

        getGroupMembers: function(groupId, callback, error) {
            this._get({
                "callback": callback,
                "error":    error,
                "uri":      "/groups/" + groupId + "/users",
                "params":   {"include": ["avatar_url"], "per_page": 999 }
            });
        },

        getCurrentModule: function(callback, error) {
            var currentModuleItemId = this.getCurrentModuleItemId();
            var currentTypeAndContentId = null;
            //Quizzes and assignments does not have module item id in URL
            if (currentModuleItemId == null) {
                currentTypeAndContentId = this.getCurrentTypeAndContentId();
                if (currentTypeAndContentId == null) {
                    return;
                }
            }

            this.getModulesForCurrentCourse(function(modules) {
                for (var i = 0; i < modules.length; i++) {
                    var module = modules[i];
                    var items = module.items;
                    for (var j = 0; j < items.length; j++) {
                        var item = items[j];
                        //Need to check type and id for quiz and assignment items
                        var isCurrentModuleItem = item.id == currentModuleItemId || (currentTypeAndContentId != null && currentTypeAndContentId.contentId == item.content_id && currentTypeAndContentId.type == item.type);
                        if (isCurrentModuleItem) {
                            item.isCurrent = true;
                            callback(module);
                            return;
                        }
                    }
                }

            }, error);
        },

        getRoles : function() {
            return this._env.current_user_roles;
        },

        getUser : function() {
            return this._env.current_user;
        },

        getUserProfile : function(callback, error) {
            this._get({
                "callback": callback,
                "error":    error,
                "uri":      "/users/self/profile",
                "params":   { }
            });
        },

        getActivityStreamForUser: function(callback, error) {
            this._get({
                "callback": callback,
                "error":    error,
                "uri":      "/users/self/activity_stream",
                "params":   { }
            });
        },

        currentPageIsAnnouncement: function() {
            return ($("#section-tabs").find("a.announcements.active").size() == 1);
        },

        currentPageIsModuleItem: function() {
            if (this.getCurrentModuleItemId() != null || this.getCurrentTypeAndContentId() != null) {
                return true;
            } else {
                return false;
            }
        },

        getUnreadMessageSize: function() {
            
            var $oldUIUnreadMessages = $('.unread-messages-count');
            var $newUIUnreadMessages = $('#global_nav_conversations_link .menu-item__badge');           
            
            if ($oldUIUnreadMessages.length) {
                return parseInt($oldUIUnreadMessages.text()); //returns number of unread messages for old UI.
            } else if ($newUIUnreadMessages.length) {
                return parseInt($newUIUnreadMessages.text()); //returns number of unread messages for new UI.
            } else {
                return 0;
            }
        },

        getAccounts: function(callback, error) {
            this._get({
                "callback": callback,
                "error":    error,
                "uri":      "/accounts",
                "params":   { }
            });

        },

        getUsersForAccount: function(account, callback, error) {
            this._get({
                "callback": callback,
                "error":    error,
                "uri":      "/accounts/" + account + "/users",
                "params":   { }
            });
        },

        getCoursesForAccount: function(account, callback, error) {
            this._get({
                "callback": callback,
                "error":    error,
                "uri":      "/accounts/" + account + "/courses",
                "params":   { per_page: 999 }
            });
        },

        getCoursesForUser: function(callback, error) {
            this._get({
                "callback": callback,
                "error":    error,
                "uri":      "/courses",
                "params":   { per_page: 999 }
            });
        },

        getGroupCategoriesForAccount: function(account, callback, error) {
            this._get({
                "callback": callback,
                "error":    error,
                "uri":      "/accounts/" + account + "/group_categories",
                "params":   { }
            });
        },

        getGroupCategoriesForCourse: function(course, callback, error) {
            this._get({
                "callback": callback,
                "error":    error,
                "uri":      "/courses/" + course + "/group_categories",
                "params":   { per_page: 999 }
            });
        },

        // Recursively fetch all groups by following the next links
        // found in the Links response header:
        // https://canvas.instructure.com/doc/api/file.pagination.html
        _getGroupsForAccountHelper: function(accumulatedGroups, callback, error) {
            var that = this;
            return function(groups, status, xhr) {
                Array.prototype.push.apply(accumulatedGroups, groups);
                var next = xhr.getResponseHeader('Link').split(',').find(function (e) {
                    return e.match("rel=\"next\"");
                });
                if (next === undefined) {
                    callback(accumulatedGroups);
                }
                else {
                    var fullURI = next.match("<([^>]+)>")[1];
                    that._get({
                        "callback": that._getGroupsForAccountHelper(accumulatedGroups, callback, error),
                        "error":    error,
                        "uri":      fullURI.split("api/v1")[1],
                        "params":   { }
                    });
                }
            };
        },

        getGroupsForAccount: function(account, callback, error) {
            this._get({
                "callback": this._getGroupsForAccountHelper([], callback, error),
                "error":    error,
                "uri":      "/accounts/" + account + "/groups",
                "params":   { per_page: 999 }
            });
        },
        
        // /api/v1/group_categories/:group_category_id/groups
        getGroupsInCategory: function(categoryID, callback, error) {
            this._get({
                "callback": callback,
                "error":    error,
                "uri":      "/group_categories/" + categoryID + "/groups",
                "params":   { per_page: 999 }
            });
        },
        
        // /api/v1/courses/:course_id/sections
        getSectionsForCourse: function(courseID, params, callback, error) {
            this._get({
                "callback": callback,
                "error":    error,
                "uri":      "/courses/" + courseID + "/sections",
                "params":   params
            });
        },      
                
        // /api/v1/courses/54/assignments/369
        getSingleAssignment : function(courseId, assignmentId, callback, error) {
            this._get({
                "callback": callback,
                "error":    error,
                "uri":      "/courses/" + courseId + "/assignments/" + assignmentId,
                // "params":   {"include": ["submission", "assignment_visibility", "overrides", "observed_users"]}
                "params":   {}
            });
        },
        
        // /api/v1/courses/:course_id/assignments
        getAssignmentsForCourse : function(courseId, callback, error) {
            this._get({
                "callback": callback,
                "error":    error,
                "uri":      "/courses/" + courseId + "/assignments",
                "params":   { per_page: 999 }
            });
        },       
        
        // /api/v1/courses/54/assignments/369/submissions/1725
        getSingleSubmissionForUser : function(courseId, assignmentId, user_id, callback, error) {
            this._get({
                "callback": callback,
                "error":    error,
                "uri":      "/courses/" + courseId + "/assignments/" + assignmentId + "/submissions/" + user_id,
                "params":   {"include": ["submission_history", "submission_comments", "rubric_assessment", "visibility", "course", "user"]}
                // "params":   {"include": ["rubric_assessment", "visibility"]}
            });
        },
        
        // /api/v1/courses/7/assignments/11/submissions/4/peer_reviews
        // This API displays info about who has the peer review for a specific submissionID which is the id property on the submission object (different from user id)
        getPeerReviewsForSubmissionId : function(courseId, assignmentId, submission_id, callback, error) {
            // Returns only the student's peer reviews if you are a student. Returns all peer reviews if you are a teacher or admin
            this._get({
                "callback": callback,
                "error":    error,
                "uri":      "/courses/" + courseId + "/assignments/" + assignmentId + "/submissions/" + submission_id + "/peer_reviews",
                // "params":   {"include": ["submission_comments", "user"]}
                "params":   {"include": ["user"]}
            });
        },
        
        // /api/v1/courses/:course_id/assignments/:assignment_id/peer_reviews
        getPeerReviewsForAssignment : function(courseId, assignmentId, callback, error) {
            this._get({
                "callback": callback,
                "error":    error,
                "uri":      "/courses/" + courseId + "/assignments/" + assignmentId + "/peer_reviews",
                "params":   {"include": ["user"]}
            });
        },
 
        createPeerReview: function(courseID, assignmentID, submissionID, userID, callback, error) {
            this._post({
                "callback": callback,
                "error":    error,
                "uri":      "/courses/" + courseID + "/assignments/" + assignmentID + "/submissions/" + submissionID + "/peer_reviews",
                "params":   { user_id: userID }
            });
        },
        
        createGroup: function(params, callback, error) {
            this._post({
                "callback": callback,
                "error":    error,
                "uri":      "/group_categories/" + params.category + "/groups",
                "params":   {
                    name: params.name,
                    description: params.description,
                    is_public: false,
                    join_level: 'invitation_only'
                }
            });
        },

        createGroupMembership: function(gid, uid, callback, error) {
            this._post({
                "callback": callback,
                "error":    error,
                "uri":      "/groups/" + gid + "/memberships",
                "params":   { user_id: uid }
            });

        },


        createUserLogin: function(params, callback, error) {
            var account_id = params.account_id;
            delete params.account_id;
            this._post({
                "callback": callback,
                "error": error,
                "uri": "/accounts/" + account_id + "/logins",
                "params": params
            });
        },

        getDiscussionTopic: function(courseId, contentId, callback) {
            this._get({
                "callback": callback,
                "uri":      "/courses/" + courseId + "/discussion_topics/" + contentId,
                "params":   { per_page: 999 }
            });
        },
        
        //To be used later when displaying info about unread discussion comments.
        // getDiscussionTopics: function(courseId, callback) {
        //     this._get({
        //         "callback": callback,
        //         "uri":      "/courses/" + courseId + "/discussion_topics",
        //         "params":   { per_page: 999 }
        //     });
        // },

        markDiscussionTopicAsRead: function(courseId, contentId, callback) {
            this._put({
                "callback": callback,
                "uri":      "/courses/" + courseId + "/discussion_topics/" + contentId + "/read_all",
                "params":   { forced_read_state: 'false' }
            });
        }
    };
}();

if (typeof module !== "undefined" && module !== null) {
    module.exports = this.mmooc.api;
}

this.mmooc.powerAdminFunctions = function() {
  var rootId = undefined;
  var accountID = undefined;

  function _render(template, heading, data) {
    var html =
          mmooc.util.renderTemplateWithData('powerfunctions/head', {heading: heading}) +
          mmooc.util.renderTemplateWithData(template, data) +
          mmooc.util.renderTemplateWithData('powerfunctions/tail', {});
      document.getElementById(rootId).innerHTML = html;
    }

  function _readFile(file, callback) {
    var reader = new FileReader();
    reader.onload = function(event){
      callback(event.target.result);
    };
    reader.onerror = function(){ alert('Unable to read ' + file.fileName); };
    reader.readAsText(file);
  }

  function _success(row) {
    return function () {
      $("td.status", row).removeClass("waiting").addClass("ok").text("OK");
    };
  }

  function _error(row) {
    return function (jqXHR, textStatus, errorThrown ) {
      $("td.status", row).removeClass("waiting").addClass("failed").
        text("Failed: " + errorThrown + ": " + JSON.parse(jqXHR.responseText).errors[0].message);
    };
  }

  function _setUpSubmitHandler(callback) {
    $('input[type="submit"]').click(function() {
      var file = $('input:file')[0].files.item(0);
      _readFile(file, function(content) {
        callback(content);
      });
      return false;
    });
  }

  function _parseCSV(content) {
    try {
      return $.csv.toObjects(content);
    }
    catch (e) {
      alert(e.message);
      console.log(e);
      throw e;
    }
  }

  function CreateGroupsTask() {

    function _renderView() {
      mmooc.api.getGroupCategoriesForAccount(accountID, function(categories) {
        _render("powerfunctions/group-category",
                "Create account groups",
                {categories: categories});
        _setUpSubmitHandler(_processFile);
      });
    }

    function _processFile(content) {
      var groups = _parseCSV(content);
      var params = {
        account: accountID,
        category: document.getElementsByName("category")[0].value
      };
      _render("powerfunctions/groups-process",
              "Processing group creations",
              {groups: groups});
      for (var i = 0; i < groups.length; i++) {
        _processItem(params, i, groups[i]);
      }
    }

    function _processItem(params, i, group) {
      var row = $("#mmpf-group-"+i);
      params.name = group.name;
      params.description = group.description;
      mmooc.api.createGroup(params, _success(row), _error(row));
    }

    return {
      run: function() {
        _renderView();
      }
    };
  }


  function CreateCourseGroupsTask() {

    function _renderView() {
      console.log("Here");
      mmooc.api.getCoursesForAccount(accountID, function(courses) {
        _render("powerfunctions/course-groups",
                "Create course groups",
                {courses: courses});
        $('#mmpf-course-select').change(function () {
          var courseID = $('#mmpf-course-select option:selected').val();
          mmooc.api.getGroupCategoriesForCourse(courseID, function(categories) {
            $('.step-2').css('display', 'list-item');
            var html = html + "<option value=''>Choose a group set</option>";
            for (var i = 0; i < categories.length; i++) {
              html = html + "<option value=" + categories[i].id + ">" + categories[i].name + "</option>";
            }
            $("select[name='category']").html(html);
            _setUpSubmitHandler(_processFile);
          });
        });
      });
    }

    function _processFile(content) {
      var groups = _parseCSV(content);
      var params = {
        category: $("select[name='category'] option:selected").val()
      };
      _render("powerfunctions/groups-process",
              "Processing group creations",
              {groups: groups});
      for (var i = 0; i < groups.length; i++) {
        _processItem(params, i, groups[i]);
      }
    }

    function _processItem(params, i, group) {
      var row = $("#mmpf-group-"+i);
      params.name = group.name;
      params.description = group.description;
      mmooc.api.createGroup(params, _success(row), _error(row));
    }

    return {
      run: function() {
        _renderView();
      }
    };
  }


  function ListGroupsTask() {
    function _renderView() {
      mmooc.api.getGroupsForAccount(accountID, function(groups) {
        _render("powerfunctions/list-groups",
                "List groups",
                {groups: groups});
      });
    }

    return {
      run: function() {
        _renderView();
      }
    };
  }


  function CreateNewLoginsTask() {

    function _renderView() {
        _render("powerfunctions/logins",
                "Add new logins to students",
                {});
    }

    function _processFile(content) {
      var logins = _parseCSV(content);
      _render("powerfunctions/logins-process",
              "Processing new logins",
              {logins: logins});
      for (var i = 0; i < logins.length; i++) {
        _processItem(i, logins[i]);
      }
    }

    function _processItem(i, login) {
      var uid = "sis_user_id:" + login.current_id;
      var nid = login.new_id;
      var row = $("#mmpf-logins-"+i);
      var params = {
        'user[id]': uid,
        'login[unique_id]': nid,
        'login[sis_user_id]': nid,
        account_id: accountID
      };
      mmooc.api.createUserLogin(params, _success(row), _error(row));
    }

    return {
      run: function() {
        _renderView();
        _setUpSubmitHandler(_processFile);
      }
    };
  }


  function AssignStudentsToGroupsTask() {

    function _renderView() {
      _render("powerfunctions/assign",
              "Assign students to groups",
              {});
    }

    function _processFile(content) {
      var assigns = _parseCSV(content);
      _render("powerfunctions/assign-process",
              "Processing assigning student to groups",
              {assigns: assigns});
      for (var i = 0; i < assigns.length; i++) {
        _processItem(i, assigns[i]);
      }
    }

    function _processItem(i, assignment) {
      var gid = assignment.group_id;
      // According to the API documentation the SIS params should be
      // encoded, but this fails. Was:
      // encodeURIComponent(assignment.user_id);
      var uid = "sis_user_id:" + assignment.user_id;
      var row = $("#mmpf-assign-"+i);
      mmooc.api.createGroupMembership(gid, uid, _success(row), _error(row));
    }

    return {
      run: function() {
        _renderView();
        _setUpSubmitHandler(_processFile);
      }
    };
  }
  
  function AssignPeerReviewsForGroup() {

    function _renderView() {
      mmooc.api.getCoursesForAccount(accountID, function(courses) {
        _render("powerfunctions/peer-review",
                "Assign peer reviews by group",
                {courses: courses});
        $('#mmpf-course-select').change(function () {
          var courseID = $('#mmpf-course-select option:selected').val();
          mmooc.api.getGroupCategoriesForCourse(courseID, function(categories) {
            $('.step-2').css('display', 'list-item');
            $('.step-3').css('display', 'none');
            $('.step-4').css('display', 'none');
            var html = html + "<option value=''>Choose a group set</option>";
            for (var i = 0; i < categories.length; i++) {
              html = html + "<option value=" + categories[i].id + ">" + categories[i].name + "</option>";
            }
            $("#mmpf-category-select").html(html);
            $(".peer-review-list").html("");
          });
        });
        $('#mmpf-category-select').change(function () {
          var categoryID = $('#mmpf-category-select option:selected').val();
          mmooc.api.getGroupsInCategory(categoryID, function(groups) {
            $('.step-3').css('display', 'list-item');
            $('.step-4').css('display', 'none');
            var html = html + "<option value=''>Choose a group</option>";
            for (var i = 0; i < groups.length; i++) {
              html = html + "<option value=" + groups[i].id + ">" + groups[i].name + "</option>";
            }
            $("#mmpf-group-select").html(html);
            $(".peer-review-list").html("");
          });
        });
        $('#mmpf-group-select').change(function () {
          var courseID = $('#mmpf-course-select option:selected').val();
          mmooc.api.getAssignmentsForCourse(courseID, function(assignments) {
            $('.step-4').css('display', 'list-item');
            var html = html + "<option value=''>Choose an assignment</option>";
            for (var i = 0; i < assignments.length; i++) {
              html = html + "<option value=" + assignments[i].id + ">" + assignments[i].name + "</option>";
            }
            $("#mmpf-assignment-select").html(html);
            $(".peer-review-list").html("");
          });
        });
		$('#mmpf-assignment-select').change(function () {
			_listPeerReviewsForGroup();
			_showInput();
		});

      });
    }

    function _listPeerReviewsForGroup() {
	    $(".peer-review-list").html("<p>Laster hverandrevurderinger...</p>");
	    $("#progress").show();
	    $("#bar").width('0%');
	    var courseID = $('#mmpf-course-select option:selected').val();
	    var groupID = $('#mmpf-group-select option:selected').val();
	    var assignmentID = $('#mmpf-assignment-select option:selected').val();
	    var html = "<ul>";
	    var peerReveiwsInGroup = [];
	    var submitted = [];
	    var count = 0;
	    var asyncsDone = 0;
	    var inArray = false;
	    mmooc.api.getGroupMembers(groupID, function(members) {
		    $("#bar").width('50%');
		    mmooc.api.getPeerReviewsForAssignment(courseID, assignmentID, function(peerReviews) {
			    $("#bar").width('100%');
			    $(".peer-review-list").html("Laster besvarelser...");
			    $("#progress").show();
			    $("#bar").width('0%');
			    // Get submissions for users in group and push to array if workflow_state is submitted or graded
				for (var i = 0; i < members.length; i++) {
					mmooc.api.getSingleSubmissionForUser(courseID, assignmentID, members[i].id, function(submission) {
						if (submission.workflow_state == "submitted" || submission.workflow_state == "graded") {
							submitted.push(submission);
						}
						asyncsDone++;
						var width = (100 / members.length) * asyncsDone + "%";
						$("#bar").width(width);
						if (asyncsDone == members.length) {
							_renderList();
						}
					});
				}
				function _renderList() {
					// Traverse all peer reviews and group members	  	
			    	for (var i = 0; i < peerReviews.length; i++) {
				    	for (var j = 0; j < members.length; j++) {
					    	// Check if object is already in array			    	
					    	for (var k = 0; k < peerReveiwsInGroup.length; k++) {
						    	if(peerReveiwsInGroup[k] === peerReviews[i]) {
							    	inArray = true;
						    	}
						    }
						    // Push object to array if assesor is member of group and object not already in array	    	
				    		if (peerReviews.assessor_id == members.id && !inArray) {
					    		peerReveiwsInGroup[count] = peerReviews[i];
					    		count++;
				    		}
				    		inArray = false;
				    	}
				    }
				    inArray = false;			    			    			    
			    	for (var i = 0; i < members.length; i++) {
				    	count = 0;
				    	// List users and tag users without submissions
				    	if(submitted) {
					    	for (j = 0; j < submitted.length; j++) {
						    	// Check if user has submission
						    	if (submitted[j].user_id == members[i].id) {
							    	html = html + "<li>" + members[i].name + "</li><ul>";
							    	inArray = true;
							    	break;
						    	}
					    	}
							if (!inArray) {
							  	html = html + "<li>" + members[i].name + " <span class='no-submission'>Ikke levert besvarelse</span></li><ul>";
							}
				    	}else {
					    	html = html + "<li>" + members[i].name + "</li><ul>";
				    	}		    	
				    	for (var k = 0; k < peerReveiwsInGroup.length; k++) {
					    	if(members[i].id == peerReveiwsInGroup[k].assessor_id) {
						    	// List user name and tag peer review as completed/not completed
						    	if(peerReveiwsInGroup[k].workflow_state == "completed") {
						    		html = html + "<li>" + peerReveiwsInGroup[k].user.display_name  + " <span style='color:green;'>Fullført</span></li>";
						    	}else {
							    	html = html + "<li>" + peerReveiwsInGroup[k].user.display_name  + " <span style='color:red;'>Ikke fullført</span></li>";
						    	}
						    	count++;
					    	}
				    	}
				    	html = html + "</ul>";
				    	if(count == 0) {
					    	html = html + "<div>Ingen tildelt</div>";
				    	}
				    	inArray = false;	    			    	
				    }
				    $("#progress").hide();
				    $(".peer-review-list").html(html + "</ul>");
				    $('.input-wrapper').show();
					$('.btn-create-pr').click(function () {
						var numOfReviews = $('.number-of-reviews').val();
						// Create peer reviews for group after valitadion
						if (!_isNormalInteger(numOfReviews) || numOfReviews < 1) {
							alert("Antall gjennomganger må være et positivt heltall");
						}else if (numOfReviews > (submitted.length - 1)) {
							alert("For mange gjennomganger i forhold til antall besvarelser");
						}else {
							$('.input-wrapper').hide();
							_createPeerReviewsForGroup(courseID, assignmentID, numOfReviews, submitted);
						}	
					});	
				}			        			    
		    });       
		});	
    }
    
	function _createPeerReviewsForGroup(courseID, assignmentID, numOfReviews, submitted) {
		$(".peer-review-list").html("<p>Tildeler hverandrevurderinger...</p>");
		$("#progress").show();
		$("#bar").width('0%');
		asyncsDone = 0;
		var assigned = [];
		var assesorIndex;
		for (var j = 0; j < numOfReviews; j++) {
			for (var i = 0; i < submitted.length; i++) {				
				assesorIndex = (i + 1) + j;
				// Check if index exceeds array length
				if (assesorIndex >= submitted.length) {
					assesorIndex = assesorIndex - submitted.length;	
				}
				userID = submitted[assesorIndex].user_id;					
				mmooc.api.createPeerReview(courseID, assignmentID, submitted[i].id, userID, function(result) {					
					asyncsDone++;
					var width = (100 / (numOfReviews * submitted.length)) * asyncsDone + "%";
					$("#bar").width(width);
					if (asyncsDone == (submitted.length * numOfReviews)) {
						_listPeerReviewsForGroup();
					}
				});		
			}
		}			
	}
    
    function _isNormalInteger(str) {
    	return /^\+?(0|[1-9]\d*)$/.test(str);
	}
    
    function _showInput() {
	    $(".peer-review-create").html("<div class='input-wrapper'><input type='text' value='1' style='width:25px;' class='number-of-reviews'> gjennomganger per bruker<br><input type='button' value='Tildel hverandrevurderinger' class='button btn-create-pr'></div>");
    }

    return {
      run: function() {
        _renderView();
      }
    };
  }
  
  function ListStudentProgress() {
    var error = function(error) {
        console.error("error calling api", error);
    };
    	
    function _renderView() {    
      mmooc.api.getCoursesForAccount(accountID, function(courses) {
        _render("powerfunctions/student-progress",
                "List student progress by section",
                {courses: courses});
        $('#mmpf-course-select').change(function () {
          var courseID = $('#mmpf-course-select option:selected').val();
          var params = { per_page: 999 };
          mmooc.api.getSectionsForCourse(courseID, params, function(sections) {
            $('.step-2').css('display', 'list-item');
            $('.step-3').css('display', 'none');
            var html = html + "<option value=''>Choose a section</option>";
            for (var i = 0; i < sections.length; i++) {
              html = html + "<option value=" + i + ">" + sections[i].name + "</option>";
            }
            $("#mmpf-section-select").html(html);
            $(".student-progress-table").html("");
          });
        });
        $('#mmpf-section-select').change(function () {
	      var courseID = $('#mmpf-course-select option:selected').val();
          mmooc.api.getModulesForCourseId(function(modules) {
            $('.step-3').css('display', 'list-item');
            var html = html + "<option value=''>Choose a module</option>";
            for (var i = 0; i < modules.length; i++) {
              html = html + "<option value=" + modules[i].id + ">" + modules[i].name + "</option>";
            }
            $("#mmpf-module-select").html(html);
            $(".student-progress-table").html("");
          }, error, courseID);
        });
		$('#mmpf-module-select').change(function () {
			_printStudentProgressForSection();
			$(".student-progress-table").html("");
		});

      });
    }
    
    function _printStudentProgressForSection() {
	    $("#progress").hide();
	    var courseID = $('#mmpf-course-select option:selected').val();
	    var moduleID = $('#mmpf-module-select option:selected').val();
	    var sectionIndex = $('#mmpf-section-select option:selected').val();
	    var sectionParams = { per_page: 999, "include": ["students"] };
	    var moduleParams = { per_page: 999 };
	    var html = "<table><tr><th>Navn</th>";
	    var asyncsDone = 0;
	    mmooc.api.getItemsForModuleId(function(items) {
		    for (var i = 0; i < items.length; i++) {
			    html = html + "<th>" + items[i].title + "</th>";
		    }
		    html = html + "</tr>";
		    mmooc.api.getSectionsForCourse(courseID, sectionParams, function(sections) {		
			    if(sections[sectionIndex].students.length < 1) {
				    $(".student-progress-table").html("Ingen studenter funnet i klasse " + sections[sectionIndex].name);
			    }    
			    for (var j = 0; j < sections[sectionIndex].students.length; j++) {				    
				    moduleParams = { student_id: sections[sectionIndex].students[j].id, per_page: 999 };
				    mmooc.api.getItemsForModuleId(function(itemsForStudent) {
					    html = html + "<tr><td>" + sections[sectionIndex].students[asyncsDone].name + "</td>";
					    if(itemsForStudent.length < 1) {
						    html = html + "<td>Ingen krav</td>";
					    }
					    for (var k = 0; k < itemsForStudent.length; k++) {
						    if("completion_requirement" in itemsForStudent[k]) {
							    if(itemsForStudent[k].completion_requirement.completed) {
							    	html = html + "<td class='ok' />";
							    }else {
								    html = html + "<td class='nok' />";
							    }
						    }else {
							    html = html + "<td>Ingen krav</td>";
						    }
					    }
					    asyncsDone++;
					    var width = ((100 / sections[sectionIndex].students.length) * asyncsDone + "%");
					    $("#bar").width(width);
					    $("#progress").show();
					    if(asyncsDone == sections[sectionIndex].students.length) {
						    $("#progress").hide();
						    $(".student-progress-table").html(html + "</table>");
					    }
				    }, error, courseID, moduleID, moduleParams);
				    html = html + "</tr>";
			    }
			    
		    });
	    }, error, courseID, moduleID, moduleParams);
    }
  
    return {
      run: function() {
        _renderView();
      }
    };
  }  

  function AccountPicker() {
    function _setAccountID() {
      accountID = $('select[name="account"] option:selected').val();
    }

    return {
      run: function(params) {
        mmooc.api.getAccounts(function(accounts) {
          _render("powerfunctions/account-picker",
                  "Choose account",
                  {accounts: accounts});
          $('select[name="account"]').change(function() {
            _setAccountID();
            params.nextStep();
          });
        });
      }
    };
  }

  function Menu() {
    function _setUpClickHandlers() {
      $("#mmooc-pf-list-group-btn").click(function() {
        new ListGroupsTask().run();
      });
      $("#mmooc-pf-course-group-btn").click(function() {
        new CreateCourseGroupsTask().run();
      });
      $("#mmooc-pf-group-btn").click(function() {
        new CreateGroupsTask().run();
      });
      $("#mmooc-pf-assign-btn").click(function() {
        new AssignStudentsToGroupsTask().run();
      });
      $("#mmooc-pf-logins-btn").click(function() {
        new CreateNewLoginsTask().run();
      });
      $("#mmooc-pf-peer-review-btn").click(function() {
        new AssignPeerReviewsForGroup().run();
      });
      $("#mmooc-pf-student-progress-btn").click(function() {
        new ListStudentProgress().run();
      });
    }

    return {
      run: function() {
        try {
          _render("powerfunctions/main", "Choose function");
          _setUpClickHandlers();
        }
        catch (e) {
          alert (e.message);
          console.log(e);
        }
      }
    };
  }

  return {
    show: function(parentId) {
      rootId = parentId;
      new AccountPicker().run({nextStep: function () {
        new Menu().run();
      }});
    }
  };
}();

this.mmooc = this.mmooc || {};


this.mmooc.announcements = function () {
    function hideMarkAsReadButton() {
        $('#markAllAsReadButton').hide();
        mmooc.menu.updateNotificationsForUser();
    }

    /////////////////////////////////////////////////////////////////////////////
    // Function that fix announcement bug in Canvas
    // https://community.canvaslms.com/message/22237?et=watches.email.thread#22237
    /////////////////////////////////////////////////////////////////////////////
    function clearAnnouncementsForCourseArrays(courses) {
        var ayncsDone = 0;
        var totalAsyncs = 0;

        for(var j = 0; j < courses.length; j++) {
            var course = courses[j];
            totalAsyncs += course.discussionIds.length;
        }

        for(var j = 0; j < courses.length; j++) {
            var course = courses[j];
            var courseId = course.courseId;
            for (var i = 0; i < course.discussionIds.length; i++) {
                var discussionId = course.discussionIds[i];
                var s = '<br><div id="cdt' + courseId + discussionId + '">Markerer kunngj&oslash;ring som lest...</div>';
                $("#clearannouncements").append(s);

                var href= "/api/v1/courses/" + courseId + "/discussion_topics/" + discussionId + "/read_all.json";
                $.ajax({
                    url: href,
                    type: 'PUT',
                    data: 'forced_read_state=true',
                    courseid: courseId,
                    discussiontopicid: discussionId,
                    success: function(response) {
                        var s = "#cdt" + this.courseid + this.discussiontopicid;
                        $(s).append("OK");
                        ayncsDone++;
                        if (totalno == ayncsDone) {
                            try {
                                mmooc.menu.updateNotificationsForUser();
                            } catch (e) {
                                console.log(e);
                            }
                        }
                    },
                    error: function(XMLHttpRequest, textStatus, errorThrown) {
                        console.log("Error marking things as done:" + textStatus);
                    }
                });
            }
        }
    }

    /*
     Disse kunngjøringene blir nullstilt:

     Kurs 0:
     https://matematikk.mooc.no/courses/18/discussion_topics/519
     https://matematikk.mooc.no/courses/18/discussion_topics/551
     https://matematikk.mooc.no/courses/18/discussion_topics/569
     https://matematikk.mooc.no/courses/18/discussion_topics/824

     Kurs 1:
     https://matematikk.mooc.no/courses/11/discussion_topics/884
     https://matematikk.mooc.no/courses/11/discussion_topics/942
     https://matematikk.mooc.no/courses/11/discussion_topics/948
     https://matematikk.mooc.no/courses/11/discussion_topics/949
     https://matematikk.mooc.no/courses/11/discussion_topics/962
     https://matematikk.mooc.no/courses/11/discussion_topics/966
     https://matematikk.mooc.no/courses/11/discussion_topics/969
     https://matematikk.mooc.no/courses/11/discussion_topics/973
     https://matematikk.mooc.no/courses/11/discussion_topics/974
     https://matematikk.mooc.no/courses/11/discussion_topics/1245
     https://matematikk.mooc.no/courses/11/discussion_topics/1246
     https://matematikk.mooc.no/courses/11/discussion_topics/1259

     Kurs 2:
     https://matematikk.mooc.no/courses/12/discussion_topics/1263
     */

    return {
        clearAnnouncements: function() {
            var courses = [ {
                    courseId: 18,
                    discussionIds: [519,551,569,824]
                },
                {
                    courseId: 11,
                    discussionIds: [884,942,948,949,962,966,969,973,974,1245,1246,1259]
                },
                {
                    courseId: 12,
                    discussionIds: [1263]
                }

            ];
            clearAnnouncementsForCourseArrays(courses);
        },

        addMarkAsReadButton: function() {
            var contentId = mmooc.api.getCurrentTypeAndContentId().contentId;
            var courseId = mmooc.api.getCurrentCourseId();

            mmooc.api.getDiscussionTopic(courseId, contentId, function(discussionTopic) {
                if (discussionTopic.read_state !== "read") {
                    var buttonHTML = mmooc.util.renderTemplateWithData("actionbutton", {id: "markAllAsReadButton", title: "Marker som lest"});
                    document.getElementById('content-wrapper').insertAdjacentHTML('afterbegin', buttonHTML);

                    $('#markAllAsReadButton').click(function() {
                        mmooc.api.markDiscussionTopicAsRead(courseId, contentId, hideMarkAsReadButton);
                    });
                }
            });

        }

    };
}();


this.mmooc=this.mmooc||{};


this.mmooc.badges = function() {

    function resizeIframe() {
        mmooc.util.adaptHeightToIframeContentForId('tool_content_wrapper', 'tool_content');
    };
    return {
        initPage: function() {
            resizeIframe();

            var resizeTimer;
            $(window).resize(function() {
                clearTimeout(resizeTimer);
                resizeTimer = setTimeout(resizeIframe, 42);
            });

        },

        claimBadge: function(OpenBadges, urls, callBack) {
            OpenBadges.issue_no_modal(urls, callBack);
        }
    }
}();

this.mmooc=this.mmooc||{};


this.mmooc.courseList = function() {
    return {
        listCourses: function(parentId, callback) {
	        if (document.getElementsByClassName('reaccept_terms').length === 0) {
            	mmooc.api.getEnrolledCourses(function (courses) {
					
					var $oldContent = $('#' + parentId).children(); //After an update the 'Add course button' is in #content including a popupform. So we need to move this to another place in the DOM so we don't overwrite it.
					$oldContent.appendTo("#right-side-wrapper #right-side");
					
					$('#' + parentId).html("<div>Laster " + mmooc.i18n.CoursePlural + "....</div>"); //overwrite the contents in parentID and display: 'Laster kurs....'
					
                    var sortedCourses = mmooc.util.arraySorted(courses, "course_code");
                    html = mmooc.util.renderTemplateWithData("courselist", {courses: sortedCourses});
                    document.title = "Studier";
                    document.getElementById(parentId).innerHTML = html; 
					
//Additional check if course if completed. Not in use since course_progress(check implemented in template) seems to be working as expected. (Not able to reproduce errors).
/*
                    var createCallBackForId = function(id) {
                        return function(modules) {
                            if (mmooc.courseList.isCourseCompleted(modules)) {
                                var $course = $("#course_" + id);
                                $course.find('.mmooc-course-list-button .btn').addClass('btn-done');
                                $course.find('.mmooc-progress-bar').addClass('mmooc-progress-bar-done');
                            }
                        };
                    };


                    var error = function(error) {
                        console.error("error calling api, skip over this course", error);
                    };


                    $(sortedCourses).each(function() {
                        var success =  createCallBackForId(this.id);
                        mmooc.api.getModulesForCourseId(success, error, this.id);
                    });
*/
	                
	                	                
	                mmooc.courseList.showFilter(sortedCourses);
	                
	                $("#filter").change(function() {
		                mmooc.courseList.applyFilter(sortedCourses);
	                });
					
					if ($.isFunction(callback)) {
	                    callback();
	                }
	                	                
            	});
				mmooc.api.getEnrolledCoursesProgress(function (courses) {
	                
                    var sortedCourses = mmooc.util.arraySorted(courses, "course_code");
                    
                    $(sortedCourses).each(function() {
                        var $course = $("#course_" + this.id + " .mmooc-course-list-description");
						html = mmooc.util.renderTemplateWithData("courselistprogress", {navname: mmooc.i18n.GoToCourse, course: this});
                        $course.after(html);          
                    });					

            	});
            	
            }
                   
        },
        showAddCourseButton : function() {
            // Move canvas Start new course button, since we hide its original location
            var $button = $('#start_new_course');
            if ($button.length) {
                $('#content').append($button);
				$button.html(mmooc.i18n.AddACourse);
            }
        },
        showFilter : function(sortedCourses) {
	        // Show filter options based on first part of course code            
            var filterOptions = ["Alle"];           
            $(sortedCourses).each(function(index) {
	            var values = sortedCourses[index].course_code.split('::');    
	            if(values.length > 1) {
		            if(filterOptions.indexOf(values[0]) == -1) {
			            filterOptions.push(values[0]);
		            }		 
	        	}	        
        	});
        	filterOptions.push("Andre");
        	var selectList = "<select id='filter'></select>";
        	$('.mmooc-course-list h1').after(selectList);
        	
        	var option = '';
			for(var i=0; i<filterOptions.length; i++) {
				option += '<option value="' + filterOptions[i] + '">' + filterOptions[i] + '</option>';
			}
			$('#filter').append(option);                       
        },
        applyFilter : function(sortedCourses) {
			if($("#filter").val() == 'Alle') {
				$(sortedCourses).each(function() {
					$("#course_" + this.id).show();
				});
			}				
			else if($("#filter").val() == 'Andre') {
				$(sortedCourses).each(function() {
					if(this.course_code.indexOf("::") >= 0) {
						$("#course_" + this.id).hide();
					}
					else {
						$("#course_" + this.id).show();
					}						
				});
			}				
			else {			
				$(sortedCourses).each(function() {
					var courseCode = this.course_code.split('::')[0];
					if($("#filter").val() == courseCode) {
						$("#course_" + this.id).show();
					}
					else {
						$("#course_" + this.id).hide();
					}						
				});				
			}
        },        
        isCourseCompleted: function(modules) {
            for (var i = 0; i < modules.length; i++) {
                var module = modules[i];
                for (var j = 0; j < module.items.length; j++) {
                    var item = module.items[j];
                    if (item.completion_requirement && !item.completion_requirement.completed) {
                        return false;
                    }
                }
            }
            return true;
        }
    };
}();

this.mmooc=this.mmooc||{};


this.mmooc.coursePage = function() {

    return {

        listModulesAndShowProgressBar: function() {
            mmooc.api.getModulesForCurrentCourse(function(modules) {
                var progressHTML = mmooc.util.renderTemplateWithData("courseprogress", {title: mmooc.i18n.CourseProgressionTitle, modules: modules});
                document.getElementById('course_home_content').insertAdjacentHTML('beforebegin', progressHTML);

                var modulesHTML = mmooc.util.renderTemplateWithData("modules", {navname: mmooc.i18n.GoToModule, coursemodules: mmooc.i18n.ModulePlural, modules: modules});
                document.getElementById('course_home_content').insertAdjacentHTML('beforebegin', modulesHTML);
            });
        },
        hideCourseInvitationsForAllUsers: function() {
            
            var acceptanceTextToSearchFor = 'invitert til å delta';
            //If .ic-notification__message contains 'Invitert til å delta' så skjul nærmeste parent .ic-notification  
            $(".ic-notification__message.notification_message:contains('" + acceptanceTextToSearchFor + "')")
                .closest('.ic-notification.ic-notification--success')
                .hide();
            
            var acceptanceFlashTextToSearchFor = 'delta i dette kurset';
            
             $("ul#flash_message_holder li:contains('" + acceptanceFlashTextToSearchFor + "')")
                .hide();
        }

    };
}();

this.mmooc=this.mmooc||{};


this.mmooc.enroll = function() {

    return {
        changeButtonText: function() {
            var enrollForm = $("#enroll_form");
            enrollForm.find(".btn").text("Gå til Mine " + mmooc.i18n.CoursePlural);
            enrollForm.find(".btn-primary").hide();
        }
    };
}();

this.mmooc=this.mmooc||{};


this.mmooc.footer = function() {

    return {

        addLicenseInFooter: function() {
           
           //Previous existing footer is hidden by css ('footer#footer')and is also removed in New UI after March 2016 because of a bug fix.
           var $customFooter = $('footer#mmooc-footer'); //Appended as new html contents in #wrapper
           var $publicLicense = $('#content .public-license'); //License that is displayed on the course front page
           var $parentElementOfOldFooter = $('#application.ic-app #wrapper'); 
           
           var relativeUrl = window.location.pathname;
           var hideCustomFooterLicence = false; //License should not be displayed on the '/courses' or '/' page or the login or logout page.
                      
           if ((relativeUrl == '/courses') || (relativeUrl == '/courses/') || (relativeUrl == '/') || (relativeUrl == '/login/canvas') || (relativeUrl == '/logout')) {
               hideCustomFooterLicence = true;
           }
           
           //If there is no existing custom footer and there is public license on th page and it's not the course front page, 
           //then display the custom license in a custom footer element. The html for the license is in src/templates/modules/footer-license.hbs
           if ($customFooter.length == 0 && $publicLicense.length == 0 && !hideCustomFooterLicence) {
                var html = mmooc.util.renderTemplateWithData("footer-license", {});
                $parentElementOfOldFooter.append(html);
           }
           
        }
    };
}();

mmooc = mmooc || {};

mmooc.greeting = function () {

    function redesignPage() {
        $('#wrapper').addClass('diploma-page');
    }

    function fixLinkToModules($content) {
        if ($content.find(".alert li > a").size() <= 0) {
            return;
        }

        redesignPage();
        mmooc.api.getModulesForCurrentCourse(function (modules) {
            var firstItemPerModule = {};
            for (var i in modules) {
                firstItemPerModule[modules[i].id] = modules[i].items[0];
            }

            $('.alert li > a').each(function () {
                var oldPath = $(this).attr('href');
                var moduleNumber = /courses\/\d+\/modules\/(\d+)/.exec(oldPath);
                if (moduleNumber.length > 0) {
                    $(this).attr('href', firstItemPerModule[moduleNumber[1]].html_url);
                }
            });

        });
    }

    return {
        enableGreetingButtonIfNecessary: function ($content) {
            // Erlends diploma
            var $diplomaButton = $content.find(".sikt-diploma-button");
            var $formIdDiv = $content.find(".sikt-diploma-formId");
            var $nameEntryIdDiv = $content.find(".sikt-diploma-nameEntryId");
            var $emailEntryIdDiv = $content.find(".sikt-diploma-emailEntryId");

            if ($diplomaButton.length && $formIdDiv.length && $nameEntryIdDiv.length && $emailEntryIdDiv.length) {
                $diplomaButton.button().click(function () {
                    if ($diplomaButton.hasClass('btn-done')) {
                        return;
                    }

                    $('#info').html(mmooc.util.renderTemplateWithData("waitIcon", {}));

                    var formId = $formIdDiv.text();
                    var nameEntryId = $nameEntryIdDiv.text();
                    var emailEntryId = $emailEntryIdDiv.text();
                    var str1 = "https://docs.google.com/forms/d/";
                    var str2 = "/formResponse";
                    var googleurl = str1.concat(formId, str2);

                    str1 = "entry.";
                    var nameEntry = str1.concat(nameEntryId);
                    var emailEntry = str1.concat(emailEntryId);

                    mmooc.api.getUserProfile(function (profile) {
                        var values = {};
                        values[nameEntry] = profile.name;
                        values[emailEntry] = profile.primary_email;

                        $.ajax({
                            url: googleurl,
                            data: values,
                            type: "POST",
                            dataType: "xml",
                            complete: function (jqXHR) {
                                switch (jqXHR.status) {
                                    case 0:
                                        str1 = "Diplom ble sendt til denne eposten:";
                                        var s = str1.concat(profile.primary_email);
                                        $('#info').html(s);
                                        $diplomaButton.addClass('btn-done');
                                        break;
                                    default:
                                        $('#info').addClass('error');
                                        $('#info').html("En feil oppstod. Ta kontakt med matematikkmooc@iktsenteret.no for &aring; f&aring; hjelp.");
                                }
                            }
                        }); //End Google callback
                    }); //End Canvas user profile callback
                }); //End diploma button clicked
                redesignPage();
            } //End if valid diploma fields

            fixLinkToModules($content);
        }
    }
}();

this.mmooc=this.mmooc||{};


this.mmooc.groups = function() {
    function interceptLinkToGroupPageForHref(href, event) {
        if (/\/groups\/\d+$/.test(href)) {
            event.preventDefault();
            location.href = href + '/discussion_topics';
        }
    }

    return {
        interceptLinksToGroupPage: function() {
            $("#content").on('click', '.student-group-title a', function(event) {
                var href= $(this).attr("href");
                interceptLinkToGroupPageForHref(href, event);
            });

            $("#right-side").on('click', '.group_list a', function(event) {
                var href= $(this).attr("href");
                interceptLinkToGroupPageForHref(href, event);
            });
        },

        showGroupHeader: function() {
            var courseId = mmooc.api.getCurrentCourseId();
            var groupId = mmooc.api.getCurrentGroupId();
            if (groupId != null) {
                mmooc.api.getGroupMembers(groupId, function(members) {
                    var headerHTML = mmooc.util.renderTemplateWithData("groupheader", {groupId: groupId, courseId: courseId, members: members});
                    document.getElementById('content-wrapper').insertAdjacentHTML('afterbegin', headerHTML);
                    $("body").addClass("group-header");
                });
            }
        },

        changeGroupListURLs: function(href) {
          if (/\/groups(\/)?$/.test(href) || /(\/groups(\??([A-Za-z0-9\=\&]{0,})))$/.test(href)) {
            var list = $('.context_list li a');
            list.each(function(i) {
              this.setAttribute('href', this.getAttribute('href') + '/discussion_topics');
            });
            return true;
          }

          return false;
        },

        moveSequenceLinks: function() {
          var sequenceContainer = $("#module_sequence_footer");
          var discussionContainer = $("#discussion_container");
          sequenceContainer.addClass('module-sequence-top');
          sequenceContainer.insertBefore(discussionContainer);
        }
    };
}();

this.mmooc=this.mmooc||{};


this.mmooc.menu = function() {

    function _renderCourseMenu(course, selectedMenuItem, title, hideTabs) {
        
        function _insertCourseMenuHtml(course, selectedMenuItem, title, menuItems) {
            var subtitle = course.name;
            if (title == null) {
                title = course.name;
                subtitle = "";
            }
            var html = mmooc.util.renderTemplateWithData("coursemenu", {course: course, menuItems: menuItems, selectedMenuItem: selectedMenuItem, title: title, subtitle: subtitle });
            document.getElementById('header').insertAdjacentHTML('afterend', html);
        }
        
        var menuItems = [];

        var courseId = course.id;
        if (!hideTabs) { 
            menuItems[menuItems.length] = {"title": mmooc.i18n.Course + "forside", url: "/courses/" + courseId};
            menuItems[menuItems.length] = {"title": "Kunngjøringer", url: "/courses/" + courseId + "/announcements"};
            menuItems[menuItems.length] = {"title": "Grupper", url: "/courses/" + courseId + "/groups"};
            menuItems[menuItems.length] = {"title": "Diskusjoner", url: "/courses/" + courseId + "/discussion_topics"};
            
            var badgeSafe = mmooc.menu.extractBadgesLinkFromPage();
            if (badgeSafe.url) { //If the url of Badges is found then display this as an additional tab
                menuItems[menuItems.length] = badgeSafe;
                _insertCourseMenuHtml(course, selectedMenuItem, title, menuItems);
            } else {
                if (mmooc.settings.useCanvaBadge) {
                    mmooc.menu.setCanvaBadgesLink(course, function(canvaBadgeObject) { //Second parameter is a callback function
                        if (canvaBadgeObject.url) {
                            menuItems[menuItems.length] = canvaBadgeObject; //check if canva badges is used for the current domain and if it is and the user has any badges then display this additional tab 
                        }
                        _insertCourseMenuHtml(course, selectedMenuItem, title, menuItems);
                    });
                }
            }
        }
    }


    function createStyleSheet () {
        var style = document.createElement("style");

        // WebKit hack :(
        style.appendChild(document.createTextNode(""));

        document.head.appendChild(style);

        return style.sheet;
    }
    
    function insertCustomMenuElementInTopMenu(linkText, link) {
        var menu = document.getElementById('menu');
        if (menu) {
            menu.insertAdjacentHTML('afterbegin', '<li class="menu-item custom-item ic-app-header__menu-list-item"><a href="' + link + '" class="menu-item-no-drop ic-app-header__menu-list-link"><div class="menu-item__text">' + linkText + '</div></a></li>');
        }
    }
    
    function openHelpDialog(event) {
        event.preventDefault();
        $("a.help_dialog_trigger").click(); //Do the same as when you are clicking on the original help button (which display the help dialog)
    }
    
    function hideHelpMenuElementIfNotActivated() {
        $canvasHelpButton = $("a.help_dialog_trigger")
        if ($canvasHelpButton.length == 0) {
            $("li.helpMenu").hide();
        }
    }
     
    var stylesheet = createStyleSheet();

    return {
        listModuleItems: function() {
            mmooc.api.getCurrentModule(function(module) {
                var courseId = mmooc.api.getCurrentCourseId();
                var html = mmooc.util.renderTemplateWithData("moduleitems", {backToCoursePage: mmooc.i18n.BackToCoursePage, module: module, courseId: courseId});
                if (document.getElementById("left-side")) {
                    document.getElementById('left-side').insertAdjacentHTML('afterbegin', html);
                }
            });
        },
        showLeftMenu: function() {
            stylesheet.insertRule("body.with-left-side #main { margin-left: 305px !important }", stylesheet.cssRules.length);
            stylesheet.insertRule(".with-left-side #left-side { display: block !important }", stylesheet.cssRules.length);
            $("body").addClass("useFullWidth"); //Used to solve problems in making the design 100% width in the new UI. This is the simplest way to implement this.
        },

        renderLeftHeaderMenu: function() {
            
            // The entire menu is rebuilt because of unwanted popup in the new ui menu
            insertCustomMenuElementInTopMenu("Kalender", "/calendar");
            insertCustomMenuElementInTopMenu("Karakterer", "/grades");
            insertCustomMenuElementInTopMenu("Grupper", "/groups");
            insertCustomMenuElementInTopMenu(mmooc.i18n.Studies, "/courses"); 
            
            if (mmooc.util.isTeacherOrAdmin()) {
                this.showLeftMenu();

                $("#section-tabs-header").show();
                $("nav[aria-label='context']").show();
                $("#edit_discussions_settings").show();
                $("#availability_options").show();
                $("#group_category_options").show();
                $("#editor_tabs").show();

                // Done via CSS since content is loaded using AJAX
                stylesheet.insertRule("body.pages .header-bar-outer-container { display: block }", stylesheet.cssRules.length);
                stylesheet.insertRule("#discussion-managebar { display: block }", stylesheet.cssRules.length);
            }

            var roles = mmooc.api.getRoles();
            if (roles != null && roles.indexOf('admin') != -1) {
                // Admin needs original canvas Course dropdown to access site admin settings
                //$("#courses_menu_item").show(); //Applies only for Old UI. This is the course menu item with a sub menu.
                insertCustomMenuElementInTopMenu("Admin", "/accounts");
                // Admin needs more profile settings
                $(".add_access_token_link").show();
                $("body.profile_settings").find("#content > table, #content > h2, #content > p").show();
            }
        },

        hideRightMenu: function() {
            $("#right-side").hide();
            $("body").removeClass('with-right-side');
        },

        showUserMenu: function() {
            var menu = document.getElementById('menu');
            if (menu !=  null) {
                var html = mmooc.util.renderTemplateWithData("usermenu", {user: mmooc.api.getUser()});
                menu.insertAdjacentHTML('afterend', html);
                
                var msgBadge = $("#mmooc-unread-messages-count");
                if (mmooc.api.getUnreadMessageSize() === 0) {
                  msgBadge.hide();
                } else {
                  msgBadge.html(mmooc.api.getUnreadMessageSize());
                  msgBadge.show();
                }
                this.updateNotificationsForUser();
                
                $(document).on("click", ".helpMenu", openHelpDialog);
                hideHelpMenuElementIfNotActivated();
            }
        },

        updateNotificationsForUser: function() {
            mmooc.api.getActivityStreamForUser(function(activities) {
                var unreadNotifications = 0;
                for (var i = 0; i < activities.length; i++) {
                    if (mmooc.menu.checkReadStateFor(activities[i])) {
                        unreadNotifications++;
                    }
                }

                var badge = $("#mmooc-notification-count");
                if (unreadNotifications == 0) {
                    badge.hide();
                } else {
                    badge.html(unreadNotifications);
                    badge.show();
                }

                document.getElementById('mmooc-activity-stream').innerHTML = mmooc.util.renderTemplateWithData("activitystream", {activities: activities});

                var notifications = $("#mmooc-notifications").find("li");
                if (notifications.size() == 0) {
                    $("#mmooc-notifications").hide();
                } else {
                    $("#mmooc-notifications").show();
                }

                var showAllItems = $("#mmooc-notifications-showall");
                if (notifications.size() > 10) {
                    notifications.slice(10).addClass("hidden");

                    showAllItems.click(function() {
                        notifications.removeClass("hidden");
                        showAllItems.hide();
                    });
                } else {
                    showAllItems.hide();
                }

            });
        },

        showCourseMenu: function(courseId, selectedMenuItem, title, hideTabs) {
            hideTabs = hideTabs || false; //Do not hide tabs if the parameter
            $("body").addClass("with-course-menu");
            mmooc.api.getCourse(courseId, function(course) {
                _renderCourseMenu(course, selectedMenuItem, title, hideTabs);
            });
        },

        showBackButton: function(url, title) {
            var buttonHTML = mmooc.util.renderTemplateWithData("backbutton", {url: url, title: title});
            document.getElementById('content-wrapper').insertAdjacentHTML('afterbegin', buttonHTML);
        },

        showGroupHeader: function() {
            var groupId = mmooc.api.getCurrentGroupId();
            var groupHeaderHTML = mmooc.util.renderTemplateWithData("backbutton", {groupId: groupId});
            document.getElementById('content-wrapper').insertAdjacentHTML('afterbegin', groupHeaderHTML);
        },

        showDiscussionGroupMenu: function() {

            function _addBodyClassForGroupDiscussionForStyling() {
                var $body = $('body');
                var bodyClassForGroupDiscussion = 'mmooc-group-discussion';
                
                if (!$body.hasClass(bodyClassForGroupDiscussion)) {
                    $body.addClass(bodyClassForGroupDiscussion);
                }
            }

            function strLeft(sourceStr, keyStr){
                return (sourceStr.indexOf(keyStr) == -1 | keyStr=='') ? '' : sourceStr.split(keyStr)[0];
            }

            function _addGetHelpFromteacherButton(group) {
                
                function _selectCourseAndPrefillMessageInDialogBox() {
                
                    var $teacherFeedbackBody = $("#teacher-feedback-body");
                    var courseId = mmooc.api.getCurrentCourseId();

                    mmooc.api.getCourse(courseId, function(course) {
                        var courseName = course.name;
                        var discussionUrl = window.location.href;
                        var discussionAndGroupTitle = $(".discussion-title").text();
                        var discussionTitle = strLeft(discussionAndGroupTitle, " - ");
                        var newLine = "\n";
                        $('#teacher-feedback-recipients option:contains("' + courseName + '")').prop('selected', true);
                        var teacherFeedbackBodyHtml = mmooc.i18n.ThisIsGroup + ' "' + group.name + '".' + newLine + newLine + mmooc.i18n.WeHaveAQuestionToTeacherInTheDiscussion + ' "' + discussionTitle + '":' + newLine + discussionUrl;
                        $teacherFeedbackBody.val(teacherFeedbackBodyHtml);
                    });
                }

                function _openTeacherFeedbackLink() {
                    var $teacherFeedbackLink = $("#help-dialog a[href='#teacher_feedback']");
                    if (!$teacherFeedbackLink.length) {
                        console.log(mmooc.i18n.NoTeacherFeedbackLink);
                        return false;
                    }
                    $teacherFeedbackLink.click();
                    _selectCourseAndPrefillMessageInDialogBox();
                }

                function _addClickEventOnGetHelpFromTeacherButton() {
                    $(document).on("click", "#mmooc-get-teachers-help", function(event) {
                        $('.help_dialog_trigger').click();
                        setTimeout(_openTeacherFeedbackLink, 600); //Need to wait for the dialog contents to be loaded
                    });
                }
                
                // Get help from teacher by clicking a button
                var getHelpButtonFromteacherButtonHTML = mmooc.util.renderTemplateWithData("groupdiscussionGetHelpFromTeacher", {});
                document.getElementById('content-wrapper').insertAdjacentHTML('afterbegin', getHelpButtonFromteacherButtonHTML);
                _addClickEventOnGetHelpFromTeacherButton();
            }

            var groupId = mmooc.api.getCurrentGroupId();
            if (groupId != null) {
                mmooc.api.getGroup(groupId, function(group) {
                    // For discussion pages we only want the title to be "<discussion>" instead of "Discussion: <discussion>"
                    var title = mmooc.util.getPageTitleAfterColon();
                    mmooc.menu.showCourseMenu(group.course_id, "Grupper", title, true); //Group menu in tabs including title - Use optional fourth parameter for hiding tabs
                    _addBodyClassForGroupDiscussionForStyling(); 
                    _addGetHelpFromteacherButton(group);
                    mmooc.menu.showBackButton("/courses/" + group.course_id, "Tilbake til " + mmooc.i18n.Course + "forsiden");
                });
            }
        },

        checkReadStateFor: function (activity) {
            return activity.read_state === false;
        },

        extractBadgesLinkFromPage: function () {
            var href = $('li.section:contains("BadgeSafe")').find('a').attr('href');
            return {"title": mmooc.i18n.Badgesafe, url: href};
        },
        setCanvaBadgesLink: function (course, callback) {
            var user_id = mmooc.api.getUser().id;
            
            //This should be refactored to be in an api resource file
            var domain = location.host;
            var urlToCanvaBadgesApi = mmooc.settings.CanvaBadgeProtocolAndHost + "/api/v1/badges/public/" + user_id + "/" + encodeURIComponent(domain) + ".json";
            $.ajax({
                type: 'GET',
                dataType: 'jsonp',
                url: urlToCanvaBadgesApi,
                timeout: 5000,
                success: function(data) {
                    if ($.isFunction(callback)) {
                        callback({
                            "title": mmooc.i18n.Badgesafe,
                            url: "/courses/" + course.id + "?allcanvabadges"
                        });
                    }
                    
                    // if(data.objects && data.objects.length > 0) {
                    
                    // }
                },
                error: function(err) {
                    if ($.isFunction(callback)) {
                        callback({
                            "title": mmooc.i18n.Badgesafe, 
                            url: undefined
                        });
                    }
                }
            });
        },

        injectGroupsPage: function() {
          $('#courses_menu_item').after('<li class="menu-item"><a href="/groups" class="menu-item-no-drop">Grupper</a></li>');
        },

        alterHomeLink: function() {
          $('#header-logo').attr('href', '/courses');
          $('a.ic-app-header__logomark').attr('href', '/courses'); //New UI
        },

        alterCourseLink: function() {
        //   if ($('#menu > li:first-child a').hasClass('menu-item-no-drop')) {
        //     $('#menu > li:first-child a').attr('href', '/courses');
        //   }
        }
    };
}();

this.mmooc=this.mmooc||{};


this.mmooc.pages = function() {
    function updateButtonText(container, input, label) {
        if (input.is(":checked")) {
            label.html('Marker som ulest');
            container.addClass("is-done");
        } else {
            label.html('Marker som lest');
            container.removeClass("is-done");
        }
    }

    return {
        modifyMarkAsDoneButton: function() {
            $("body").bind("wiki-page-rendered", function() {
                var container = $("#mark-as-done-container");
                container.appendTo("#content .usercontent");

                var input = container.find("input");
                var label = container.find("label");
                input.change(function() {
                    updateButtonText(container, input, label);
                });

                updateButtonText(container, input, label);


                container.show();
            });
        },

        updateSidebarWhenMarkedAsDone: function() {
          $("body").on("click", "#mark-as-done-checkbox", function() {
            var icon = $("ul.mmooc-module-items .active span:last-child");

            if (icon.hasClass("done")) {
              icon.removeClass("done");
            } else {
              icon.addClass("done");
            }
          })
        },

        // changeTranslations : function() {
        //     $("a.submit_assignment_link").text('Lever besvarelse');
        // },

        showBackLinkIfNecessary: function() {
            if ($('#left-side').is(':hidden')) {
                var linkBack = mmooc.util.renderTemplateWithData("navigateToPreviousPage", {linkText: mmooc.i18n.LinkBack});
                $(linkBack).prependTo($('#content'));
            }
        },

        redesignAssignmentPage: function() {

            function _isAssignmentWithPeerReview() {
                var returnValue = false;
                var peerReviewer = mmooc.i18n.PeerReviewer;
                if ($("#right-side .details .content > h4:contains('" + peerReviewer.toLowerCase() + "')").length) {
                    returnValue = true;
                }
                return returnValue;
            }

            function _getPeerReviewArray() {

                function _getWorkFlowState(peerReviewLinkClass) {
                    var _workflow_state = ""; // workflow_state either 'assigned' or 'completed'
                    if (peerReviewLinkClass == "warning") {
                        _workflow_state = 'assigned';
                    } else if (peerReviewLinkClass == "pass") {
                        _workflow_state = 'completed';
                    }
                    return _workflow_state; 
                }

                var $peerReviewLinks = $("#right-side .details .content > h4 + ul.unstyled_list a");
                var _peerReview = []; //Peer review api is unfortunately not displaying the info we want (only info about the persons beeing peer reviewers for my submission), so we have to do this by using jquery
                var workflow_state;
                var peerReviewLinkClass;

                $peerReviewLinks.each(function(i){
                    peerReviewLinkClass = $(this).attr('class');
                    workflow_state = _getWorkFlowState(peerReviewLinkClass);
                    _peerReview[_peerReview.length] = {"workflow_state" : workflow_state, "assessor" : { "display_name" : $(this).text(), "mmooc_url": $(this).attr('href')}};
                });

                console.log('Custom peerReview array:');
                console.log(_peerReview);

                return _peerReview;
            }

            function _appendPeerReviewHtmlOnRightSide(submission, peerReview) {
                var peerReviewHtml = mmooc.util.renderTemplateWithData("assignmentPageWithPeerReviewRightSide", { submission : submission, peerReview:peerReview });
                // $("body.assignments #application.ic-app #right-side .details" ).append(peerReviewHtml);
                $(peerReviewHtml).insertBefore("body.assignments #application.ic-app #right-side .details");
            }

            function _appendPeerReviewWarningInContentsColumn(submission, peerReview) {
                var $peerReviewLinksWarnings = $("#right-side .details .content > h4 + ul.unstyled_list a.warning");
                if ($peerReviewLinksWarnings.length) { //If any warnings display peer review warning in the contents column after the assignment meta data
                    var peerReviewWarningHtml = mmooc.util.renderTemplateWithData("assignmentPageWithPeerReviewWarning", { submission : submission, peerReview:peerReview });
                    $("body.assignments #application.ic-app ul.student-assignment-overview" ).after(peerReviewWarningHtml);
                }
            }

            function _displayRightColumnContents() {
                $("#right-side .details").show();
            }

            var courseId = mmooc.api.getCurrentCourseId();
            var assignmentId = mmooc.api.getCurrentTypeAndContentId().contentId;
            var user_id = mmooc.api.getUser().id;

            if (_isAssignmentWithPeerReview()) {
                // console.log('user_id:' + user_id);
                mmooc.api.getSingleSubmissionForUser(courseId, assignmentId, user_id, function(submission) {
                    console.log('submission');
                    console.log(submission);
                    var peerReview = _getPeerReviewArray();
                    _appendPeerReviewHtmlOnRightSide(submission, peerReview);
                    _appendPeerReviewWarningInContentsColumn(submission, peerReview);
                });
            } else {
                _displayRightColumnContents();
            }
        },

        redesignPeerReviewAndOwnSubmissionDetailsPage: function() {

            function _isCodeRunningInIframe() {
                var returnValue = true;
                if (ENV.SUBMISSION && ENV.SUBMISSION.user_id) {
                    returnValue = false;
                }
                return returnValue;
            }

            function _getSubmissionTitle() {
                var returnValue;
                var current_user_id = mmooc.api.getUser().id;
                if (isPeerReview) {
                    returnValue = mmooc.i18n.PeerReview;
                } else {
                    returnValue = mmooc.i18n.DetailsAboutYourDelivery;
                    if (current_user_id != submission_user_id) { //Submission opened by admin or teacher. We don't make any changes in the existing design when this is the case.
                        returnValue = mmooc.i18n.DetailsAboutDelivery;
                    }
                }
                return returnValue;
            }

            function _isTeacherViewingStudentsSubmission() {
                var returnValue = false;
                var current_user_id = mmooc.api.getUser().id;
                if (!isPeerReview && current_user_id != submission_user_id) { //Submission opened by admin or teacher. We don't make any changes in the existing design when this is the case.
                    returnValue = true;
                }
                return returnValue;
            }

            function _isPeerReviewFinished() {
                var returnValue = false;
                if ($('.assessment_request_incomplete_message').css('display') == 'none') {
                    returnValue = true;
                }
                return returnValue;
            }

            function _addClickEventOnOpenAssessmentButton() {
                $(document).on("click", ".open-assessment-dialog-button", function(event) {
                    event.preventDefault();
                    $('#rubric_holder').show();
                    // $('.assess_submission_link.rubric').click(); //click on the previous hidden button.
                });
            }

            function _updateDomAfterSaveRubricButtonClick(event) {
                console.log('_updateDomAfterSaveRubricButtonClick is running');
                function _arePointsGivenInRubric() {
                    
                    var criterion_descriptionsCompleted = $('#rubric_holder table.rubric_table tr.criterion:not(.blank) td.criterion_description.completed').length;
                    var criterion_descriptions = $('#rubric_holder table.rubric_table tr.criterion:not(.blank) td.criterion_description').length;
                    var totalPoints = $('#rubric_holder table.rubric_table tr.summary .rubric_total').text();
                    
                    var pointsAreGiven = false;
                    if (totalPoints != "") {
                        if (criterion_descriptionsCompleted == criterion_descriptions) { //If all criteria are filled in 
                            pointsAreGiven = true;
                        }
                    }
                    
                    return pointsAreGiven; 
                }

                function _appendCompletedPeerReviewHtml(assignment, submission, peerReview) {
                    var submissionTitle = _getSubmissionTitle();
                    var isTeacherViewingStudentsSubmission = _isTeacherViewingStudentsSubmission();
                    var isPeerReviewFinished = true;
                    var submissionObject = {
                            assignment : assignment,
                            submission : submission,
                            peerReview : peerReview,
                            submissionTitle : submissionTitle,
                            isPeerReview : isPeerReview,
                            isPeerReviewFinished : isPeerReviewFinished,
                            isTeacherViewingStudentsSubmission : isTeacherViewingStudentsSubmission
                        };

                    var submissionHtml = mmooc.util.renderTemplateWithData("assignmentSubmission", submissionObject);

                    $(".mmooc-assignment-submission, .mmooc-assignment-submission-answers").remove(); //Remove old Html that was created before
                    $("body.assignments #application.ic-app #content .submission_details" ).after(submissionHtml);
                }
                
                //Functionality for this is as follows:
                // We want the peer review to display that it is finished without a refresh of the page.
                // Unfortunately we don't have any info about the peer review from the API because as a user you don't have access to that data it seems.
                // In order to solve this we check that the user has submitted data by checking the DOM. Then the SubmissionObject used in the template (assignmentSubmission) is changed so the peer review looks completed (which it also is).  

                if (_arePointsGivenInRubric()) {
                    mmooc.api.getSingleAssignment(courseId, assignmentId, function(assignment) {
                        mmooc.api.getSingleSubmissionForUser(courseId, assignmentId, submission_user_id, function(submission) {
                            var submission_id = submission.id;

                            mmooc.api.getPeerReviewsForSubmissionId(courseId, assignmentId, submission_id, function(peerReview) {
                                _logDataToConsole(assignment, submission, peerReview);
                                _appendCompletedPeerReviewHtml(assignment, submission, peerReview);
                            });
                        });
                    });
                }
            }

            function _isPeerReview() {
                var returnValue = false;
                var peerReviewText = mmooc.i18n.PeerReview;
                var originalSubmissionHeader = "body.assignments #application.ic-app #content .submission_details h2.submission_header";
                if ($(originalSubmissionHeader + ":contains('" + peerReviewText + "')").length) {
                    returnValue = true;
                }
                return returnValue;
            }

            function _isOwnSubmission() {
                var returnValue = false;
                var deliveryText = mmooc.i18n.Delivery;
                deliveryText = deliveryText.toLowerCase();
                var originalSubmissionHeader = "body.assignments #application.ic-app #content .submission_details h2.submission_header";
                if ($(originalSubmissionHeader + ":contains('" + deliveryText + "')").length) {
                    returnValue = true;
                }
                return returnValue;
            }

            function _logDataToConsole(assignment, submission, peerReview) {
                console.log('submission_user_id:' + submission_user_id);
                console.log('Assignment:');
                console.log(assignment);
                console.log('Submission:');
                console.log(submission);
                console.log('peerReview for submission id');
                console.log(peerReview);
            }

            function _appendSubmissionHtml(assignment, submission, peerReview) {
                var submissionTitle = _getSubmissionTitle();
                var isTeacherViewingStudentsSubmission = _isTeacherViewingStudentsSubmission();
                var isPeerReviewFinished = _isPeerReviewFinished();
                var submissionObject = {
                        assignment : assignment,
                        submission : submission,
                        peerReview : peerReview,
                        submissionTitle : submissionTitle,
                        isPeerReview : isPeerReview,
                        isPeerReviewFinished : isPeerReviewFinished,
                        isTeacherViewingStudentsSubmission : isTeacherViewingStudentsSubmission
                    };

                var submissionHtml = mmooc.util.renderTemplateWithData("assignmentSubmission", submissionObject);
                $("body.assignments #application.ic-app #content .submission_details" ).after(submissionHtml);
            }

            function _addSaveRubricButtonIfItDoesNotExist() {

                function _new_save_rubric_button(event) {
                    console.log('dynamically button (#mmooc_save_rubric_button.save_rubric_button )is clicked');

                    //Start original rubric button on click code in Canvas LMS
                    var showGrade = function(submission) {
                        $(".grading_box").val(submission.grade != undefined && submission.grade !== null ? submission.grade : "");
                        $(".score").text(submission.score != undefined && submission.score !== null ? round(submission.score, round.DEFAULT) : "");
                        $(".published_score").text(submission.published_score != undefined && submission.published_score !== null ? round(submission.published_score, round.DEFAULT) : "");
                    };

                    var toggleRubric = function($rubric) {
                        ariaSetting = $rubric.is(":visible");
                        $("#application").find("[data-hide_from_rubric]").attr("aria-hidden", ariaSetting)
                    };

                    var closeRubric = function() {
                        $("#rubric_holder").fadeOut(function() {
                        toggleRubric($(this));
                        $(".assess_submission_link").focus();
                        });
                    };

                    var $rubric = $(this).parents("#rubric_holder").find(".rubric");
                    var data = rubricAssessment.assessmentData($rubric);
                    var url = $(".update_rubric_assessment_url").attr('href');
                    var method = "POST";
                    $rubric.loadingImage();
                    
                    $.ajaxJSON(url, method, data, function(data) {
                        $rubric.loadingImage('remove');
                        var assessment = data;
                        var found = false;
                        if(assessment.rubric_association) {
                            rubricAssessment.updateRubricAssociation($rubric, data.rubric_association);
                            delete assessment.rubric_association;
                        }
                        for(var idx in rubricAssessments) {
                            var a = rubricAssessments[idx].rubric_assessment;
                            if(a && assessment && assessment.id == a.id) {
                                rubricAssessments[idx].rubric_assessment = assessment;
                                found = true;
                            }
                        }
                        if(!found) {
                            if (!data.rubric_assessment) {
                                data = { rubric_assessment: data };
                            }
                            rubricAssessments.push(data);
                            var $option = $(document.createElement('option'));
                            $option.val(assessment.id).text(assessment.assessor_name).attr('id', 'rubric_assessment_option_' + assessment.id);
                            $("#rubric_assessments_select").prepend($option).val(assessment.id);
                        }
                        $("#rubric_assessment_option_" + assessment.id).text(assessment.assessor_name);
                        $("#new_rubric_assessment_option").remove();
                        $("#rubric_assessments_list").show();
                        rubricAssessment.populateRubric($rubric, assessment);
                        submission = assessment.artifact;
                        if (submission) {
                            showGrade(submission);
                        }
                        closeRubric();
                        //End original rubric button on click code in Canvas LMS
                        console.log('Finished running #mmooc_save_rubric_button.save_rubric_button code');
                        _updateDomAfterSaveRubricButtonClick();
                    });
                }

                if (isPeerReview) {
                    var isAssessingRubric = false;
                    if ($('#rubric_holder .rubric_container.rubric.assessing').length) {
                        isAssessingRubric = true;
                    }

                    if (isAssessingRubric) { //We know that we are in assessing mode
                        //The button should be there
                        var $saveRubricButton = $("#rubric_holder #rubric_criterion_comments_dialog + .button-container > button.save_rubric_button");
                        if ($saveRubricButton.length == 0) {
                            console.log('Adding custom save rubric button');
                            var saveRubricButtonHtml = mmooc.util.renderTemplateWithData("assignmentPageWithPeerReviewSaveRubricButton", {});
                            
                            // $("#rubric_holder #rubric_criterion_comments_dialog + .button-container button.save_rubric_button").remove(); 
                            $("#rubric_holder #rubric_criterion_comments_dialog + .button-container").append(saveRubricButtonHtml);
                            $(document).on("click", "#mmooc_save_rubric_button", _new_save_rubric_button);
                        }
                    }
                }
            }

            if (_isCodeRunningInIframe()) {
                return false; //The code is running in an iframe. Code should not be running.
            }
            var courseId = mmooc.api.getCurrentCourseId();
            var assignmentId = mmooc.api.getCurrentTypeAndContentId().contentId;
            var isPeerReview = _isPeerReview();
            var isOwnSubmission = _isOwnSubmission();
            var submission_user_id = ENV.SUBMISSION.user_id;

            if (isPeerReview || isOwnSubmission) { 
                mmooc.api.getSingleAssignment(courseId, assignmentId, function(assignment) {
                    mmooc.api.getSingleSubmissionForUser(courseId, assignmentId, submission_user_id, function(submission) {
                        var submission_id = submission.id;    

                        mmooc.api.getPeerReviewsForSubmissionId(courseId, assignmentId, submission_id, function(peerReview) {
                            _logDataToConsole(assignment, submission, peerReview);
                            _appendSubmissionHtml(assignment, submission, peerReview);
                            _addClickEventOnOpenAssessmentButton();
                            // _addSaveRubricButtonIfItDoesNotExist(); //Enable this if the button 'Lagre kommentar' in the peer review dialog is not displaying
                            $(document).on("click", "button.save_rubric_button", _updateDomAfterSaveRubricButtonClick);
                        }); 
                    });
                });
            }
        }
    };
}();

this.mmooc=this.mmooc||{};

this.mmooc.powerFunctions = function() {
  var rootId = undefined;

  function _render(template, heading, data) {
    var html =
          mmooc.util.renderTemplateWithData('powerfunctions/headteacher', {heading: heading}) +
          mmooc.util.renderTemplateWithData(template, data) +
          mmooc.util.renderTemplateWithData('powerfunctions/tail', {});
      document.getElementById(rootId).innerHTML = html;
    }
  
  function AssignPeerReviewsForGroup() {

    function _renderView() {
      mmooc.api.getCoursesForUser(function(courses) {
        _render("powerfunctions/peer-review",
                "Assign peer reviews by group",
                {courses: courses});
        $('#mmpf-course-select').change(function () {
          var courseID = $('#mmpf-course-select option:selected').val();
          mmooc.api.getGroupCategoriesForCourse(courseID, function(categories) {
            $('.step-2').css('display', 'list-item');
            $('.step-3').css('display', 'none');
            $('.step-4').css('display', 'none');
            var html = html + "<option value=''>Choose a group set</option>";
            for (var i = 0; i < categories.length; i++) {
              html = html + "<option value=" + categories[i].id + ">" + categories[i].name + "</option>";
            }
            $("#mmpf-category-select").html(html);
            $(".peer-review-list").html("");
          });
        });
        $('#mmpf-category-select').change(function () {
          var categoryID = $('#mmpf-category-select option:selected').val();
          mmooc.api.getGroupsInCategory(categoryID, function(groups) {
            $('.step-3').css('display', 'list-item');
            $('.step-4').css('display', 'none');
            var html = html + "<option value=''>Choose a group</option>";
            for (var i = 0; i < groups.length; i++) {
              html = html + "<option value=" + groups[i].id + ">" + groups[i].name + "</option>";
            }
            $("#mmpf-group-select").html(html);
            $(".peer-review-list").html("");
          });
        });
        $('#mmpf-group-select').change(function () {
          var courseID = $('#mmpf-course-select option:selected').val();
          mmooc.api.getAssignmentsForCourse(courseID, function(assignments) {
            $('.step-4').css('display', 'list-item');
            var html = html + "<option value=''>Choose an assignment</option>";
            for (var i = 0; i < assignments.length; i++) {
              html = html + "<option value=" + assignments[i].id + ">" + assignments[i].name + "</option>";
            }
            $("#mmpf-assignment-select").html(html);
            $(".peer-review-list").html("");
          });
        });
		$('#mmpf-assignment-select').change(function () {
			_listPeerReviewsForGroup();
			_showInput();
		});

      });
    }

    function _listPeerReviewsForGroup() {
	    $(".peer-review-list").html("<p>Laster hverandrevurderinger...</p>");
	    $("#progress").show();
	    $("#bar").width('0%');
	    var courseID = $('#mmpf-course-select option:selected').val();
	    var groupID = $('#mmpf-group-select option:selected').val();
	    var assignmentID = $('#mmpf-assignment-select option:selected').val();
	    var html = "<ul>";
	    var peerReveiwsInGroup = [];
	    var submitted = [];
	    var count = 0;
	    var asyncsDone = 0;
	    var inArray = false;
	    mmooc.api.getGroupMembers(groupID, function(members) {
		    $("#bar").width('50%');
		    mmooc.api.getPeerReviewsForAssignment(courseID, assignmentID, function(peerReviews) {
			    $("#bar").width('100%');
			    $(".peer-review-list").html("Laster besvarelser...");
			    $("#progress").show();
			    $("#bar").width('0%');
			    // Get submissions for users in group and push to array if workflow_state is submitted or graded
				for (var i = 0; i < members.length; i++) {
					mmooc.api.getSingleSubmissionForUser(courseID, assignmentID, members[i].id, function(submission) {
						if (submission.workflow_state == "submitted" || submission.workflow_state == "graded") {
							submitted.push(submission);
						}
						asyncsDone++;
						var width = (100 / members.length) * asyncsDone + "%";
						$("#bar").width(width);
						if (asyncsDone == members.length) {
							_renderList();
						}
					});
				}
				function _renderList() {
					// Traverse all peer reviews and group members	  	
			    	for (var i = 0; i < peerReviews.length; i++) {
				    	for (var j = 0; j < members.length; j++) {
					    	// Check if object is already in array			    	
					    	for (var k = 0; k < peerReveiwsInGroup.length; k++) {
						    	if(peerReveiwsInGroup[k] === peerReviews[i]) {
							    	inArray = true;
						    	}
						    }
						    // Push object to array if assesor is member of group and object not already in array	    	
				    		if (peerReviews.assessor_id == members.id && !inArray) {
					    		peerReveiwsInGroup[count] = peerReviews[i];
					    		count++;
				    		}
				    		inArray = false;
				    	}
				    }
				    inArray = false;			    			    			    
			    	for (var i = 0; i < members.length; i++) {
				    	count = 0;
				    	// List users and tag users without submissions
				    	if(submitted) {
					    	for (j = 0; j < submitted.length; j++) {
						    	// Check if user has submission
						    	if (submitted[j].user_id == members[i].id) {
							    	html = html + "<li>" + members[i].name + "</li><ul>";
							    	inArray = true;
							    	break;
						    	}
					    	}
							if (!inArray) {
							  	html = html + "<li>" + members[i].name + " <span class='no-submission'>Ikke levert besvarelse</span></li><ul>";
							}
				    	}else {
					    	html = html + "<li>" + members[i].name + "</li><ul>";
				    	}		    	
				    	for (var k = 0; k < peerReveiwsInGroup.length; k++) {
					    	if(members[i].id == peerReveiwsInGroup[k].assessor_id) {
						    	// List user name and tag peer review as completed/not completed
						    	if(peerReveiwsInGroup[k].workflow_state == "completed") {
						    		html = html + "<li>" + peerReveiwsInGroup[k].user.display_name  + " <span style='color:green;'>Fullført</span></li>";
						    	}else {
							    	html = html + "<li>" + peerReveiwsInGroup[k].user.display_name  + " <span style='color:red;'>Ikke fullført</span></li>";
						    	}
						    	count++;
					    	}
				    	}
				    	html = html + "</ul>";
				    	if(count == 0) {
					    	html = html + "<div>Ingen tildelt</div>";
				    	}
				    	inArray = false;	    			    	
				    }
				    $("#progress").hide();
				    $(".peer-review-list").html(html + "</ul>");
				    $('.input-wrapper').show();
					$('.btn-create-pr').click(function () {
						var numOfReviews = $('.number-of-reviews').val();
						// Create peer reviews for group after valitadion
						if (!_isNormalInteger(numOfReviews) || numOfReviews < 1) {
							alert("Antall gjennomganger må være et positivt heltall");
						}else if (numOfReviews > (submitted.length - 1)) {
							alert("For mange gjennomganger i forhold til antall besvarelser");
						}else {
							$('.input-wrapper').hide();
							_createPeerReviewsForGroup(courseID, assignmentID, numOfReviews, submitted);
						}	
					});	
				}			        			    
		    });       
		});	
    }
    
	function _createPeerReviewsForGroup(courseID, assignmentID, numOfReviews, submitted) {
		$(".peer-review-list").html("<p>Tildeler hverandrevurderinger...</p>");
		$("#progress").show();
		$("#bar").width('0%');
		asyncsDone = 0;
		var assigned = [];
		var assesorIndex;
		for (var j = 0; j < numOfReviews; j++) {
			for (var i = 0; i < submitted.length; i++) {				
				assesorIndex = (i + 1) + j;
				// Check if index exceeds array length
				if (assesorIndex >= submitted.length) {
					assesorIndex = assesorIndex - submitted.length;	
				}
				userID = submitted[assesorIndex].user_id;					
				mmooc.api.createPeerReview(courseID, assignmentID, submitted[i].id, userID, function(result) {					
					asyncsDone++;
					var width = (100 / (numOfReviews * submitted.length)) * asyncsDone + "%";
					$("#bar").width(width);
					if (asyncsDone == (submitted.length * numOfReviews)) {
						_listPeerReviewsForGroup();
					}
				});		
			}
		}			
	}
    
    function _isNormalInteger(str) {
    	return /^\+?(0|[1-9]\d*)$/.test(str);
	}
    
    function _showInput() {
	    $(".peer-review-create").html("<div class='input-wrapper'><input type='text' value='1' style='width:25px;' class='number-of-reviews'> gjennomganger per bruker<br><input type='button' value='Tildel hverandrevurderinger' class='button btn-create-pr'></div>");
    }

    return {
      run: function() {
        _renderView();
      }
    };
  }
  
  function ListStudentProgress() {
    var error = function(error) {
        console.error("error calling api", error);
    };
    	
    function _renderView() {    
      mmooc.api.getCoursesForUser(function(courses) {
        _render("powerfunctions/student-progress",
                "List student progress by section",
                {courses: courses});
        $('#mmpf-course-select').change(function () {
          var courseID = $('#mmpf-course-select option:selected').val();
          var params = { per_page: 999 };
          mmooc.api.getSectionsForCourse(courseID, params, function(sections) {
            $('.step-2').css('display', 'list-item');
            $('.step-3').css('display', 'none');
            var html = html + "<option value=''>Choose a section</option>";
            for (var i = 0; i < sections.length; i++) {
              html = html + "<option value=" + i + ">" + sections[i].name + "</option>";
            }
            $("#mmpf-section-select").html(html);
            $(".student-progress-table").html("");
          });
        });
        $('#mmpf-section-select').change(function () {
	      var courseID = $('#mmpf-course-select option:selected').val();
          mmooc.api.getModulesForCourseId(function(modules) {
            $('.step-3').css('display', 'list-item');
            var html = html + "<option value=''>Choose a module</option>";
            for (var i = 0; i < modules.length; i++) {
              html = html + "<option value=" + modules[i].id + ">" + modules[i].name + "</option>";
            }
            $("#mmpf-module-select").html(html);
            $(".student-progress-table").html("");
          }, error, courseID);
        });
		$('#mmpf-module-select').change(function () {
			_printStudentProgressForSection();
			$(".student-progress-table").html("");
		});

      });
    }
    
    function _printStudentProgressForSection() {
	    $("#progress").hide();
	    var courseID = $('#mmpf-course-select option:selected').val();
	    var moduleID = $('#mmpf-module-select option:selected').val();
	    var sectionIndex = $('#mmpf-section-select option:selected').val();
	    var sectionParams = { per_page: 999, "include": ["students"] };
	    var moduleParams = { per_page: 999 };
	    var html = "<table><tr><th>Navn</th>";
	    var asyncsDone = 0;
	    mmooc.api.getItemsForModuleId(function(items) {
		    for (var i = 0; i < items.length; i++) {
			    html = html + "<th>" + items[i].title + "</th>";
		    }
		    html = html + "</tr>";
		    mmooc.api.getSectionsForCourse(courseID, sectionParams, function(sections) {		
			    if(sections[sectionIndex].students.length < 1) {
				    $(".student-progress-table").html("Ingen studenter funnet i klasse " + sections[sectionIndex].name);
			    }    
			    for (var j = 0; j < sections[sectionIndex].students.length; j++) {				    
				    moduleParams = { student_id: sections[sectionIndex].students[j].id, per_page: 999 };
				    mmooc.api.getItemsForModuleId(function(itemsForStudent) {
    				    for(var l = 0; l < sections[sectionIndex].students.length; l++) {
        				    if (sections[sectionIndex].students[l].id == itemsForStudent[0].student_id) {
            				    html = html + "<tr><td>" + sections[sectionIndex].students[l].name + "</td>";
        				    }
    				    }
					    if(itemsForStudent.length < 1) {
						    html = html + "<td>Ingen krav</td>";
					    }
					    for (var k = 0; k < itemsForStudent.length; k++) {
						    if("completion_requirement" in itemsForStudent[k]) {
							    if(itemsForStudent[k].completion_requirement.completed) {
							    	html = html + "<td class='ok' />";
							    }else {
								    html = html + "<td class='nok' />";
							    }
						    }else {
							    html = html + "<td>Ingen krav</td>";
						    }
					    }
					    asyncsDone++;
					    var width = ((100 / sections[sectionIndex].students.length) * asyncsDone + "%");
					    $("#bar").width(width);
					    $("#progress").show();
					    if(asyncsDone == sections[sectionIndex].students.length) {
						    $("#progress").hide();
						    $(".student-progress-table").html(html + "</table>");
					    }
				    }, error, courseID, moduleID, moduleParams);
				    html = html + "</tr>";
			    }
			    
		    });
	    }, error, courseID, moduleID, moduleParams);
    }
  
    return {
      run: function() {
        _renderView();
      }
    };
  }  

  function Menu() {
    function _setUpClickHandlers() {
      $("#mmooc-pf-peer-review-btn").click(function() {
        new AssignPeerReviewsForGroup().run();
      });
      $("#mmooc-pf-student-progress-btn").click(function() {
        new ListStudentProgress().run();
      });
    }

    return {
      run: function() {
        try {
          _render("powerfunctions/mainteacher", "Choose function");
          _setUpClickHandlers();
        }
        catch (e) {
          alert (e.message);
          console.log(e);
        }
      }
    };
  }

  return {
    show: function(parentId) {
      rootId = parentId;
      new Menu().run();
    }
  };
}();


this.mmooc=this.mmooc||{};


this.mmooc.routes = function() {
    function Route(paths, queryStrings, handler) {
        if (paths != null) {
            this.paths = paths instanceof Array ? paths : [paths];
        } else {
            this.paths = null;
        }

        if (queryStrings != null) {
            this.queryStrings = queryStrings instanceof Array ? queryStrings : [queryStrings];
        } else {
            this.queryStrings = null;
        }

        this.handler = handler;
        this.isAlreadyHandled = false;
    }

    var routes = [];

    return {
        addRouteForPath: function(path, handler) {
            routes.push(new Route(path, null, handler));
        },
        addRouteForQueryString: function(queryString, handler) {
            routes.push(new Route(null, queryString, handler));
        },

        addRouteForPathOrQueryString: function(path, queryString, handler) {
            routes.push(new Route(path, queryString, handler));
        },

        performHandlerForUrl: function(location) {
            var path = location.pathname;
            var queryString = location.search;

            for (var i = 0; i < routes.length; i++) {
                var route = routes[i];
                if (route.paths != null) {
                    for (var j = 0; j < route.paths.length; j++) {
                        if (route.paths[j].test(path) && !route.isAlreadyHandled) {
                            route.isAlreadyHandled = true;
                            route.handler();
                        }
                    }
                }

                if (route.queryStrings != null) {
                    for (var k = 0; k < route.queryStrings.length; k++) {
                        if (route.queryStrings[k].test(queryString) && !route.isAlreadyHandled) {
                            route.isAlreadyHandled = true;
                            route.handler();
                            return;
                        }
                    }
                }
            }
        }
    };
}();

if (typeof module !== "undefined" && module !== null) {
    module.exports = this.mmooc.routes;
}

Handlebars.registerHelper('lowercase', function(str) {
    return ("" + str).toLowerCase();
});

Handlebars.registerHelper('uppercase', function(str) {
    return ("" + str).toUpperCase();
});

Handlebars.registerHelper('percentage', function(number1, number2) {
    if (number2 == 0) {
        return 0;
    }
    return Math.round(number1*100/number2);
});

Handlebars.registerHelper('ifEquals', function(var1, var2, options) {
    if (var1 == var2) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});


Handlebars.registerHelper('ifGreaterThan', function(value1, value2, options) {
    if (value1 > value2) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});

Handlebars.registerHelper('overrideIconClassByTitle', function(title) {
    title = title.toLowerCase();
    if (title.indexOf('utmerkelse:') !=-1) {
        return ' mmooc-icon-badge';
    } else if (title.indexOf('video:') !=-1) {
        return ' mmooc-icon-video';
    } else if (title.indexOf('aktivitet:') !=-1) {
        return ' mmooc-icon-interactive';
    } else {
        return '';
    }
});

Handlebars.registerHelper('getPeerReviewWorkflowIconClass', function(workflow_state) {
    
    if (workflow_state == "assigned") {
        return ' warning';
    } else if (workflow_state == "completed") {
        return ' pass';
    } else {
        return '';
    }
});

Handlebars.registerHelper("norwegianDateAndTime", function(timestamp) {
    var year = new Date(timestamp).toString(' yyyy');
    var day = new Date(timestamp).toString('dd. ');
    var time = new Date(timestamp).toString(' HH:mm');
    var monthNumber = parseInt(new Date(timestamp).toString('M'), 10);
    var months = mmooc.i18n.Months;
    var month = months[monthNumber - 1];
    
    return day + month + year + time; //return new Date(timestamp).toString('dd. MMMM yyyy HH:mm'); // yyyy-MM-dd
});

Handlebars.registerHelper('getSubmissionAssessmentText', function(peerReview) {
    
    var submissionText = '';
    var numberOfReviews = peerReview.length;
    var numberOfReviewsCompleted = 0;
    var submissionAssessmentText = '';

    $.each(peerReview, function( index, singlePeerReview ) {
        if (singlePeerReview.workflow_state == 'completed') {
            numberOfReviewsCompleted = numberOfReviewsCompleted + 1;
        }
    });
    
    if (numberOfReviews === 0) {
        submissionAssessmentText = mmooc.i18n.SubmissionIsNotAssessed;
    } else if (numberOfReviews === numberOfReviewsCompleted) {
        if (numberOfReviewsCompleted == 1) {
            submissionAssessmentText = mmooc.i18n.SubmissionIsAssessedByOne;
        } else {
            submissionAssessmentText = mmooc.i18n.SubmissionIsAssessedByAll;
        }
         
    } else {
        submissionAssessmentText = numberOfReviewsCompleted.toString() + " " + mmooc.i18n.OutOf + " " + numberOfReviews.toString() + " " + mmooc.i18n.SubmissionAssessmentsAreReady; 
    }

    return submissionAssessmentText; 
});

Handlebars.registerHelper("getPathFromUrl", function(url) {
  return url.split("?")[0]; //returns an array even if there is no '?' so no need for extra checks
});

Handlebars.registerHelper('urlForCourseId', function(courseId) {
    return "/courses/" + courseId;
});

Handlebars.registerHelper('urlForGroupId', function(groupId) {
    return "/groups/" + groupId + "/discussion_topics";
});

Handlebars.registerHelper('ifItemIsCompleted', function(completion_requirement, options) {

    if (completion_requirement && completion_requirement.completed) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});

Handlebars.registerHelper('localize', function(key, options) {
    if (mmooc.i18n[key] != null) {
        return mmooc.i18n[key];
    } else {
        return key;
    }
});


Handlebars.registerHelper('ifAllItemsCompleted', function(items, options) {
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        if (item.completion_requirement && !item.completion_requirement.completed) {
            return options.inverse(this);
        }
    }

    return options.fn(this);
});

Handlebars.registerHelper('ifAllModulesCompleted', function(modules, options) {
    if (mmooc.courseList.isCourseCompleted(modules)) {
        return options.fn(this);
    }
    return options.inverse(this);
});

Handlebars.registerHelper('percentageForModules', function(modules) {
    var total = 0;
    var completed = 0;

    for (var i = 0; i < modules.length; i++) {
        var module = modules[i];
        for (var j = 0; j < module.items.length; j++) {
            var item = module.items[j];
            if (item.completion_requirement) {
                total++;
                if (item.completion_requirement.completed) {
                    completed++;
                }
            }
        }
    }

    return Math.round((completed*100)/total);
});

Handlebars.registerHelper('urlForFirstNoneCompleteItem', function(items) {
    if (items != null && items != undefined && items.length > 0) {
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (item.completion_requirement && !item.completion_requirement.completed) {
                return item.html_url;
            }
        }

        return items[0].html_url;
    }

    return null;
});

Handlebars.registerHelper('findRightUrlFor', function(activity) {
    return activity.type === 'Submission' ? '/courses/' + activity.course_id + '/grades' : activity.html_url;
});

Handlebars.registerHelper('checkReadStateFor', function(activity) {
    return mmooc.menu.checkReadStateFor(activity) ? "unread" : "";
});
this.mmooc = this.mmooc || {};


this.mmooc.util = function () {
    return {
        renderTemplateWithData: function (template, data) {
            var html = "";
            try {
                html = mmooc.templates[template](data);
            } catch (e) {
                console.log(e);
            }

            return html;

        },

        getPageTitleBeforeColon: function () {
            // For discussion pages we only want the title to be "<discussion>" instead of "Discussion: <discussion>"
            var title = document.title;
            if (title.indexOf(":")) {
                title = title.substring(0, title.indexOf(":"));
            }
            return title;
        },

        getPageTitleAfterColon: function () {
            // For discussion pages we only want the title to be "<discussion>" instead of "Discussion: <discussion>"
            var title = document.title;
            if (title.indexOf(":")) {
                title = title.substring(title.indexOf(":") + 1, title.length);
            }
            return title;
        },

        arraySorted: function (array, elementToSort) {
            if (Object.prototype.toString.call(array) === '[object Array]' && elementToSort) {
                return array.sort(function (a, b) {
                    if (a.hasOwnProperty(elementToSort) && b.hasOwnProperty(elementToSort)) {
                        var field1 = a[elementToSort].toLocaleLowerCase();
                        var field2 = b[elementToSort].toLocaleLowerCase();
                        return field1.localeCompare(field2, 'nb', {usage: 'sort'});
                    }
                    return 0;
                });
            }
            return array;
        },

        goBack: function (e) {//http://stackoverflow.com/questions/9756159/using-javascript-how-to-create-a-go-back-link-that-takes-the-user-to-a-link-i
            var defaultLocation = "https://server";
            var oldHash = window.location.hash;

            history.back(); // Try to go back

            var newHash = window.location.hash;

            /* If the previous page hasn't been loaded in a given time (in this case
             * 1000ms) the user is redirected to the default location given above.
             * This enables you to redirect the user to another page.
             *
             * However, you should check whether there was a referrer to the current
             * site. This is a good indicator for a previous entry in the history
             * session.
             *
             * Also you should check whether the old location differs only in the hash,
             * e.g. /index.html#top --> /index.html# shouldn't redirect to the default
             * location.
             */

            if (
                newHash === oldHash &&
                (typeof(document.referrer) !== "string" || document.referrer === "")
            ) {
                window.setTimeout(function () {
                    // redirect to default location
                    window.location.href = defaultLocation;
                }, 1000); // set timeout in ms
            }
            if (e) {
                if (e.preventDefault)
                    e.preventDefault();
                if (e.preventPropagation)
                    e.preventPropagation();
            }
            return false; // stop event propagation and browser default event
        },

        adaptHeightToIframeContentForId: function (containerId, frameId) {

            var scrollHeight = Number(document.getElementById(frameId).contentWindow.document.body.scrollHeight) + 20;
            document.getElementsByClassName(containerId)[0].style.height = scrollHeight + "px";
        },

        isTeacherOrAdmin: function() {
            var roles = mmooc.api.getRoles();
            return roles != null
                && (roles.indexOf('teacher') != -1
                    || roles.indexOf('admin') != -1);
        }

    };
}();


this.mmooc=this.mmooc||{};


this.mmooc.settings = {
    'CanvaBadgeProtocolAndHost' : 'https://canvabadges-beta-iktsenteret.bibsys.no',
    'useCanvaBadge' : true
};

this.mmooc=this.mmooc||{};

if (typeof this.mmooc.i18n === 'undefined') {
	this.mmooc.i18n = {
		'Course' : 'Kurs',
		'CoursePlural' : 'Kurs',
		'CourseProgressionTitle' : 'Din kursprogresjon:',
		'GoToCourse' : 'Gå til kursside',
		'GoToModule' : 'Gå til modul',
		'BackToCoursePage' : 'Tilbake til kursforsiden',
		'AddACourse' : 'Legg til et kurs',
		'Module' : 'Modul',
		'ModulePlural' : 'Moduler',
		'CourseModules' : 'Kursmoduler',
		'Studies' : 'Studier',
		'Assignment' : 'Oppgave',
		'Discussion' : 'Diskusjon',
		'Quiz' : 'Prøve',
		'Page' : 'Innholdsside',
		'ExternalUrl' : 'Ekstern lenke',
		'ExternalTool' : 'Eksternt verktøy',
		'File' : 'Fil',
		'Announcement' : 'Kunngjøring',
		'DiscussionTopic': 'Diskusjon',
		'Conversation': 'Innboksmelding',
		'Message': 'Oppgavevarsel',
		'Submission': 'Innlevering',
		'AssessmentRequest': 'Vurderingsforespørsel',
		'Conference': 'Conference',
		'Collaboration': 'Collaboration',
		'LinkBack': 'Tilbake til forrige side',
		'Badgesafe': 'Utmerkelser',
		'PeerReview' : 'Hverandrevurdering',
		'PeerReviewer' : 'Hverandrevurderer',
		'Delivery' : 'Innlevering',
		'DetailsAboutYourDelivery' : 'Detaljer om din innlevering',
		'DetailsAboutDelivery' : 'Detaljer om innlevering',
		'SubmissionIsNotAssessed' : 'Oppgaven er ikke vurdert',
		'SubmissionIsAssessedByOne' : 'Vurderingen er klar',
		'SubmissionIsAssessedByAll' : 'Alle vurderinger er klare',
		'SubmissionAssessmentsAreReady' : 'vurderinger er klare',
		'ThisIsGroup' : 'Dette er gruppe',
		'WeHaveAQuestionToTeacherInTheDiscussion' : 'Vi har et spørsmål til veileder i diskusjonen',
		'NoTeacherFeedbackLink' : 'No teacher_feedback link. Does the help menu have a link to send feedback to the teacher?',
		'OutOf' : 'av',
		'Months' : ["januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "september", "Oktober", "november", "december"]
	};
}

jQuery(function($) {
	
    $('.header-bar, .ic-Action-header').show(); //To avoid displaying the old contents while the javascript is loading. Selectors are set to display:none in CSS.
    
    mmooc.routes.addRouteForPath(/\/$/, function() {
        mmooc.menu.hideRightMenu();
        var parentId = 'content'
        if (document.location.search === "?mmpf") {
            mmooc.powerFunctions.show(parentId);
        } else {
            mmooc.courseList.listCourses(parentId, mmooc.courseList.showAddCourseButton);
        }
    });

    mmooc.routes.addRouteForQueryString(/invitation=/, function() {
    });

    mmooc.routes.addRouteForPath(/\/login$/, function() {
        $('#register_link').html("<i>Trenger du en konto?</i><b>Klikk her.</b>");
    });

    mmooc.routes.addRouteForPath(/\/courses$/, function() {
        mmooc.menu.hideRightMenu();
        mmooc.courseList.listCourses('content', mmooc.courseList.showAddCourseButton);
    });
    
    mmooc.routes.addRouteForPath(/\/courses\/\d+$/, function() {
        mmooc.groups.interceptLinksToGroupPage();
        mmooc.coursePage.hideCourseInvitationsForAllUsers();
        
        var courseId = mmooc.api.getCurrentCourseId();
        var queryString = document.location.search; 
        if (queryString === "?allcanvabadges") { //query string = ?allcanvabadges 
            var courseId = mmooc.api.getCurrentCourseId();
            mmooc.menu.showCourseMenu(courseId, 'Utmerkelser', 'Utmerkelser'); 
            //Should be refactored to use json api instead 
            var canvabadgesForCurrentCourse = '<iframe allowfullscreen="true" height="680" id="tool_content" mozallowfullscreen="true" name="tool_content" src="' + mmooc.settings.CanvaBadgeProtocolAndHost + '/badges/course/' + courseId + '" tabindex="0" webkitallowfullscreen="true" width="100%"></iframe>';
            $("#content").append(canvabadgesForCurrentCourse);
        } else {
            mmooc.coursePage.listModulesAndShowProgressBar();
            mmooc.menu.showCourseMenu(courseId, mmooc.i18n.Course + 'forside', null);
        }
    });

    mmooc.routes.addRouteForPath(/\/courses\/\d+\/announcements$/, function() {
        var courseId = mmooc.api.getCurrentCourseId();
        mmooc.menu.showCourseMenu(courseId, 'Kunngjøringer', mmooc.util.getPageTitleBeforeColon());
    });

    mmooc.routes.addRouteForPath(/\/courses\/\d+\/discussion_topics$/, function() {
        var courseId = mmooc.api.getCurrentCourseId();
        mmooc.menu.showCourseMenu(courseId, 'Diskusjoner', mmooc.util.getPageTitleBeforeColon());
    });

    mmooc.routes.addRouteForPath(/\/courses\/\d+\/groups$/, function() {
        mmooc.groups.interceptLinksToGroupPage();
        var courseId = mmooc.api.getCurrentCourseId();
        mmooc.menu.showCourseMenu(courseId, 'Grupper', mmooc.util.getPageTitleBeforeColon());
    });

    mmooc.routes.addRouteForPath(/\/courses\/\d+\/users$/, function() {
        var courseId = mmooc.api.getCurrentCourseId();
        mmooc.menu.showCourseMenu(courseId, '', mmooc.util.getPageTitleBeforeColon());
    });

    mmooc.routes.addRouteForPath(/\/groups\/\d+$/, function() {
        var courseId = mmooc.api.getCurrentCourseId();
        mmooc.menu.showCourseMenu(courseId, 'Grupper', mmooc.util.getPageTitleBeforeColon());
    });

    mmooc.routes.addRouteForPath(/\/groups\/\d+\/discussion_topics$/, function() {
        var courseId = mmooc.api.getCurrentCourseId();
        mmooc.menu.showCourseMenu(courseId, 'Grupper', mmooc.util.getPageTitleAfterColon());

        //TODO: Check whether or not courseId is undefined or not valid, only insert the group header
        //when it is.
        mmooc.groups.showGroupHeader();
    });

    mmooc.routes.addRouteForPath([/\/groups\/\d+\/discussion_topics\/\d+$/, /\/groups\/\d+\/discussion_topics\/new$/], function() {
        mmooc.menu.showDiscussionGroupMenu();
    });

    mmooc.routes.addRouteForPath([/\/groups\/\d+\/discussion_topics\/\d+$/], function() {
        mmooc.groups.moveSequenceLinks();
        if (!mmooc.util.isTeacherOrAdmin()) {
            mmooc.menu.hideRightMenu();
        }
    });

    mmooc.routes.addRouteForPath([/\/courses\/\d+\/discussion_topics\/\d+/, /\/courses\/\d+\/discussion_topics\/new/], function() {
        // For discussion pages we only want the title to be "<discussion>" instead of "Discussion: <discussion>"
        var title = mmooc.util.getPageTitleAfterColon();

        if (!mmooc.util.isTeacherOrAdmin()) {
            mmooc.menu.hideRightMenu();
        }

        // Announcements are some as type of discussions, must use a hack to determine if this is an announcement
        var courseId = mmooc.api.getCurrentCourseId();
        if (mmooc.api.currentPageIsAnnouncement()) {
            mmooc.menu.showCourseMenu(courseId, 'Kunngjøringer', title);
            mmooc.menu.showBackButton("/courses/" + courseId + "/announcements", "Tilbake til kunngjøringer");
            mmooc.announcements.addMarkAsReadButton();
        } else if (mmooc.api.getCurrentModuleItemId() == null) {
            // Only show course menu if this discussion is not a module item
            // Note detection if this is a module item is based on precense of query parameter
            mmooc.menu.showCourseMenu(courseId, 'Diskusjoner', title);
            mmooc.menu.showBackButton("/courses/" + courseId + "/discussion_topics", "Tilbake til diskusjoner");
        }
    });

    mmooc.routes.addRouteForPathOrQueryString([/\/courses\/\d+\/assignments\/\d+/, /\/courses\/\d+\/quizzes\/\d+/], /module_item_id=/, function() {
        mmooc.menu.showLeftMenu();
        mmooc.menu.listModuleItems();
        mmooc.pages.modifyMarkAsDoneButton();
        // mmooc.pages.changeTranslations();
    });
    
    // example route: /courses/54/assignments/369 - assignment which may be a peer review (hverandrevurdering)
    mmooc.routes.addRouteForPath(/\/courses\/\d+\/assignments\/\d+/, function() {
        mmooc.pages.redesignAssignmentPage();
    });

    // Assignment submission which might be your own or someone else's: Peer review (hverandrevurdering)
    mmooc.routes.addRouteForPath(/\/courses\/\d+\/assignments\/\d+\/submissions\/\d+/, function() {
        mmooc.pages.redesignPeerReviewAndOwnSubmissionDetailsPage();
    });
    
    mmooc.routes.addRouteForPath(/\/courses\/\d+\/external_tools\/\d+$/, function() {
        function isBadgesafePage() {
            function extractPluginNumber(input) {
                 return input.substring(input.lastIndexOf('/') + 1);
            }

            var badgesafeUrl = mmooc.menu.extractBadgesLinkFromPage().url;

            return extractPluginNumber(badgesafeUrl) === extractPluginNumber(window.location.pathname);
        };

        if (isBadgesafePage()) {
            var courseId = mmooc.api.getCurrentCourseId();
            mmooc.menu.showCourseMenu(courseId, 'Utmerkelser', 'Utmerkelser');
        }
    });
    
    mmooc.routes.addRouteForPath(/\/courses\/\d+\/modules\/items\/\d+$/, function() { //Canva Badges uses this route for instance
        mmooc.menu.showLeftMenu();
        mmooc.menu.listModuleItems();
    });
    
    mmooc.routes.addRouteForPath([/\/pages/], function() {
        mmooc.pages.showBackLinkIfNecessary();
    });


    mmooc.routes.addRouteForQueryString(/enrolled=1/, function() {
        mmooc.enroll.changeButtonText();
    });

    try {
        mmooc.menu.renderLeftHeaderMenu();
        mmooc.menu.showUserMenu();
    } catch (e) {
        console.log(e);
    }

    try {
        mmooc.routes.performHandlerForUrl(document.location);
    } catch (e) {
        console.log(e);
    }

    try {
        mmooc.menu.injectGroupsPage();
        mmooc.groups.changeGroupListURLs(document.location.href);

        mmooc.pages.updateSidebarWhenMarkedAsDone();

        mmooc.menu.alterHomeLink();
        mmooc.menu.alterCourseLink();
        
        mmooc.footer.addLicenseInFooter();

        $('#announcementbug').click(function() {
            mmooc.announcements.clearAnnouncements();
        });

    } catch(e) {
      console.log(e);
    }

});


RegExp.escape=function(s){return s.replace(/[-\/\\^$*+?.()|[\]{}]/g,'\\$&');};(function($){'use strict'
$.csv={defaults:{separator:',',delimiter:'"',headers:true},hooks:{castToScalar:function(value,state){var hasDot=/\./;if(isNaN(value)){return value;}else{if(hasDot.test(value)){return parseFloat(value);}else{var integer=parseInt(value);if(isNaN(integer)){return null;}else{return integer;}}}}},parsers:{parse:function(csv,options){var separator=options.separator;var delimiter=options.delimiter;if(!options.state.rowNum){options.state.rowNum=1;}
if(!options.state.colNum){options.state.colNum=1;}
var data=[];var entry=[];var state=0;var value=''
var exit=false;function endOfEntry(){state=0;value='';if(options.start&&options.state.rowNum<options.start){entry=[];options.state.rowNum++;options.state.colNum=1;return;}
if(options.onParseEntry===undefined){data.push(entry);}else{var hookVal=options.onParseEntry(entry,options.state);if(hookVal!==false){data.push(hookVal);}}
entry=[];if(options.end&&options.state.rowNum>=options.end){exit=true;}
options.state.rowNum++;options.state.colNum=1;}
function endOfValue(){if(options.onParseValue===undefined){entry.push(value);}else{var hook=options.onParseValue(value,options.state);if(hook!==false){entry.push(hook);}}
value='';state=0;options.state.colNum++;}
var escSeparator=RegExp.escape(separator);var escDelimiter=RegExp.escape(delimiter);var match=/(D|S|\n|\r|[^DS\r\n]+)/;var matchSrc=match.source;matchSrc=matchSrc.replace(/S/g,escSeparator);matchSrc=matchSrc.replace(/D/g,escDelimiter);match=RegExp(matchSrc,'gm');csv.replace(match,function(m0){if(exit){return;}
switch(state){case 0:if(m0===separator){value+='';endOfValue();break;}
if(m0===delimiter){state=1;break;}
if(m0==='\n'){endOfValue();endOfEntry();break;}
if(/^\r$/.test(m0)){break;}
value+=m0;state=3;break;case 1:if(m0===delimiter){state=2;break;}
value+=m0;state=1;break;case 2:if(m0===delimiter){value+=m0;state=1;break;}
if(m0===separator){endOfValue();break;}
if(m0==='\n'){endOfValue();endOfEntry();break;}
if(/^\r$/.test(m0)){break;}
throw new Error('CSVDataError: Illegal State [Row:'+options.state.rowNum+'][Col:'+options.state.colNum+']');case 3:if(m0===separator){endOfValue();break;}
if(m0==='\n'){endOfValue();endOfEntry();break;}
if(/^\r$/.test(m0)){break;}
if(m0===delimiter){throw new Error('CSVDataError: Illegal Quote [Row:'+options.state.rowNum+'][Col:'+options.state.colNum+']');}
throw new Error('CSVDataError: Illegal Data [Row:'+options.state.rowNum+'][Col:'+options.state.colNum+']');default:throw new Error('CSVDataError: Unknown State [Row:'+options.state.rowNum+'][Col:'+options.state.colNum+']');}});if(entry.length!==0){endOfValue();endOfEntry();}
return data;},splitLines:function(csv,options){var separator=options.separator;var delimiter=options.delimiter;if(!options.state.rowNum){options.state.rowNum=1;}
var entries=[];var state=0;var entry='';var exit=false;function endOfLine(){state=0;if(options.start&&options.state.rowNum<options.start){entry='';options.state.rowNum++;return;}
if(options.onParseEntry===undefined){entries.push(entry);}else{var hookVal=options.onParseEntry(entry,options.state);if(hookVal!==false){entries.push(hookVal);}}
entry='';if(options.end&&options.state.rowNum>=options.end){exit=true;}
options.state.rowNum++;}
var escSeparator=RegExp.escape(separator);var escDelimiter=RegExp.escape(delimiter);var match=/(D|S|\n|\r|[^DS\r\n]+)/;var matchSrc=match.source;matchSrc=matchSrc.replace(/S/g,escSeparator);matchSrc=matchSrc.replace(/D/g,escDelimiter);match=RegExp(matchSrc,'gm');csv.replace(match,function(m0){if(exit){return;}
switch(state){case 0:if(m0===separator){entry+=m0;state=0;break;}
if(m0===delimiter){entry+=m0;state=1;break;}
if(m0==='\n'){endOfLine();break;}
if(/^\r$/.test(m0)){break;}
entry+=m0;state=3;break;case 1:if(m0===delimiter){entry+=m0;state=2;break;}
entry+=m0;state=1;break;case 2:var prevChar=entry.substr(entry.length-1);if(m0===delimiter&&prevChar===delimiter){entry+=m0;state=1;break;}
if(m0===separator){entry+=m0;state=0;break;}
if(m0==='\n'){endOfLine();break;}
if(m0==='\r'){break;}
throw new Error('CSVDataError: Illegal state [Row:'+options.state.rowNum+']');case 3:if(m0===separator){entry+=m0;state=0;break;}
if(m0==='\n'){endOfLine();break;}
if(m0==='\r'){break;}
if(m0===delimiter){throw new Error('CSVDataError: Illegal quote [Row:'+options.state.rowNum+']');}
throw new Error('CSVDataError: Illegal state [Row:'+options.state.rowNum+']');default:throw new Error('CSVDataError: Unknown state [Row:'+options.state.rowNum+']');}});if(entry!==''){endOfLine();}
return entries;},parseEntry:function(csv,options){var separator=options.separator;var delimiter=options.delimiter;if(!options.state.rowNum){options.state.rowNum=1;}
if(!options.state.colNum){options.state.colNum=1;}
var entry=[];var state=0;var value='';function endOfValue(){if(options.onParseValue===undefined){entry.push(value);}else{var hook=options.onParseValue(value,options.state);if(hook!==false){entry.push(hook);}}
value='';state=0;options.state.colNum++;}
if(!options.match){var escSeparator=RegExp.escape(separator);var escDelimiter=RegExp.escape(delimiter);var match=/(D|S|\n|\r|[^DS\r\n]+)/;var matchSrc=match.source;matchSrc=matchSrc.replace(/S/g,escSeparator);matchSrc=matchSrc.replace(/D/g,escDelimiter);options.match=RegExp(matchSrc,'gm');}
csv.replace(options.match,function(m0){switch(state){case 0:if(m0===separator){value+='';endOfValue();break;}
if(m0===delimiter){state=1;break;}
if(m0==='\n'||m0==='\r'){break;}
value+=m0;state=3;break;case 1:if(m0===delimiter){state=2;break;}
value+=m0;state=1;break;case 2:if(m0===delimiter){value+=m0;state=1;break;}
if(m0===separator){endOfValue();break;}
if(m0==='\n'||m0==='\r'){break;}
throw new Error('CSVDataError: Illegal State [Row:'+options.state.rowNum+'][Col:'+options.state.colNum+']');case 3:if(m0===separator){endOfValue();break;}
if(m0==='\n'||m0==='\r'){break;}
if(m0===delimiter){throw new Error('CSVDataError: Illegal Quote [Row:'+options.state.rowNum+'][Col:'+options.state.colNum+']');}
throw new Error('CSVDataError: Illegal Data [Row:'+options.state.rowNum+'][Col:'+options.state.colNum+']');default:throw new Error('CSVDataError: Unknown State [Row:'+options.state.rowNum+'][Col:'+options.state.colNum+']');}});endOfValue();return entry;}},toArray:function(csv,options,callback){var options=(options!==undefined?options:{});var config={};config.callback=((callback!==undefined&&typeof(callback)==='function')?callback:false);config.separator='separator'in options?options.separator:$.csv.defaults.separator;config.delimiter='delimiter'in options?options.delimiter:$.csv.defaults.delimiter;var state=(options.state!==undefined?options.state:{});var options={delimiter:config.delimiter,separator:config.separator,onParseEntry:options.onParseEntry,onParseValue:options.onParseValue,state:state}
var entry=$.csv.parsers.parseEntry(csv,options);if(!config.callback){return entry;}else{config.callback('',entry);}},toArrays:function(csv,options,callback){var options=(options!==undefined?options:{});var config={};config.callback=((callback!==undefined&&typeof(callback)==='function')?callback:false);config.separator='separator'in options?options.separator:$.csv.defaults.separator;config.delimiter='delimiter'in options?options.delimiter:$.csv.defaults.delimiter;var data=[];var options={delimiter:config.delimiter,separator:config.separator,onParseEntry:options.onParseEntry,onParseValue:options.onParseValue,start:options.start,end:options.end,state:{rowNum:1,colNum:1}};data=$.csv.parsers.parse(csv,options);if(!config.callback){return data;}else{config.callback('',data);}},toObjects:function(csv,options,callback){var options=(options!==undefined?options:{});var config={};config.callback=((callback!==undefined&&typeof(callback)==='function')?callback:false);config.separator='separator'in options?options.separator:$.csv.defaults.separator;config.delimiter='delimiter'in options?options.delimiter:$.csv.defaults.delimiter;config.headers='headers'in options?options.headers:$.csv.defaults.headers;options.start='start'in options?options.start:1;if(config.headers){options.start++;}
if(options.end&&config.headers){options.end++;}
var lines=[];var data=[];var options={delimiter:config.delimiter,separator:config.separator,onParseEntry:options.onParseEntry,onParseValue:options.onParseValue,start:options.start,end:options.end,state:{rowNum:1,colNum:1},match:false};var headerOptions={delimiter:config.delimiter,separator:config.separator,start:1,end:1,state:{rowNum:1,colNum:1}}
var headerLine=$.csv.parsers.splitLines(csv,headerOptions);var headers=$.csv.toArray(headerLine[0],options);var lines=$.csv.parsers.splitLines(csv,options);options.state.colNum=1;if(headers){options.state.rowNum=2;}else{options.state.rowNum=1;}
for(var i=0,len=lines.length;i<len;i++){var entry=$.csv.toArray(lines[i],options);var object={};for(var j in headers){object[headers[j]]=entry[j];}
data.push(object);options.state.rowNum++;}
if(!config.callback){return data;}else{config.callback('',data);}},fromArrays:function(arrays,options,callback){var options=(options!==undefined?options:{});var config={};config.callback=((callback!==undefined&&typeof(callback)==='function')?callback:false);config.separator='separator'in options?options.separator:$.csv.defaults.separator;config.delimiter='delimiter'in options?options.delimiter:$.csv.defaults.delimiter;config.escaper='escaper'in options?options.escaper:$.csv.defaults.escaper;config.experimental='experimental'in options?options.experimental:false;if(!config.experimental){throw new Error('not implemented');}
var output=[];for(i in arrays){output.push(arrays[i]);}
if(!config.callback){return output;}else{config.callback('',output);}},fromObjects2CSV:function(objects,options,callback){var options=(options!==undefined?options:{});var config={};config.callback=((callback!==undefined&&typeof(callback)==='function')?callback:false);config.separator='separator'in options?options.separator:$.csv.defaults.separator;config.delimiter='delimiter'in options?options.delimiter:$.csv.defaults.delimiter;config.experimental='experimental'in options?options.experimental:false;if(!config.experimental){throw new Error('not implemented');}
var output=[];for(i in objects){output.push(arrays[i]);}
if(!config.callback){return output;}else{config.callback('',output);}}};$.csvEntry2Array=$.csv.toArray;$.csv2Array=$.csv.toArrays;$.csv2Dictionary=$.csv.toObjects;})(jQuery);
// ==========================================================================================
// This code was copied and adapted on January 27th 2015 from:
// https://s3.amazonaws.com/SSL_Assets/bham/uob/uob7.js 
// The functionality in the file is documented here:
// https://birmingham.instructure.com/courses/3915/pages/faq-jquery-in-canvas
// ==========================================================================================
// UOB7.JS
//
// Generic top-level script for University of Birmingham's Canvas implementation. This
// script, which requires jQuery and the jQuery.UI, carries out the following tasks:
//
// 		Adds FindIt@Bham link to Help Corner
// 		Hides "Report a Problem" Zendesk option from all but sub-account admins
// 		Enables accordions
// 		Enables tabs
// 		Enables reveal buttons
// 		Enables regexp reveals
//		Enables boxes
//		Hides forgot-password link on login page
//		Adds Google viewer previews to compatible file links
//		Add strap line for Canvas Gallery
//
// Most code is implemented within a $(document).load() to ensure that jQuery and the
// jQuery UI are both available, especially in Internet Explorer.
// 
//
// ==========================================================================================


$(document).load(

	$(function() {
		// -----------------------------------------------------------------------------------
		// Declare veriables that are used for multiple tasks.
		// -----------------------------------------------------------------------------------
		var i;
		var strSetNum = 0;

		// -----------------------------------------------------------------------------------
		// Add UoB enhancements to rich content displayed in courses.
		// -----------------------------------------------------------------------------------
		onPage(/\/(courses|groups)\/\d+/, function() {
			uobAddComponents();
		});
	})
)


// --------------------------------------------------------------------------------
// uobAddComponents
//
// This function will enable the following UoB components:
// 		accordions
// 		tabs
// 		reveal buttons
// 		regexp reveals
//		boxes (header, box, tip, info, warning, question)
//		previews
// --------------------------------------------------------------------------------

function uobAddComponents() {
	onElementRendered("#content .user_content.enhanced,#content .show-content.enhanced", function($content) {


		// ================================================================================
		// Show non-uob-component tables
		//
		// Show standard tables that are not UoB controls i.e. tables that do not include
		// the string "[uob-" in the first cell.
		// --------------------------------------------------------------------------------

		var $tables = $content.find("table:hidden").not("td:first(:contains('[uob-'))");
		$tables.show();


		// ================================================================================
		// Accordian (Part 1/2)
		//
		// Convert up to 10 uob-accordion tables to format required for accordions.
		// --------------------------------------------------------------------------------

		for (i = 0; i < 10; i++) {
			// Locate the next uob-accordion table.
			$table = $content.find("table").has("table > tbody > tr > td:contains([uob-accordion])").last();

			// Break loop if no more accordions are to be displayed.
			if ($table.length != 1) break;

			// Convert table into HTML for an accordian.
			$table.before("<div class='uob-accordion'></div>");

			$table.find("tbody:first > tr:gt(0) > td").each(function(_idx, _item) {
				if ((_idx + 1) % 2) {
					// Add heading 4 for accordion bar.
					$table.prev().append("<h4></h4>");
					$table.prev().children().last().append($(_item).text().trim());
				}

				if (_idx % 2) {
					// Add div for accordion content.
					$table.prev().append("<div></div>");
					$table.prev().children().last().append($(_item).contents());
				}
			});

			// Remove original table from the DOM
			$table.remove();
		}


		// ================================================================================
		// Tabs (Part 1/2)
		//
		// Convert up to 10 uob-tabs tables to format required for tabs.
		// --------------------------------------------------------------------------------

		strSetNum = 0;

		for (i = 0; i < 10; i++) {
			// Locate the next uob-tabs table.
			$table = $content.find("table").has("table > tbody > tr > td:contains([uob-tabs])").last();

			// Break loop if no more tabs are to be displayed.
			if ($table.length != 1) break;

			// Convert table into a set of tabs.
			$table.before("<div class='uob-tabs'><ul></ul></div>");
			strSetNum++;

			$table.find("tbody:first > tr:gt(0) > td").each(function(_idx, _item) {
				var strAnchor = "set" + strSetNum + "tab" + ((_idx - (_idx % 2)) / 2);

				if ((_idx + 1) % 2) {
					// Add list item for the tab label.
					var strHTML = "<li><a href=\"#" + strAnchor + "\">" + $(_item).text().trim() + "</a></li>";
					$table.prev().find("ul").first().append(strHTML);
				}

				if (_idx % 2) {
					// Add div for the tab content.
					$table.prev().append("<div id=\"" + strAnchor + "\"></div>");
					$("#" + strAnchor).append($(_item).contents());
				}
			});

			// Remove original table from the DOM
			$table.remove();
		}


		// ================================================================================
		// Reveal (Part 1/2)
		//
		// Convert up to 10 uob-reveal tables to format required for reveals.
		// ................................................................................

		strSetNum = 0;

		for (i = 0; i < 10; i++) {
			// Locate the next uob-reveal table
			var $table = $content.find("table").has("table > tbody > tr > td:contains([uob-reveal])").last();

			// Break loop if no more reveal tables are to be converted.
			if ($table.length != 1) break;

			// Convert table into a reveal
			strSetNum++;

			$table.find("tbody:first > tr:gt(0) > td").each(function(_idx, _item) {
				var strAnchor = "set" + strSetNum + "reveal" + ((_idx - (_idx % 2)) / 2);

				if ((_idx + 1) % 2) {
					// Add new reveal button immediately before table
					$table.before("<p><a href=\"#" + strAnchor + "\" class=\"uob-reveal-button\"></a></p>");
					$table.prev().children().append($(_item).text().trim());
				}

				if (_idx % 2) {
					// Add new reveal content immediately before table
					$table.before("<div id=\"" + strAnchor + "\" class=\"uob-reveal-content\"></div>");
					$table.prev().append($(_item).contents());
				}
			});

			// Remove original table
			$table.remove();
		}


		// ================================================================================
		// RegExp (Part 1/1)
		//
		// Convert up to 10 uob-regexp tables to format required for regexps.
		// --------------------------------------------------------------------------------

		strSetNum = 0;

		for (i = 0; i < 10; i++) {
			// Locate the next uob-regexp table
			var $table = $content.find("table").has("table > tbody > tr > td:contains([uob-regexp])").last();

			// Break loop if no more regexp tables are to be converted.
			if ($table.length != 1) break;

			// Convert table into a regexps
			strSetNum++;

			// Generate HTML for input and button/anchor controls, and add to the DOM.
			var strAnchor = "RE" + strSetNum;

			var strHTML = "<p><input id=\"input" + strAnchor + "\" class=\"uob-regexp-input\" type=\"text\" size=\"40\" />&nbsp;<a href=\"#" + strAnchor + "\" id=\"button" + strAnchor + "\" class=\"uob-regexp-button\">Check Answer</a></p>";
			strHTML += "<div id='content" + strAnchor + "'></div>";
			$table.before(strHTML);

			// Store regular expressions in button and create DIVs to store the contents.
			$table.find("tbody:first > tr:gt(0) > td").each(function(_idx, _item) {
				var strValue = $(_item).html();
				var strIndex = ((_idx - (_idx % 2)) / 2);

				if ((_idx + 1) % 2) {		// set RegExp
					strValue = $(_item).text().trim();
					$("#button" + strAnchor).attr("regexp" + strIndex, strValue);
				}

				if (_idx % 2) {			// set Content
					//$("#data" + strAnchor).attr("content" + strIndex, strValue);
					strHTML = "<div id=\"data" + strAnchor + "ID" + strIndex + "\" class=\"uob-regexp-content\"></div>";
					$("#content" + strAnchor).append(strHTML);
					$("#data" + strAnchor + "ID" + strIndex).append($(_item).contents());
				}
			});

			// Store IDs of input and button to button and input respectively.
			$("#button" + strAnchor).attr("regexpInput", "input" + strAnchor);
			$("#input" + strAnchor).attr("regexpButton", "button" + strAnchor);

			// Store default selection in button.
			$("#button" + strAnchor).attr("regexpData", "data" + strAnchor + "ID0");
			$("#button" + strAnchor).attr("regexpDataRoot", "data" + strAnchor + "ID");

			// Remove original table
			$table.remove();
		}


		// ================================================================================
		// Accordian (Part 2/2)
		//
		// Accordions will be contained within elements with a uob-accordion class and
		// headings will be restricted to h4 tags.
		// --------------------------------------------------------------------------------

		// Initialise accordions
		var $accordion = $content.find(".uob-accordion");

		if ($accordion.length) {
			$accordion.accordion({
				icons: null,
				heightStyle: "content",
				header: "> h4",
				collapsible: true,
				active: false,
				beforeActivate: function( event, ui ) {
					ui.oldPanel.find(".hide_youtube_embed_link").click();
				}
			});
		}


		// ================================================================================
		// Tabs (Part 2/2)
		//
		// Tabs will be contained within elements with a uob-tabs class.
		// --------------------------------------------------------------------------------

		// Initialise tabs
		var $tabs = $content.find(".uob-tabs");

		if ($tabs.length > 0) {
			$tabs.tabs({
				active: 0,
				collapsible: false,
				heightStyle: "content",
				beforeActivate: function( event, ui ) {
					ui.oldPanel.find(".hide_youtube_embed_link").click();
				}
			});
		}


		// ================================================================================
		// Reveal (Part 2/2)
		//
		// The uob-reveal-button and uob-reveal-content classes are required for reveals.
		// ................................................................................

		// Initialise reveal contents.
		var $revealBody = $content.find(".uob-reveal");

		if ($revealBody.length) {
			for (i = 0; i < $revealBody.length; i++) {
				var strSelector = $revealBody[i].href;
				var iHashPos = strSelector.lastIndexOf("#");

				if (iHashPos >= 0) {
					$(strSelector.slice(iHashPos + 1)).css("display", "none");
				}
			};
		}

        mmooc.greeting.enableGreetingButtonIfNecessary($content);

		// Initialise reveal buttons.
		var $revealButton = $content.find(".uob-reveal-button");

		if ($revealButton.length) {
			$revealButton.button({ icons: { secondary: "ui-icon-triangle-1-e" } })
				.click(function(event) {
					var $button = $(this);
					var body = $button.attr("href");
					var options;

					if ($(body).css("display") != "none") {
						$(body).slideUp(400);
						$(body).find(".hide_youtube_embed_link").click();
						options = { icons: { secondary: "ui-icon-triangle-1-e" } };
					} else {
						$(body).slideDown(400);
						options = {	icons: { secondary: "ui-icon-triangle-1-s" } };
					}

					$button.button("option", options);
					return(false);
				});
		}


		// ================================================================================
		// RegExp (Part 2/2)
		//
		// The uob-regexp-input, uob-regexp-button, uob-regexp-content classes are required
		// for regexp.
		// --------------------------------------------------------------------------------

		// Initialise regexp inputs.
		var $regexpInput = $content.find(".uob-regexp-input");

		if ($regexpInput.length) {
			$regexpInput.focus(function(event) {
				var $input = $(this);
				var $button = $("#" + $input.attr("regexpButton"));

				var strData = $button.attr("regexpData");
				var strDataRoot = $button.attr("regexpDataRoot");

				if (strData != "") {
					var $data = $("#" + strData);
					var options;

					// Hide current display if visible
					if ($data.css("display") != "none") {
						$data.slideUp(400);
						$data.find(".hide_youtube_embed_link").click();
						options = { icons: { secondary: "ui-icon-triangle-1-e" } };
						$button.button("option", options);
						$button.attr("regexpData", "");
					}
				}
			});
		}

		// Initialise regexp buttons.
		var $regexpButton = $content.find(".uob-regexp-button");

		if ($regexpButton.length) {
			$regexpButton.button({ icons: { secondary: "ui-icon-triangle-1-e" } })
				.click(function(event) {
					var $button = $(this);
					var $input = $("#" + $button.attr("regexpInput"));

					var strData = $button.attr("regexpData");
					var strDataRoot = $button.attr("regexpDataRoot");
					if (strData == "") strData = strDataRoot + "0";
					var $data = $("#" + strData);
					var options;

					// Hide current display if visible
					if ($data.css("display") != "none") {
						$data.slideUp(400);
						options = { icons: { secondary: "ui-icon-triangle-1-e" } };
						$button.button("option", options);
						$button.attr("regexpData", "");
					} else {
						// Locate content to be displayed
						var strInput = $input.val();

						// Loop through regexp looking for a match and identify content.
						for (i = 0; i < 100; i++) {
							var strRegExp = $button.attr("regexp" + i);

							if (strRegExp == undefined || strRegExp.length == 0)
								break;

							var re = new RegExp("^" + strRegExp.trim() + "$");

							if (strRegExp == "default" || re.test(strInput)) {
								$button.attr("regexpData", "" + strDataRoot + i);
								$data = $("#" + strDataRoot + i);
								break;
							}
						}

						$data.slideDown(400);
						options = {	icons: { secondary: "ui-icon-triangle-1-s" } };
						$button.button("option", options);
						return(false);
					}
				});
		}


		// ================================================================================
		// Rating
		//
		// A rating will be constructed using radio buttons.
		// See http://www.fyneworks.com/jquery/star-rating/
		// --------------------------------------------------------------------------------

		// Convert uob-rating table to format required for ratings.
		var $ratingTable = $content.find("table").has("table > tbody > tr > td:contains([uob-rating])");

		if ($ratingTable.length) {
			// Cut table from the DOM
			$ratingTable.remove();

			// Determine is user is more than a student.
			var isTeacher = false;

			hasAnyRole("teacher", "admin", function() {
				isTeacher = true;
			});

			// Add rating control to DOM
			var strParams = "?page_loc=" + encodeURIComponent(location.pathname);
			strParams += "&page_title=" + encodeURIComponent(document.title);
			strParams += "&user_id=" + ENV.current_user_id;
			strParams += "&user_name=" + encodeURIComponent(ENV.current_user.display_name);
			var strRating = "<iframe src=\"https://www.vampire.bham.ac.uk/canvas/rating.aspx" + strParams + "\" width=\"100%\" height=\"32\"></iframe>";
			strRating = "<div id='uob-rating-container-x'>" + strRating + "</div>";
			$content.append(strRating);
		}


		// ================================================================================
		// Boxes
		//
		// Create boxes from all tables with the codes: uob-tip, uob-info, uob-warning,
		// uob-header and uob-question.
		// --------------------------------------------------------------------------------

		aBoxTags = ["uob-tip", "uob-read", "uob-info", "uob-warning", "uob-header", "uob-question", "uob-quote", "uob-box"];

		for (var i = 0; i < aBoxTags.length; i++) {
			var strTag = aBoxTags[i];
			var $boxTable = $content.find("table").has("table > tbody > tr > td:contains([" + strTag + "])");

			if ($boxTable.length) {
				$boxTable.each(function(_idx, _item) {
					// Add new container immediately before table
					$table = $(_item);

					if (strTag == "uob-header")
						$table.before("<h2 class=\"" + strTag + "\"></h2>");
					else if (strTag == "uob-quote")
						$table.before("<div class=\"" + strTag + "\"><div class=\"uob-quote99\" /></div>");
					else
						$table.before("<div class=\"" + strTag + "\"></div>");

					// Move content from table to container
					$table.prev().append($table.find("tr:eq(1) > td:eq(0)").contents());

					// Remove original table
					$table.remove();
				});
			}
		}

		// ================================================================================
		// Previews
		//
		// This code will append preview buttons immediately after each file link in the
		// content of a page. File links are identified by the instructure_file_link class.
		// When clicked the first time, the preview button will call a function to complete
		// the DOM changes, which are not possible before the DOM manipulation carried out
		// within Canvas is complete. The new HTML for the preview button will be similar
		// to the following:
		//
		// <a href="javascript:uobShowPreviewDocument(0)" title="Preview example.pdf" id="uobPreview0">
		//     <img src="/images/preview.png" alt="Preview example.pdf">
		// </a>
		// --------------------------------------------------------------------------------

		$content.find(".instructure_file_link_holder.link_holder").has("a").each(function(_idx, _item) {
			// Initialise varibles
			var $item = $(_item);
			var $anchor = $(_item).find('a').filter(':first');
			var strHref = $anchor.attr('href') || "";	// if href is not found, set strHref to an empty string.
			var iScribd = $(_item).find('.instructure_scribd_file_holder').length || 0;

			if (iScribd > 0) {
				strHref = "";
			}

			if (strHref.length > 0) {
				// Obtain ID of the file (index is 4 or 6 respectivelly for non-draft and draft modes)
				var file_id = strHref.split('/')[strHref.indexOf("/courses") == 0 ? 4 : 6];

				// Use Canvas API to obtain information about the file being linked.
				$.get('/api/v1/files/' + file_id, function(_d) {

					// Check that the file type is compatible with the Google viewer.
					if ($.isPreviewable(_d['content-type'], 'google') === 1) {

						// Initialise variables
						var displayName = _d['display_name'];

						// Create anchor element for the link. Note, _idx is used to make each
						// link unique. The file_id cannot be used in case when the same file
						// link appears more than once on a page.
						var $a = $(document.createElement('a'))
							.attr('href', 'javascript:uobShowPreviewDocument(' + _idx + ')')
							.attr('title', 'Preview ' + displayName)
							.attr('id', 'uobPreview' + _idx)
							.data('href2', strHref);

						// Create preview icon for the link
						var $img = $(document.createElement('img'))
							.attr('src', '/images/preview.png')
							.attr('alt', 'Preview ' + displayName);

						// Combine the preview icon with the anchor and add them to the DOM.
						$a.append($img);
						$anchor.after($a);
						//$(_item).append($a);
					}
				});
			}
		});


		// ================================================================================
		// Refresh after publish/unpublish
		//
		// Add dummy callback function to detect when the page is published or unpublished.
		// The callback function will constantly check for the div and refresh the UoB
		// components if the div is missing.
		// --------------------------------------------------------------------------------

		// Create dummy div and add it to the DOM
		var $div = $(document.createElement('div')).attr('id', 'uob-components-loaded');
		$content.append($div);

		// Set callback to test for missing div, as occurs when pages are published/unpublished.
		onElementMissing("#uob-components-loaded", function($identity) {
			uobAddComponents();
		});


		// ================================================================================
		// --------------------------------------------------------------------------------

	});
}


// --------------------------------------------------------------------------------
// uobShowPreviewDocument
//
// This function will amend a preview link so that when it is clicked, it will
// display documents using the Google viewer. This function will only be called
// once for each preview link, the first time it is clicked. When amended, the link
// is moved into the SPAN element with a "link_holder" class which should
// immediately precede the link. The preview link is given a new href attribute,
// the "scribd_file_preview_link" class and the click event will be triggered.
// --------------------------------------------------------------------------------

function uobShowPreviewDocument(iFileID) {
	// Initialise object variables to simplify the code. $target is the preview link
	// and $holder is the preceding or parent SPAN element (if it exists).
	var $target = $('#uobPreview' + iFileID);
	var $holder = $target.prev('span.link_holder');

	if ($holder.length == 0) {
		$holder = $target.parent('span.link_holder');
	}

	// Check that preceding element is a SPAN with the "link_holder" class.
	if ($holder.length) {

		// Move the anchor element into the preceeding span element
		$holder.append($target);

		// Replace href value, add the "scribd_file_preview_link" class and click.
		$target
			.attr('href', $target.data('href2'))
			.addClass('scribd_file_preview_link')
			.click();
	}
}


// --------------------------------------------------------------------------------
// Instructure/rpflorence functions
//
// (see http://youtu.be/ag6mxnBMTnQ and https://gist.github.com/rpflorence/5817898)
// Functions slightly amended and onElementMissing function added.
// --------------------------------------------------------------------------------

function onPage(regex, fn) {
  if (location.pathname.match(regex)) fn();
}


function hasAnyRole(/* role1, role2..., cb */) {
	var roles = [].slice.call(arguments, 0);
	var cb = roles.pop();

	if (typeof ENV != "object") return cb(false);
	if (typeof ENV.current_user_roles != "object") return cb(false);
	if (ENV.current_user_roles == null) return cb(false);

	for (var i = 0; i < roles.length; i++) {
		if (ENV.current_user_roles.indexOf(roles[i]) !== -1) return cb(true);
	}

	return cb(false);
}


function isUser(id, cb) {
	cb(ENV.current_user_id == id);
}


function onElementRendered(selector, cb, _attempts) {
	var el = $(selector);
	_attempts = ++_attempts || 1;
	if (el.length) return cb(el);
	if (_attempts >= 60) return;

	setTimeout(function() {
		onElementRendered(selector, cb, _attempts);
	}, 200);
}


function onElementMissing(selector, cb) {
	var el = $(selector);
	if (!el.length) return cb(el);

	setTimeout(function() {
		onElementMissing(selector, cb);
	}, 700);
}


function getQueryVariable(variable) {
	var query = window.location.search.substring(1);
	var vars = query.split("&");

	for (var i=0;i<vars.length;i++) {
		var pair = vars[i].split("=");
		if(pair[0] == variable){return pair[1];}
	}

	return(false);
}

$(function () {
    // console.log("CANVABADGES: Loaded!");
    // NOTE: if pasting this code into another script, you'll need to manually change the
    // next line. Instead of assigning the value null, you need to assign the value of
    // the Canvabadges domain, i.e. "https://www.canvabadges.org". If you have a custom
    // domain configured then it'll be something like "https://www.canvabadges.org/_my_site"
    // instead.
    // var protocol_and_host = null; Overridden because of the comment above
    //Some small changes has been made to this script so it is displayed also on the about/<user id> page and /profile/settings page.
    //The original is here: https://www.canvabadges.org/canvas_profile_badges.js
    if (mmooc.settings.useCanvaBadge) { //Only run this code if it is set to be used in the settings
        var protocol_and_host = mmooc.settings.CanvaBadgeProtocolAndHost; //'https://canvabadges-beta-iktsenteret.bibsys.no' - this is where the Canva Badge certificate is stored.;
        var isProfilePage = false;
        var user_id;
        if (!protocol_and_host) {
            var $scripts = $("script");
            $("script").each(function () {
                var src = $(this).attr('src');
                if (src && src.match(/canvas_profile_badges/)) {
                    var splits = src.split(/\//);
                    protocol_and_host = splits[0] + "//" + splits[2];
                }
                var prefix = src && src.match(/\?path_prefix=\/(\w+)/);
                if (prefix && prefix[1]) {
                    protocol_and_host = protocol_and_host + "/" + prefix[1];
                }
            });
        }
        if (!protocol_and_host) {
            console.log("CANVABADGES: Couldn't find a valid protocol and host. Canvabadges will not appear on profile pages until this is fixed.");
        }
        var match = location.href.match(/\/(users|about)\/(\d+)$/);
        if (!match) {
            match = location.href.match(/\/profile\/settings$/);
            isProfilePage = true;
        }
        if (match && protocol_and_host) {
            console.log("CANVABADGES: This page shows badges! Loading...");
            if (isProfilePage) {
                user_id = mmooc.api.getUser().id;
            } else {
                user_id = match[2];
            }

            var domain = location.host;
            var url = protocol_and_host + "/api/v1/badges/public/" + user_id + "/" + encodeURIComponent(domain) + ".json";
            $.ajax({
                type: 'GET',
                dataType: 'jsonp',
                url: url,
                success: function (data) {
                    console.log("CANVABADGES: Data retrieved!");
                    if (data.objects && data.objects.length > 0) {
                        console.log("CANVABADGES: Badges found! Adding to the page...");
                        var $box = $("<div/>", { style: 'margin-bottom: 20px;' });
                        $box.append("<h2 class='border border-b'>Badges</h2>");
                        for (idx in data.objects) {
                            var badge = data.objects[idx];
                            var $badge = $("<div/>", { style: 'float: left;' });
                            var link = protocol_and_host + "/badges/criteria/" + badge.config_id + "/" + badge.config_nonce + "?user=" + badge.nonce;
                            var $a = $("<a/>", { href: link });
                            $a.append($("<img/>", { src: badge.image_url, style: 'width: 72px; height: 72px; padding-right: 10px;' }));
                            $badge.append($a);
                            $box.append($badge);
                        }
                        $box.append($("<div/>", { style: 'clear: left' }));
                        $("#edit_profile_form,fieldset#courses,.more_user_information + div, #update_profile_form").after($box);
                    } else {
                        console.log("CANVABADGES: No badges found for the user: " + user_id + " at " + domain);
                    }
                },
                error: function (err) {
                    console.log("CANVABADGES: Badges failed to load, API error response");
                    console.log(err);
                },
                timeout: 5000
            });
        } else {
            console.log("CANVABADGES: This page doesn't show badges");
        }
    }
});