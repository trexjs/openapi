type MultiCampSchema = {
  camps: [
    {
      name: "1st Camp";
      timeline: "2nd April to 30th April";
      fee: {
        price: 5000;
        duration: "month" | "yearly";
      };
      batch_info: {
        name: "Morning Batch Timings";
        remarks: ["Swimming Pool Remaind Closed on Every Thursday"];
        timings: [
          {
            time: "6.30 to 7-15";
            clock: "am";
            target: "Children";
          }
        ];
      };
    }
  ];
  camps_with_common_batch_info_and_fee: {
    batch_info: {
      name: "Morning Batch Timings";
      remarks: ["Swimming Pool Remains Closed on Every Thursday"];
      timings: [
        {
          time: "6.30 to 7-15";
          clock: "am";
          target: "Children";
        }
      ];
    };
    fee: {
      price: 5000;
      duration: "month" | "yearly";
    };
    camps: [
      {
        name: "1st Camp";
        timeline: "2nd April to 30th April";
      }
    ];
  };
};

type CampSchema = {
  name: "Camp";
  timeline: "2nd April to 30th April";
  fee: {
    price: 5000;
    duration: "month";
  };
  batch_info: {
    name: "Morning Batch Timings";
    remarks: ["Swimming Pool Remains Closed on Every Thursday"];
    timings: [
      {
        time: "6.30 to 7-15";
        clock: "am";
        target: "Children";
      }
    ];
  };
};

/**
 * You can create camp or multiple camps
 * Create multi camps
 *  - you can have a common or different (x) for all the camps, "x can be"
 *      - fee
 *      - timings
 */
