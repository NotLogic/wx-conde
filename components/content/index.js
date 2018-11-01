// components/content/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    contentUrl: {
      type: String,
      value: ''
    },
    title: {
      type: String,
      value: ''
    },
    tab: {
      type: String,
      value: ''
    },
    good: {
      type: Boolean,
      value: false
    },
    top: {
      type: Boolean,
      value: false
    },
    createAt: {
      type: String,
      value: ''
    },
    replyCount: {
      type: Number,
      value: 0
    },
    visitCount: {
      type: Number,
      value: 0
    },
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
