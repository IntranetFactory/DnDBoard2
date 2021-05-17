import layoutConfig from "../layoutConfig";

const initialState = {
  data: {
    graph1: {
      type: "line",
      title: "Graph 1",
      data: [
        {
          time: "5:08 AM",
          value: 3738
        },
        {
          time: "4:52 PM",
          value: 2135
        },
        {
          time: "4:04 AM",
          value: 2649
        },
        {
          time: "10:17 AM",
          value: 560
        },
        {
          time: "11:39 AM",
          value: 3942
        },
        {
          time: "1:41 PM",
          value: 3421
        },
        {
          time: "6:39 AM",
          value: 2634
        },
        {
          time: "5:08 PM",
          value: 2298
        },
        {
          time: "2:46 AM",
          value: 2231
        },
        {
          time: "10:56 PM",
          value: 921
        },
        {
          time: "3:48 AM",
          value: 4047
        },
        {
          time: "4:30 AM",
          value: 4186
        },
        {
          time: "10:44 PM",
          value: 4350
        },
        {
          time: "12:41 AM",
          value: 3057
        },
        {
          time: "7:16 PM",
          value: 524
        },
        {
          time: "9:47 AM",
          value: 2924
        },
        {
          time: "5:43 PM",
          value: 173
        },
        {
          time: "12:13 AM",
          value: 1244
        },
        {
          time: "2:07 AM",
          value: 631
        },
        {
          time: "7:37 AM",
          value: 2216
        },
        {
          time: "10:00 AM",
          value: 3112
        },
        {
          time: "11:21 PM",
          value: 4318
        },
        {
          time: "10:38 PM",
          value: 1788
        },
        {
          time: "2:36 PM",
          value: 4382
        },
        {
          time: "1:48 AM",
          value: 142
        },
        {
          time: "8:12 AM",
          value: 423
        },
        {
          time: "6:01 AM",
          value: 260
        },
        {
          time: "9:05 AM",
          value: 1327
        },
        {
          time: "1:41 AM",
          value: 1347
        },
        {
          time: "9:08 AM",
          value: 3983
        },
        {
          time: "12:31 AM",
          value: 960
        },
        {
          time: "2:59 PM",
          value: 4989
        },
        {
          time: "9:43 AM",
          value: 2974
        },
        {
          time: "7:46 PM",
          value: 1896
        },
        {
          time: "1:02 PM",
          value: 111
        },
        {
          time: "10:33 AM",
          value: 1868
        },
        {
          time: "12:37 PM",
          value: 4486
        },
        {
          time: "11:30 AM",
          value: 4383
        },
        {
          time: "8:01 AM",
          value: 924
        },
        {
          time: "12:17 PM",
          value: 1679
        },
        {
          time: "9:03 AM",
          value: 4815
        },
        {
          time: "7:20 AM",
          value: 1916
        },
        {
          time: "9:52 PM",
          value: 1173
        },
        {
          time: "10:34 AM",
          value: 146
        },
        {
          time: "1:13 PM",
          value: 3722
        },
        {
          time: "4:38 AM",
          value: 1912
        },
        {
          time: "3:55 AM",
          value: 4101
        },
        {
          time: "1:55 PM",
          value: 3782
        },
        {
          time: "4:59 PM",
          value: 3795
        }
      ]
    },
    graph2: {
      type: "bar",
      title: "Graph 2",
      data: [
        {
          time: "11:01 PM",
          value: 2584
        },
        {
          time: "5:27 AM",
          value: 4601
        },
        {
          time: "12:25 AM",
          value: 2051
        },
        {
          time: "9:44 AM",
          value: 4797
        },
        {
          time: "3:08 PM",
          value: 1731
        },
        {
          time: "3:35 PM",
          value: 2966
        },
        {
          time: "6:54 AM",
          value: 3129
        },
        {
          time: "6:22 AM",
          value: 3152
        },
        {
          time: "1:00 PM",
          value: 1912
        },
        {
          time: "4:45 PM",
          value: 4969
        },
        {
          time: "6:22 AM",
          value: 3150
        },
        {
          time: "8:47 AM",
          value: 1891
        },
        {
          time: "10:51 AM",
          value: 2708
        },
        {
          time: "1:10 AM",
          value: 324
        },
        {
          time: "12:20 AM",
          value: 2374
        },
        {
          time: "8:51 AM",
          value: 2265
        },
        {
          time: "6:52 PM",
          value: 3601
        },
        {
          time: "6:03 AM",
          value: 4022
        },
        {
          time: "11:15 AM",
          value: 4140
        },
        {
          time: "10:57 PM",
          value: 373
        },
        {
          time: "9:30 AM",
          value: 2498
        },
        {
          time: "11:22 AM",
          value: 403
        },
        {
          time: "6:21 PM",
          value: 2825
        },
        {
          time: "9:27 AM",
          value: 1549
        },
        {
          time: "11:05 PM",
          value: 2476
        },
        {
          time: "5:33 PM",
          value: 458
        },
        {
          time: "8:25 PM",
          value: 983
        },
        {
          time: "5:38 PM",
          value: 3597
        },
        {
          time: "10:42 PM",
          value: 2107
        }
      ]
    },
    graph3: {
      type: "pie",
      title: "Graph 3",
      data: [
        {
          time: "8:09 AM",
          value: 4408
        },
        {
          time: "10:28 AM",
          value: 3644
        },
        {
          time: "8:11 PM",
          value: 4861
        },
        {
          time: "1:26 AM",
          value: 2394
        },
        {
          time: "6:55 PM",
          value: 2937
        },
        {
          time: "11:21 PM",
          value: 4806
        },
        {
          time: "8:10 PM",
          value: 3688
        },
        {
          time: "4:07 AM",
          value: 3182
        },
        {
          time: "9:26 PM",
          value: 1281
        },
        {
          time: "11:44 AM",
          value: 2058
        },
        {
          time: "3:19 PM",
          value: 939
        },
        {
          time: "9:03 PM",
          value: 2193
        },
        {
          time: "8:07 AM",
          value: 3201
        },
        {
          time: "7:05 PM",
          value: 2679
        },
        {
          time: "3:32 PM",
          value: 4651
        },
        {
          time: "2:36 AM",
          value: 3895
        },
        {
          time: "1:52 AM",
          value: 3914
        },
        {
          time: "12:52 AM",
          value: 4085
        },
        {
          time: "10:04 AM",
          value: 264
        },
        {
          time: "5:23 AM",
          value: 4148
        },
        {
          time: "2:57 PM",
          value: 4821
        },
        {
          time: "11:53 PM",
          value: 1106
        },
        {
          time: "2:51 AM",
          value: 3802
        },
        {
          time: "5:58 AM",
          value: 3507
        },
        {
          time: "12:03 AM",
          value: 2362
        },
        {
          time: "7:44 AM",
          value: 2392
        },
        {
          time: "2:11 PM",
          value: 3857
        },
        {
          time: "5:05 AM",
          value: 4673
        },
        {
          time: "1:17 PM",
          value: 4782
        },
        {
          time: "9:49 PM",
          value: 1162
        },
        {
          time: "12:37 AM",
          value: 2622
        },
        {
          time: "1:37 PM",
          value: 2993
        }
      ]
    },
    graph4: {
      type: "area",
      title: "Graph 4",
      data: [
        {
          time: "8:54 PM",
          value: 1690
        },
        {
          time: "10:50 AM",
          value: 2876
        },
        {
          time: "2:22 AM",
          value: 2779
        },
        {
          time: "11:11 AM",
          value: 4147
        },
        {
          time: "5:23 PM",
          value: 3179
        },
        {
          time: "5:16 AM",
          value: 3543
        },
        {
          time: "2:02 PM",
          value: 1362
        },
        {
          time: "6:06 AM",
          value: 478
        },
        {
          time: "11:06 PM",
          value: 1243
        },
        {
          time: "4:53 PM",
          value: 464
        },
        {
          time: "5:50 PM",
          value: 3688
        },
        {
          time: "6:02 PM",
          value: 1044
        },
        {
          time: "1:00 AM",
          value: 1582
        },
        {
          time: "2:46 AM",
          value: 1990
        },
        {
          time: "2:42 PM",
          value: 4452
        },
        {
          time: "10:03 AM",
          value: 186
        },
        {
          time: "8:17 AM",
          value: 613
        },
        {
          time: "3:50 PM",
          value: 167
        },
        {
          time: "8:03 AM",
          value: 4581
        },
        {
          time: "8:09 PM",
          value: 3458
        }
      ]
    },
    graph5: {
      type: "bar",
      title: "Graph 5",
      data: [
        {
          time: "10:28 AM",
          value: 1285
        },
        {
          time: "4:22 PM",
          value: 3740
        },
        {
          time: "1:31 AM",
          value: 549
        },
        {
          time: "8:48 PM",
          value: 2432
        },
        {
          time: "10:45 PM",
          value: 1029
        },
        {
          time: "5:50 AM",
          value: 2045
        },
        {
          time: "9:10 AM",
          value: 3103
        },
        {
          time: "9:48 PM",
          value: 2594
        },
        {
          time: "2:12 AM",
          value: 2298
        },
        {
          time: "8:46 PM",
          value: 2043
        },
        {
          time: "9:45 PM",
          value: 4216
        },
        {
          time: "3:27 PM",
          value: 1404
        },
        {
          time: "9:08 AM",
          value: 3618
        },
        {
          time: "12:03 PM",
          value: 1938
        },
        {
          time: "4:28 AM",
          value: 1550
        },
        {
          time: "5:05 AM",
          value: 1355
        },
        {
          time: "11:51 AM",
          value: 4740
        },
        {
          time: "9:11 PM",
          value: 3457
        },
        {
          time: "6:18 AM",
          value: 2099
        }
      ]
    },
    graph6: {
      type: "pie",
      title: "Graph 6",
      data: [
        {
          time: "12:47 AM",
          value: 4135
        },
        {
          time: "1:29 PM",
          value: 2915
        },
        {
          time: "4:47 AM",
          value: 119
        },
        {
          time: "6:53 PM",
          value: 4718
        },
        {
          time: "1:18 AM",
          value: 2424
        },
        {
          time: "9:46 PM",
          value: 4146
        },
        {
          time: "12:37 AM",
          value: 2801
        },
        {
          time: "2:05 AM",
          value: 1881
        },
        {
          time: "2:48 PM",
          value: 3905
        },
        {
          time: "11:37 PM",
          value: 4349
        },
        {
          time: "1:00 AM",
          value: 1127
        },
        {
          time: "7:58 PM",
          value: 3288
        },
        {
          time: "6:58 AM",
          value: 1381
        },
        {
          time: "11:06 AM",
          value: 1147
        },
        {
          time: "4:41 PM",
          value: 2030
        },
        {
          time: "11:53 PM",
          value: 1381
        },
        {
          time: "2:50 AM",
          value: 3040
        },
        {
          time: "7:47 PM",
          value: 2740
        },
        {
          time: "9:12 AM",
          value: 1190
        },
        {
          time: "10:30 AM",
          value: 3834
        },
        {
          time: "4:39 AM",
          value: 2334
        }
      ]
    },
    graph7: {
      type: "line",
      title: "Graph 7",
      data: [
        {
          time: "2:52 PM",
          value: 2262
        },
        {
          time: "1:39 PM",
          value: 4843
        },
        {
          time: "11:19 PM",
          value: 4611
        },
        {
          time: "2:08 PM",
          value: 4345
        },
        {
          time: "3:41 PM",
          value: 831
        },
        {
          time: "5:17 PM",
          value: 301
        },
        {
          time: "12:57 AM",
          value: 4583
        },
        {
          time: "3:01 PM",
          value: 3046
        },
        {
          time: "2:13 PM",
          value: 2290
        },
        {
          time: "4:49 PM",
          value: 1057
        },
        {
          time: "5:08 AM",
          value: 2263
        },
        {
          time: "4:11 PM",
          value: 783
        },
        {
          time: "11:24 AM",
          value: 477
        },
        {
          time: "11:11 AM",
          value: 701
        },
        {
          time: "10:12 AM",
          value: 3867
        },
        {
          time: "2:30 AM",
          value: 3013
        },
        {
          time: "11:34 PM",
          value: 3578
        },
        {
          time: "7:25 PM",
          value: 2078
        },
        {
          time: "5:03 AM",
          value: 4649
        },
        {
          time: "11:21 PM",
          value: 4262
        },
        {
          time: "1:17 PM",
          value: 4583
        },
        {
          time: "1:49 AM",
          value: 2856
        },
        {
          time: "4:07 PM",
          value: 290
        },
        {
          time: "3:49 AM",
          value: 1830
        },
        {
          time: "4:59 PM",
          value: 1907
        },
        {
          time: "7:45 AM",
          value: 982
        },
        {
          time: "7:10 PM",
          value: 993
        },
        {
          time: "7:35 AM",
          value: 1476
        },
        {
          time: "1:28 AM",
          value: 4153
        },
        {
          time: "10:00 AM",
          value: 1401
        },
        {
          time: "6:35 PM",
          value: 1841
        },
        {
          time: "1:48 PM",
          value: 4285
        },
        {
          time: "3:48 AM",
          value: 4013
        },
        {
          time: "6:36 AM",
          value: 3680
        },
        {
          time: "3:56 AM",
          value: 3649
        },
        {
          time: "8:08 AM",
          value: 2908
        },
        {
          time: "6:34 AM",
          value: 4972
        },
        {
          time: "2:24 AM",
          value: 3278
        },
        {
          time: "6:13 AM",
          value: 2608
        },
        {
          time: "4:16 AM",
          value: 630
        },
        {
          time: "11:56 PM",
          value: 1360
        },
        {
          time: "12:04 AM",
          value: 1715
        },
        {
          time: "12:05 PM",
          value: 3166
        },
        {
          time: "9:26 PM",
          value: 3279
        },
        {
          time: "8:33 AM",
          value: 3338
        }
      ]
    }
  },
  layouts: layoutConfig,
  breakpoint: "lg"
};

export default initialState;
