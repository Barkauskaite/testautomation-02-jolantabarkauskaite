/// <reference types ="cypress" />
import * as loginFuncs from '../pages/loginPage'
import * as dashboardFuncs from '../pages/dashboardPage'
import * as roomsFuncs from '../pages/roomsPage'
import * as newRoomsFuncs from '../pages/newRoomPage'
import * as editRoomFuncs from '../pages/editRoomPage'
import * as clientFuncs from '../pages/clientsPage'
import * as newClientFuncs from '../pages/newClientPage'
import * as editClientsFuncs from '../pages/editClientPage'
import * as billsFuncs from '../pages/billsPage'


describe('Test suit with Page-objects', () => {

    beforeEach(() => {
        cy.visit("/")
        loginFuncs.checkLoginPageTitle
        loginFuncs.performValidLogin('tester01', 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c','Welcome')
        cy.wait(500)
        
     })

    it('1.Perform a valid login', () => {
        dashboardFuncs.performLogout('Login')
        //here at login-page
        cy.log('At Login-page.')
        cy.percySnapshot('Login-page')
    })

    it('2.View rooms and come back to dashboard-page', () =>{
        cy.get(':nth-child(1) > .btn').click()
        cy.contains('Rooms')
        //here at rooms-page
        cy.wait(500)
        cy.log('At Rooms page.')
        cy.percySnapshot('Rooms-page')
        cy.wait(500)
        roomsFuncs.backToDashboardFromRooms("Tester Hotel Overview")
        /*here at dashboard-page again
        cy.wait(500)
        cy.log('At Dashboard page.')
        cy.percySnapshot('Dashboard-page')*/
    })

    it('3.View Clients and come back to the dashboard page', () =>{
      dashboardFuncs.viewClients("Clients")
      //here at clients-page
      cy.wait(500)
      cy.log('At Clienta page.')
      cy.percySnapshot('Clients-page')
      cy.wait(500)
      clientFuncs.backToDashboardFromClients("Tester Hotel Overview")
    })

    it('4.View Bills and come back to the dashboard page', () =>{
      dashboardFuncs.viewBills("Bills")
      //here at bills-page
      cy.wait(500)
      cy.log('At Bills-page.')
      cy.percySnapshot('Bills-page')
      cy.wait(500)
      billsFuncs.backToDashboardFromBills("Tester Hotel Overview")
    })
   })