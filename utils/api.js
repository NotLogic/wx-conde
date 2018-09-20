var http = require('./http.js')

export function gettopics(data){
  return http({
    url: 'topics',
    data: data
  })
}

export function gettopicsDetails(id){
  return http({
    url: 'topic/' + id
  })
}

export function getUserDetails(loginname){
  return http({
    url: 'user/' + loginname
  })
}

export function getUserCollect(loginname) {
  return http({
    url: 'topic_collect/' + loginname
  })
}