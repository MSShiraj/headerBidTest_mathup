var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];

var PREBID_TIMEOUT = 1000;
var FAILSAFE_TIMEOUT = 3000;

var adUnits = [{
    code: "/21718562853/MathUp/Adhesion", //1
    divId:"Adhesion",
    mediaTypes: {banner: {sizes: [[320,50]]}},
    bids: [{
                bidder: 'openx',
                params: {
                unit: '557557853',
                delDomain: 'se-demo-d.openx.net'
                }
            },
           {bidder: "grid", params: { uid: 356351}},
           {
            bidder: "onetag",
            params: {
               pubId: "707e87471c4b096",
               ext: { placement_name: "CUSTOM_PLACEMENT_NAME"},
            }
           },
           {bidder: "appnexus", params: { placementId: 26342666}},
           {
            bidder: 'rubicon',
            params: {
                accountId: 22178,                     // replace account/site/zone params
                siteId: 432846,
                zoneId: 2473614
            }
        }
] //All
},
{
    code: "/21718562853/MathUp/InBetweenGames", //2
    divId:"InBetweenGames",
    mediaTypes: {banner: {sizes: [[320,250]]}},
    bids: [{
        bidder: 'openx',
        params: {
        unit: '557557854',
        delDomain: 'se-demo-d.openx.net'
        }
    },
   {bidder: "grid", params: { uid: 356352}},
   {
    bidder: "onetag",
    params: {
       pubId: "707e87471c4b096",
       ext: { placement_name: "CUSTOM_PLACEMENT_NAME"},
    }
   },
   {bidder: "appnexus", params: { placementId: 26342670}},
   {
    bidder: 'rubicon',
    params: {
        accountId: 22178,                     // replace account/site/zone params
        siteId: 432846,
        zoneId: 2473616
    }
}] //All
},
{
    code: "/21718562853/MathUp/Leaderboard_A", //3
    divId:"Leaderboard_A",
    mediaTypes: {banner: {sizes: [[320,50],[728,90]]}},
    bids: [{
        bidder: 'openx',
        params: {
        unit: '557557855',
        delDomain: 'se-demo-d.openx.net'
        }
    },
   {bidder: "grid", params: { uid: 356353}},
   {
    bidder: "onetag",
    params: {
       pubId: "707e87471c4b096",
       ext: { placement_name: "CUSTOM_PLACEMENT_NAME"},
    }
   },
   {bidder: "appnexus", params: { placementId: 26342672}},
   {
    bidder: 'rubicon',
    params: {
        accountId: 22178,                     // replace account/site/zone params
        siteId: 432846,
        zoneId: 2473618
    }
}] //All
},
{
    code: "/21718562853/MathUp/Rewarded_Hint", //4
    divId:"Rewarded_Hint",
    mediaTypes: {banner: {sizes: [[320,250]]}},
    bids: [{
        bidder: 'openx',
        params: {
        unit: '557557856',
        delDomain: 'se-demo-d.openx.net'
        }
    },
   {bidder: "grid", params: { uid: 356354}},
   {
    bidder: "onetag",
    params: {
       pubId: "707e87471c4b096",
       ext: { placement_name: "CUSTOM_PLACEMENT_NAME"},
    }
   },
   {bidder: "appnexus", params: { placementId: 26342674}},
   {
    bidder: 'rubicon',
    params: {
        accountId: 22178,                     // replace account/site/zone params
        siteId: 432846,
        zoneId: 2473620
    }
}] //All
},
{
    code: "/21718562853/MathUp/Sidebar_A",  //5
    divId:"Sidebar_A",
    mediaTypes: {banner: {sizes: [[320,250],[300,600]]}},
    bids: [{
        bidder: 'openx',
        params: {
        unit: '557557857',
        delDomain: 'se-demo-d.openx.net'
        }
    },
   {bidder: "grid", params: { uid: 356355}},
   {
    bidder: "onetag",
    params: {
       pubId: "707e87471c4b096",
       ext: { placement_name: "CUSTOM_PLACEMENT_NAME"},
    }
   },
   {bidder: "appnexus", params: { placementId: 26342679}},
   {
    bidder: 'rubicon',
    params: {
        accountId: 22178,                     // replace account/site/zone params
        siteId: 432846,
        zoneId: 2473622
    }
}] //All
}]

var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];

pbjs.que.push(function() {
    pbjs.addAdUnits(adUnits);
    pbjs.requestBids({
        bidsBackHandler: initAdserver,
        timeout: PREBID_TIMEOUT
    });
});

function initAdserver() {
    if (pbjs.initAdserverSet) return;
    pbjs.initAdserverSet = true;
}

setTimeout(function() {
    initAdserver();
}, FAILSAFE_TIMEOUT);

googletag.cmd.push(function() {
    adUnits.map((adunit)=>{
        googletag.defineSlot(adunit.code, 
        adunit.mediaTypes.banner.sizes, adunit.divId)
        .addService(googletag.pubads());
        })
    googletag.pubads().enableSingleRequest();
    googletag.enableServices();
});



