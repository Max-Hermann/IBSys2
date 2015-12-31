/**
 * Created by Max on 11.10.2015.
 */
/// <reference path="../../typeDefinitions/angular.d.ts" />
angular.module('TranslationModule', []);

angular.module('app').config(function($translateProvider) {
    // deutsche Sprache
    $translateProvider.translations('de_DE', {
        //Navigationsleiste
        NAV_Home: 'Startseite',
        NAV_File: 'Datei hochladen',
        NAV_OrderManagment: 'Bestellverwaltung',
        NAV_orderOverview:'Bestellüberblick',
        NAV_warehouse:'Lager',
        NAV_purchasing:'Kaufteildisposition',
        NAV_disposition: 'Disposition',
        NAV_productionOrders: 'Fertigungsaufträge',
        NAV_CapacityPlanning: 'Kapazitätsplanung',
        
        NAV_footer:'Sven, Marius und Max; Hochschule Karlsruhe – Technik und Wirtschaft',
        
        strategy_verySafe:'Sehr sicher',
        strategy_safe:'Sicher',
        strategy_normal:'Normal',
        strategy_risky:'Riskant',
        strategy_veryRisky:'Sehr Riskant',
        strategy_headline:'Wähle eine Strategie:',
        
        //Kaufteildisposition
        purchasing_headline:'Kaufteildisposition',
        purchasing_price:'Preis ',
        purchasing_consumption: 'Verbrauch',
        purchasing_stockQuantity: 'Lagermenge',
        purchasing_stockRange: 'Reichweite [Per.]',
        pruchasing_proculeadTime: 'WBZ [Per.]',
        purchasing_deviation: 'Abweichung[%]',
        purchasing_thisPeriode: 'aktuell',
        
        //Detailansicht
        details_headline: 'Detailansicht',
        details_scndHeadline: 'Detailainsicht für Kaufteil',
        details_consumption: 'Verbrauch',
        details_period: 'Periode',
        details_stockRange: 'Reichweite [Per.]',
        details_thisPeriode: 'aktuell',
        details_costs: 'Kosten',
        details_takeOver: 'Übernehmen',
        details_proposal: 'Vorschlag für eine neue Bestellung',
        details_newOrders: 'Neue Bestellungen',
        details_createNewOrder: 'Neue Bestellung anlegen',
        details_futureInwardStockmovement: 'Zukünftiger Lagerzugang',
        details_prediction:'Prognose',
        details_development:'Entwicklung durchschnittlicher Lagerbestand',
        details_inwardStockmovement:'Aktueller Lagerzugang',
        details_fastOrder:'Eilbestellung',
        details_create:'Anlegen',
        
        //Bestellüberblick
        orderOverview_headline: 'Bestellüberblick',
        orderOverview_Orders: 'Bestellungen',
        orderOverview_keydataHeadline: 'Kennzahlen für neue Bestellungen',
        orderOverview_OrdersHeadline: 'Bestellungen',
        orderOverview_numberNewOrders: 'Anzahl:',
        orderOverview_numberNormalOrders: 'Normalbestellungen:',
        orderOverview_numberFastOrders: 'Eilbestellungen:',
        orderOverview_newOrdersTab: 'Neue Bestellungen',
        orderOverview_ongoingOrdersTab: 'Laufende Bestellungen',
        orderOverview_inwardStockMovementTab: 'Lagerzugang',
        orderOverview_partialValueTab: 'Teilewertentwicklung',
        orderOverview_fast: 'Eil',
        orderOverview_totalCosts: 'Gesamtkosten',
        orderOverview_materialCosts: 'Materialkosten',
        orderOverview_orderCosts: 'Bestellkosten',
        orderOverview_pieceCosts: 'Stückkosten',
        orderOverview_actualPartialValue_1: 'Aktueller Teilewert',
        orderOverview_partialValueNewOrders_1: 'Teilewert mit neuen Bestellungen',
        orderOverview_partialValueOngoingOrders_1: 'Teilewert mit laufenden Bestellungen',
        orderOverview_partialValueNewAndOngoingOrders_1: 'Teilewert mit laufenden und neuen Bestellungen',
        orderOverview_partID: 'Teil ID',
        orderOverview_amount: 'Menge',
        orderOverview_orderPeriode: 'Bestellperiode',
        
        //Disposition
        disposition_Headline: 'Disposition',
        dispostion_ChildrensBicycles: 'Kinderfahrräder',
        disposition_Id: 'Id',
        disposition_SalesOrder: 'Vertriebswunsch',
        disposition_planedStock: 'Geplanter Lagerstand',
        disposition_stock: 'Aktueller Lagerstand',
        disposition_OrderWaitingQueue: 'Aufträge in Warteschlange',
        disposition_WorkInProgress: 'Aufträge in Bearbeitung',
        disposition_productionProgram: 'Produktionsauftrag für kommende Periode',
        
        //Fertigungsaufträge
        productionOrders_headline: 'Fertigungsaufträge',
        productionOrders_Id: 'Id',
        productionOrders_amount: 'Menge',
        productionOrders_priority: 'Priorität',
        productionOrders_productionPosition: 'Auftragspositionen, mit Komma getrennt',
        productionOrders_details: 'Details',
        productionOrders_normal: 'normal',
        productionOrders_high: 'hoch',
        productionOrders_critical: 'kritisch',
        
        //Kapazitätsplanung
        capacityPlanning_headline: 'Kapazitätsplanung',
        capacityPlanning_Workplace: 'Arbeitsplatz',
        capacityPlanning_WorkingHours: 'Arbeitszeit',
        capacityPlanning_timeAvailable: 'Verfügbare Zeit',
        capacityPlanning_amountOrders: 'Anzahl der Produktionsaufträge',
        capacityPlanning_Shifts: 'Anzahl der Schichten',
        capacityPlanning_overtime: 'Überstunden',

        //Lager
        warehous_headline: 'Lager',
        warehous_statistics: 'Statistik',
        warehous_parts: 'Kaufteile',
        warehous_manufacturedProducts: 'Erzeugnisse',
        warehous_totalStockValue: 'Gesamter Lagerwert',
        warehous_stockQuantity: 'Lagermenge',
        warehous_stockValue: 'Lagerwert',
        warehous_partialValue: 'Teilewert',
        warehouse_multipleUsage: 'MFW',

    });

    // englische Sprache
    $translateProvider.translations('en_US', {
        //Navigationsleiste
        NAV_Home: 'Home',
        NAV_File: 'File Upload',
        NAV_OrderManagment: 'Order Managment',
        NAV_orderOverview:'Order Overview',
        NAV_warehouse:'Warehouse',
        NAV_purchasing:'Purchasing',
        NAV_disposition: 'Material Planning',
        NAV_productionOrders: 'Production orders',
        NAV_CapacityPlanning: 'Capacity planning',
        NAV_footer:'Sven, Marius und Max; Karlsruhe University of Applied Sciences',
        
        strategy_verySafe:'Very safe',
        strategy_safe:'Safe',
        strategy_normal:'Normal',
        strategy_risky:'Risky',
        strategy_veryRisky:'Very risky',
        strategy_headline:'Choose a strategy:',
        
        //Kaufteildisposition
        purchasing_headline:'Purchasing',
        purchasing_price:'Price',
        purchasing_consumption: 'Consumption',
        purchasing_stockQuantity: 'Stock Quantity',
        purchasing_stockRange: 'Stock Range [Per.]',
        pruchasing_proculeadTime: 'Proculeadtime [Per.]',
        purchasing_deviation: 'Deviation[%]',
        purchasing_thisPeriode: 'this Period',
        
        //Detailansicht
        details_headline: 'Details',
        details_scndHeadline: 'Details of Purchased Part',
        details_consumption: 'Consumption',
        details_period: 'Period',
        details_stockRange: 'Stock Range [Per.]',
        details_thisPeriode: 'this Period',
        details_costs: 'Costs',
        details_takeOver: 'Take Over',
        details_proposal: 'Proposal for new Order',
        details_newOrders: 'New Orders',
        details_createNewOrder: 'Create a new Order',
        details_futureInwardStockmovement: 'Future Inwardstockmovement',
        details_prediction:'Prediction',
        details_development:'Development of Stock Quantity',
        details_inwardStockmovement:'Inwardstockmovement',
        details_fastOrder:'Fast order',
        details_create:'Add',
        
        //Bestellüberblick
        orderOverview_headline: 'Order Overview',
        orderOverview_Orders: 'Orders',
        orderOverview_keydataHeadline: 'Keydata of new orders',
        orderOverview_OrdersHeadline: 'Orders',
        orderOverview_numberNewOrders: 'Amount:',
        orderOverview_numberNormalOrders: 'Normal orders:',
        orderOverview_numberFastOrders: 'Fast orders:',
        orderOverview_newOrdersTab: 'New Orders',
        orderOverview_ongoingOrdersTab: 'Ongoing Orders',
        orderOverview_inwardStockMovementTab: 'Actual Inward Stock Movement',
        orderOverview_partialValueTab: 'Development of Partial Value',
        orderManagment_partID: 'Part ID',
        orderOverview_fast: 'Fast',
        orderOverview_amount: 'Amount',
        orderOverview_totalCosts: 'Total Costs',
        orderOverview_materialCosts: 'Material Costs',
        orderOverview_orderCosts: 'Order Costs',
        orderOverview_pieceCosts: 'Piece Costs',
        orderOverview_actualPartialValue: 'Actual <br> Partial Value',
        orderOverview_partialValueNewOrders: 'Partial Value with new Orders',
        orderOverview_partialValueOngoingOrders: 'Partial Value with ongoing Orders',
        orderOverview_partialValueNewAndOngoingOrders: 'Partial Value with ongoing and new Orders',
        orderOverview_partID: 'Part ID',
        orderOverview_orderPeriode: 'Order Period',
        
        //Disposition
        disposition_Headline: 'Material Planning',
        dispostion_ChildrensBicycles: 'Children´s bicycles',
        disposition_Id: 'Id',
        disposition_SalesOrder: 'Sales orders',
        disposition_planedStock: 'Planned warehouse stock',
        disposition_stock: 'Warehouse stock',
        disposition_OrderWaitingQueue: 'Orders in the waiting queue',
        disposition_WorkInProgress: 'Work in progress',
        disposition_productionProgram: 'Production order',
        
        //Fertigungsaufträge
        productionOrders_headline: 'Production orders',
        productionOrders_Id: 'Id',
        productionOrders_amount: 'Amount',
        productionOrders_priority: 'Priority',
        productionOrders_productionPosition: 'Order position, separated by commas',
        productionOrders_details: 'Details',
        productionOrders_normal: 'normal',
        productionOrders_high: 'high',
        productionOrders_critical: 'critical',
        
        //Kapazitätsplanung
        capacityPlanning_headline: 'Capacity planning',
        capacityPlanning_Workplace: 'Workplace',
        capacityPlanning_WorkingHours: 'Working hours',
        capacityPlanning_timeAvailable: 'Time available',
        capacityPlanning_amountOrders: 'Amount of production orders',
        capacityPlanning_Shifts: 'Number of shifts',
        capacityPlanning_overtime: 'Overtime',
        
        //Lager
        warehous_headline: 'Warehouse',
        warehous_statistics: 'Statistics',
        warehous_parts: 'Purchased Parts',
        warehous_manufacturedProducts: 'Manufactured Products',
        warehous_totalStockValue: 'Total Stock Value',
        warehous_stockQuantity: 'Stock Quantity',
        warehous_stockValue: 'Stock Value',
        warehous_partialValue: 'Partial Value',
        warehouse_multipleUsage: 'Multiple Usage',

    });
    $translateProvider.preferredLanguage('de_DE');
});