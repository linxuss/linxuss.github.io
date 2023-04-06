<template>
  <div id="container">
    <!-- 基本信息 -->
    <div
      id="baseInfo"
      class="basic"
    >
      <!-- <div class="basic-photo">
                    <img class="mr_headimg user-avatar" id="userpic" src="https://www.lgstatic.com/common/image/pc/default_boy_headpic1.png" width="120" height="120" alt="头像"
                    />
                </div> -->
      <div class="basic-info">
        <div class="basic-name-area">
          <p class="basic-name female">
            林旭
          </p>
          <i class="icon-sex icon-sex__male" />
        </div>
        <p>
          <span class="basic-company">航安云创科技北京有限公司</span>
          <span> / </span>
          <span class="basic-job">前端工程师</span>
        </p>
        <p class="basic-self">
          <span class="basic-exp">2年工作经验 / </span>
          <span class="basic-edu">本科 . 统招
            /
          </span>
          <span class="basic-age">24岁</span>
        </p>
        <p>
          <span class="basic-tel">
            <i class="basic-tel_icon" />
            <span> 15823332247</span>
          </span>
          <span class="basic-email">
            <i class="basic-email_icon" />
            <span> 657002782@qq.com</span>
          </span>
        </p>
      </div>
    </div>
    <!-- /基本信息 -->

    <!-- 自我描述 -->
    <div
      id="perAbility"
      class="mr-template per"
    >
      <div class="mr-template_title">
        <span>个人优势</span>
      </div>
      <div class="tagboard integrative-tag">
        <div class="integrative-tag_content" />
      </div>
      <div class="per-self_content">
        <div class="per-self_des">
          <p>1.熟悉 web 前端开发技术，包括 HTML，CSS， JavaScript，TypeScript。</p>
          <p>2.熟悉 ES 6相关特性，有良好的编码习惯和风格。</p>
          <p>3.熟练使用 Vue3 + vue-router + pinia，有1年半的vue3开发经验。</p>
          <p>4.熟悉webpack，熟练使用 git 进行项目管理，有团队协作开发经验。</p>
        </div>
      </div>
    </div>
    <!-- /自我描述 -->

    <!-- 工作经历 -->
    <div
      id="workExp"
      class="mr-template work-exp"
    >
      <div class="mr-template_title">
        <span>工作经历</span>
      </div>
      <ol class="work-exp_group">
        <li class="work-exp_list">
          <p class="exp-list_time">
            2021.07-2023.02
          </p>
          <div class="exp-list_top">
            <img
              src="https://www.lgstatic.com/images/logo_default.png"
              alt="公司Logo"
            >
            <div class="exp-list_right">
              <strong class="exp-list_title">
                <span>航安云创科技北京有限公司</span>
                ／
                <span>研发部</span>
              </strong>
              <p>前端工程师</p>
            </div>
          </div>
          <div class="tagboard" />
          <div class="exp-list_content">
            <p>1. 与后端开发团队紧密配合，确保代码有效对接。</p>
            <p>2. 参与安防集成平台的重构工作。</p>
            <p>3. 负责安防集成管理平台的前端开发和其他项目的维护。</p>
            <p>4. 维护视频组件。</p>
          </div>
        </li>
      </ol>
    </div>
    <!-- /工作经历 -->

    <!-- 项目经历 -->
    <div
      id="proExp"
      class="mr-template pro-exp"
    >
      <div class="mr-template_title">
        <span>项目经历</span>
      </div>
      <ol class="pro-exp_group">
        <li class="pro-exp_list">
          <p class="exp-list_title">
            <span class="exp-project_name">安防集成管理平台</span>
            <span class="exp-project_company">（<span>航安云创科技北京有限公司</span>）</span>
          </p>
          <p class="exp-list_time">
            2021.07-2023.02
          </p>
          <div class="exp-project_des">
            <p>
              项目描述：monorepo 项目，机场的后台安防管理系统，主要有系统管理，安保报警，设备管理，视频播放，安全数据查询，存储管理，巡检管理等模块。通过导入不同的模块实现对机场的定制化。
            </p>
            <p>使用技术：vue3，Element Plus，TypeScript ，pug 。</p>
            <p>主要工作：</p>
            <p>1. 根据工作安排高效、高质地完成代码编写，确保符合规范的前端代码。</p>
            <p>2. 权限做到按钮级，管理员可定制化角色权限。</p>
            <p>3. 负责报警模块的开发，使用 websocket 接收报警信息。</p>
            <p>4. 负责视频组件的开发和维护。</p>
            <p>5. 临时轮巡（用来判断摄像机是否正常工作）：获取目录树下所有的设备，播放后保存状态，然后前端导出 excel。</p>
            <p>6. 提取公共组件。</p>
          </div>
          <div class="exp-list_content">
            <p><br></p>
          </div>
        </li>
      </ol>
    </div>
    <!-- /项目经历 -->
    <!-- 教育经历 -->
    <div
      id="eduExp"
      class="mr-template edu-exp"
    >
      <div class="mr-template_title">
        <span>教育经历</span>
      </div>
      <ol class="edu-exp_group">
        <li class="edu-exp_list">
          <p class="exp-list_time">
            2017.09-2021.06
          </p>
          <div class="exp-list_top">
            <img
              src="https://www.lgstatic.com/i/image/M00/AD/4F/CgqKkVi1E4iABfB8AAAVtpO5T4865.jpeg"
              alt="学校Logo"
            >
            <div class="exp-list_right">
              <strong>天津理工大学</strong>
              <p>本科 . 统招 / 计算机科学与技术</p>
            </div>
          </div>
        </li>
      </ol>
    </div>
    <!-- /教育经历 -->

    <!-- 社交主页 -->
    <!-- /社交主页 -->

    <!-- 图片作品 -->
    <!-- /图片作品 -->
  </div>
</template>

<style scoped>
* {
    outline: none;
}

body {
    margin: 0;
    padding: 0;
    font-size: 14px;
    font-family: "Hiragino Sans GB", "Microsoft Yahei", "SimSun", Arial, "Helvetica Neue", Helvetica;
    color: #333;
    word-wrap: break-word;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
menu,
nav,
section,
summary {
    display: block;
}

progress {
    display: inline-block;
    vertical-align: baseline;
}

a {
    color: #555;
    background-color: transparent;
    text-decoration: none;
}

a:hover {
    color: #00b38a;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 10px 0;
    font-weight: normal;
}

p {
    margin: 0;
}

p+p {
    margin-top: 10px;
}

img {
    border: 0;
    vertical-align: top;
    display: inline-block;
}

button,
input,
optgroup,
select,
textarea {
    margin: 0;
    padding: 0;
    border: 1px solid #ededed;
    border-radius: 0;
    font-family: "Hiragino Sans GB", "Microsoft Yahei", "SimSun", Arial, "Helvetica Neue", Helvetica;
}

textarea {
    overflow: auto;
}

label,
select,
button,
input[type="button"],
input[type="reset"],
input[type="submit"],
input[type="radio"],
input[type="checkbox"],
input[type="file"] {
    cursor: pointer;
}

input[type=text],
input[type=password],
textarea {
    font-family: "Microsoft Yahei", "SimSun", Arial, "Helvetica Neue", Helvetica;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}

th,
td {
    padding: 0;
}

strong {
    font-weight: normal;
}

em,
i {
    font-style: normal;
}

dl,
dt,
dd {
    margin: 0;
}

::selection {
    color: #fff;
    background-color: #00b38a;
}

::-moz-selection {
    color: #fff;
    background-color: #00b38a;
}

ul,
ol {
    margin: 0;
    padding: 0;
    list-style: none;
}

#container {
    width: 720px;
    margin: 50px auto 54px auto;
    border: 1px solid #e3ebe9;
    border-radius: 5px;
}

.mr-template {
    padding: 50px 50px 10px;
}

.mr-template .mr-template_title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
}

.mr-template .mr-template_title span {
    font-size: 18px;
    color: #333333;
    font-weight: 600;
    position: relative;
    margin-left: 10px;
}

.mr-template .mr-template_title span:before {
    content: '';
    display: block;
    border-left: 3px solid #00B38A;
    height: 16px;
    width: 3px;
    position: absolute;
    left: -7px;
    top: 50%;
    transform: translateY(-50%);
}

.mr-template .mr_md_del {
    display: none;
}

/***** 基本信息 ****/

.basic {
    padding: 50px;
    background: #FAFAFA;
    border-radius: 5px 5px 0 0;
    border-bottom: 1px solid #E3EBE9;
    display: flex;
}

.basic .basic-photo {
    height: 88px;
    width: 88px;
    display: inline-block;
    position: relative;
}

.basic .basic-photo img {
    height: 88px;
    width: 88px;
    position: absolute;
    top: 0;
    border-radius: 50%;
}

.basic .basic-photo .basic-photo_shadow {
    display: none;
}

.basic .basic-photo:hover .basic-photo_shadow {
    display: block;
}

.basic .basic-info {
    position: relative;
    width: 100%;
    margin-left: 20px;
    flex: 1;
}

.basic .basic-info .edit-btn {
    position: absolute;
    right: 0;
    top: 4px;
}

.basic .basic-info .basic-name-area {
    overflow: hidden;
    height: 37px;
    margin-bottom: 11px;
}

.basic .basic-info .basic-name {
    float: left;
    max-width: 250px;
    font-size: 26px;
    color: #333333;
    font-weight: 600;
    line-height: 37px;
}

.basic .basic-info .icon-sex {
    width: 13px;
    height: 13px;
    float: left;
    margin-top: 16px;
    margin-left: 10px;
    background: none;
}

.basic .basic-info .icon-sex.icon-sex__male {
    background: url(https://www.lgstatic.com/common/image/pc/icon_man.png);
}

.basic .basic-info .icon-sex.icon-sex__female {
    background: url(https://www.lgstatic.com/common/image/pc/icon_woman.png);
}

.basic .basic-info .basic-self {
    margin-top: 20px;
}

.basic .basic-info p {
    font-size: 14px;
    color: #333333;
    line-height: 20px;
    margin-top: 6px;
}

.basic .basic-info i {
    display: inline-block;
    margin-right: 5px;
    vertical-align: middle;
}

.basic .basic-info .basic-tel_icon {
    width: 11px;
    height: 14px;
    margin-right: 2px;
    background: url(https://www.lgstatic.com/common/image/pc/icon_phone.png);
    display: inline-block;
    vertical-align: middle;
}

.basic .basic-info .basic-email_icon {
    width: 14px;
    height: 11px;
    margin-right: 2px;
    background: url(https://www.lgstatic.com/common/image/pc/icon_mail.png);
    display: inline-block;
    vertical-align: middle;
}

.basic .basic-info .basic-tel {
    margin-right: 20px;
}

.basic-tel span {
    vertical-align: middle;
}

.basic-email span {
    vertical-align: middle;
}

/***** 基本信息 end ****/

/***** 自我描述 ****/

.per .per-self_content {
    position: relative;
}

.per .per-self_content .per-self_des {
    margin-top: 13px;
    font-size: 14px;
    color: #666666;
    line-height: 30px;
}

.per .per-self_content .per-self_des p {
    margin-top: 0;
}

.per .per-self_content .per-self_des ol {
    list-style-type: decimal;
    -webkit-padding-start: 20px;
}

.per .per-self_content .per-self_des ul {
    list-style: disc;
    -webkit-padding-start: 20px;
}

/***** 自我描述 end ****/

/***** 工作经历 ****/

.work-exp .work-exp_list {
    position: relative;
    margin-bottom: 30px;
}

.work-exp .work-exp_list .exp-list_time {
    font-size: 14px;
    color: #666666;
    position: absolute;
    right: 0;
}

.work-exp .work-exp_list .exp-list_top {
    display: flex;
    align-items: center;
}

.work-exp .work-exp_list .exp-list_top img {
    width: 46px;
    height: 46px;
    margin-right: 10px;
}

.work-exp .work-exp_list .exp-list_top .exp-list_right {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 46px;
    justify-content: space-between;
}

.work-exp .work-exp_list .exp-list_top .exp-list_right p,
.work-exp .work-exp_list .exp-list_top .exp-list_right strong {
    font-size: 14px;
    color: #333333;
}

.work-exp .work-exp_list .exp-list_top .exp-list_right strong {
    font-weight: 600;
}

.work-exp .work-exp_list .tagboard {
    margin: 20px 0 10px;
}

.work-exp .work-exp_list .exp-list_content {
    font-size: 14px;
    color: #666666;
    line-height: 30px;
}

.tagboard .tagboard-tag {
    font-size: 12px;
    color: #999;
    line-height: 18px;
    padding: 3px 10px;
    border: 1px solid #EAEDEC;
    border-radius: 100px;
    margin-right: 10px;
}

.work-exp .work-exp_list .exp-list_content ul,
.work-exp .work-exp_list .exp-list_content_highlight ul {
    list-style: disc;
    -webkit-padding-start: 20px;
}

.work-exp .work-exp_list .exp-list_content ol,
.work-exp .work-exp_list .exp-list_content_highlight ol {
    list-style-type: decimal;
    -webkit-padding-start: 20px;
}

/***** 工作经历 end ****/

/***** 项目经历 ****/

.pro-exp .pro-exp_list {
    position: relative;
    margin-bottom: 30px;
}

.pro-exp .pro-exp_list .exp-list_title {
    font-size: 14px;
    color: #333333;
    font-weight: 600;
    cursor: default;
    display: flex;
}

.pro-exp .pro-exp_list .exp-list_title .exp-project_name,
.pro-exp .pro-exp_list .exp-list_title .exp-project_company span {
    max-width: 222px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.pro-exp .pro-exp_list .exp-list_title .exp-project_company {
    display: flex;
}

.pro-exp .pro-exp_list .exp-list_time {
    font-size: 14px;
    color: #666666;
    position: absolute;
    right: 0;
    top: 0;
}

.pro-exp .pro-exp_list .exp-list_content,
.pro-exp .pro-exp_list .exp-project_des {
    font-size: 14px;
    color: #666666;
    line-height: 30px;
    margin-top: 10px;
}

.pro-exp .exp-list_title.active:hover {
    color: #00B38A;
    cursor: pointer;
}

.pro-exp .exp-project_url {
    font-size: 14px;
    color: #666;
    line-height: 30px;
}

.pro-exp .pro-exp_list .exp-list_content ul,
.pro-exp .pro-exp_list .exp-project_des ul {
    list-style: disc;
    -webkit-padding-start: 20px;
}

.pro-exp .pro-exp_list .exp-list_content ol,
.pro-exp .pro-exp_list .exp-project_des ol {
    list-style-type: decimal;
    -webkit-padding-start: 20px
}

/***** 项目经历 end ****/

/***** 教育经历 ****/

.edu-exp .edu-exp_list {
    position: relative;
    margin-bottom: 30px;
}

.edu-exp .edu-exp_list .exp-list_time {
    font-size: 14px;
    color: #666666;
    position: absolute;
    right: 0;
}

.edu-exp .edu-exp_list .exp-list_top {
    display: flex;
    align-items: center;
}

.edu-exp .edu-exp_list .exp-list_top img {
    width: 46px;
    height: 46px;
    margin-right: 10px;
}

.edu-exp .edu-exp_list .exp-list_top .exp-list_right {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 46px;
    justify-content: space-between;
}

.edu-exp .edu-exp_list .exp-list_top .exp-list_right p,
.edu-exp .edu-exp_list .exp-list_top .exp-list_right strong {
    font-size: 14px;
    color: #333333;
}

.edu-exp .edu-exp_list .exp-list_top .exp-list_right strong {
    font-weight: 600;
}

/***** 教育经历 end ****/

/***** 社交主页 ****/

.social-page .social-page_list {
    margin-bottom: 30px;
    position: relative;
}

.social-page .social-page_list .social-page_content {
    display: flex;
}

.social-page .social-page_list .social-page_content img {
    width: 24px;
    height: 24px;
    margin-right: 10px;
    border-radius: 50%;
}

.social-page .social-page_list .social-page_content p {
    font-size: 14px;
    color: #666666;
}

/***** 社交主页 end ****/
/***** 图片作品 ****/

.portfolio-page .portfolio-list {
    margin-bottom: 30px;
    position: relative;
}

.portfolio-page .portfolio-list .portfolio-content {
    font-size: 14px;
    color: #666666;
}

/***** 图片作品 end ****/
</style>
