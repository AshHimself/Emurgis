import { FlowRouter } from "meteor/kadira:flow-router"
import { BlazeLayout } from "meteor/kadira:blaze-layout"
import { appRoutes } from './group-config'

import "/imports/ui/components/documents/index/documents-index.js"
import "/imports/ui/components/documents/new/document-new.js"
import "/imports/ui/components/documents/show/document-show.js"
import "/imports/ui/components/documents/show/document-comments.js"
import "/imports/ui/components/documents/edit/document-edit.js"
import '/imports/ui/components/documents/index/documents-claimed'
import '/imports/ui/components/documents/index/documents-logged.js'
import '/imports/ui/components/documents/index/documents-resolved'

// ***************************************************************
// Document routes
// ***************************************************************

// DOCUMENTS INDEX
// -------------------------------------------------------
appRoutes.route("/", {
  action: function() {
    BlazeLayout.render("layout", {
      header: "header",
      main: "documentsIndex",
      footer: "footer",
      sidebar: 'sidebar'
    })
  },
  name: "documentsIndex"
})

// DOCUMENT NEW
// -------------------------------------------------------
appRoutes.route("/new", {
  action: function() {
    BlazeLayout.render("layout", {
      header: "header",
      main: "documentNew",
      footer: "footer",
      sidebar: 'sidebar'
    })
  },
  name: "documentNew"
})

// CLAIMED DOCUMENTS
// -------------------------------------------------------
appRoutes.route('/claimed', {
    name: 'documentsClaimed',
    action: () => {
        BlazeLayout.render('layout', {
            header: 'header',
            main: 'documentsClaimed',
            footer: 'footer',
            sidebar: 'sidebar'
        })
    }
})

// LOGGED DOCUMENTS
// -------------------------------------------------------
appRoutes.route('/logged', {
  name: 'documentsLogged',
  action: () => {
      BlazeLayout.render('layout', {
          header: 'header',
          main: 'documentsLogged',
          footer: 'footer',
          sidebar: 'sidebar'
      })
  }
})

// RESOLVED DOCUMENTS
// -------------------------------------------------------
appRoutes.route('/resolved', {
  name: 'documentsResolved',
  action: () => {
      BlazeLayout.render('layout', {
          header: 'header',
          main: 'documentsResolved',
          footer: 'footer',
          sidebar: 'sidebar'
      })
  }
})

// REJECTED DOCUMENTS
// -------------------------------------------------------
appRoutes.route('/rejected', {
  name: 'documentsRejected',
  action: () => {
      BlazeLayout.render('layout', {
          header: 'header',
          main: 'documentsLogged',
          footer: 'footer',
          sidebar: 'sidebar'
      })
  }
})

// DOCUMENT SHOW
// -------------------------------------------------------
appRoutes.route("/:documentId", {
  action: function() {
    BlazeLayout.render("layout", {
      header: "header",
      main: "documentShow",
      footer: "footer",
      sidebar: 'sidebar'
    })
  },
  name: "documentShow"
})

// DOCUMENT EDIT
// -------------------------------------------------------
appRoutes.route("/:documentId/edit", {
  action: function() {
    BlazeLayout.render("layout", {
      header: "header",
      main: "documentEdit",
      footer: "footer",
      sidebar: 'sidebar'
    })
  },
  name: "documentEdit"
})
