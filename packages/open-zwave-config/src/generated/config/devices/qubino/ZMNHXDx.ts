import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          { text: "3-PHASE SMART METER", name: "Name" },
          {
            text:
              "USER MANUAL EN.QUBINO 3-PHASE SMART METERThe Qubino 3-Phase Smart Meter is an extremely versatile and powerful Z-Wave devicefor measuring energy in a three-phase electrical power network of up to 3 x 65A.",
            name: "Description",
          },
          {
            text: "http://www.openzwave.com/device-database/0159:0007:0054",
            name: "OzwInfoPage",
          },
          {
            text: "https://qubino.com/products/3-phase-smart-meter/",
            name: "ProductPage",
          },
          { text: "https://qubino.com/support/", name: "ProductSupport" },
          { text: "images/qubino/zmnhxdx.png", name: "ProductPic" },
          {
            text:
              "https://qubino.com/wp-content/uploads/2019/06/Qubino_3-Phase-Smart-Meter-PLUS-extended-manual_eng_3.4.pdf?cf_id=2255",
            name: "ProductManual",
          },
          {
            text: "Toggle the Service button S between 0.2 and 3seconds",
            name: "InclusionDescription",
          },
          {
            text:
              "Press and hold the S service button between 0.2 and 3seconds",
            name: "ExclusionDescription",
          },
          {
            text:
              "Press and hold the S service button between 6 seconds and 20 seconds",
            name: "ResetDescription",
          },
          {
            text: "CEPT (Europe)",
            id: "0054",
            name: "FrequencyName",
            type: "0007",
          },
          { text: "ZMNHXDx", id: "0054", name: "Identifier", type: "0007" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text: "Update to Support OZW 1.6 with Instance Label Names",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "12 June 2019",
                revision: 4,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "7",
            instance: "1",
            label: "Input switch function selection",
            max: "5",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "",
            Item: [
              { label: "disabled", value: "0" },
              {
                label: "IR external relay control - mono stable push button",
                value: "2",
              },
              {
                label: "IR external relay control - bi-stable switch",
                value: "3",
              },
              {
                label: "External relay control - mono stable push button",
                value: "4",
              },
              {
                label: "External relay control - bi-stable switch",
                value: "5",
              },
            ],
          },
          {
            genre: "config",
            index: "40",
            instance: "1",
            label: "Reporting on power change",
            max: "100",
            min: "0",
            size: "1",
            type: "byte",
            value: "50",
            Help:
              "This parameter is valid for Active Power Total, Active Power Phase1, Active Power Phase2 and Active Power Phase3. Set value means percentage from 0-100 = 0% - 100%",
          },
          {
            genre: "config",
            index: "42",
            instance: "1",
            label: "Reporting on time interval",
            max: "65536",
            min: "0",
            size: "2",
            type: "short",
            value: "600",
            Help:
              "This parameter is currently valid only for Active Energy Total Import/Export (kWh), Reactive Energy Total (kvarh), Total Energy (kVAh)",
          },
          {
            genre: "config",
            index: "43",
            instance: "1",
            label: "Other Values - Reporting on time interval",
            max: "65536",
            min: "0",
            size: "2",
            type: "short",
            value: "600",
            Help:
              "This parameter is valid only for Voltage (V of ph1, ph2, ph3), Current (A of ph1, ph2, ph3), Total Power Factor, Total Reactive Power (var)",
          },
          {
            genre: "config",
            index: "100",
            instance: "1",
            label: "Enable / Disable External IR relay (BICOM)",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "",
            Item: [
              { label: "External IR relay disabled", value: "0" },
              {
                label:
                  "External IR relay enabled and connected to all 3 Phases",
                value: "1",
              },
              {
                label: "External IR relay enabled and connected to a Phase 1",
                value: "2",
              },
            ],
          },
          {
            genre: "config",
            index: "101",
            instance: "1",
            label: "Enable / Disable External relay (IKA)",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "",
            Item: [
              { label: "External relay disabled", value: "0" },
              {
                label: "External relay enabled and connected to Phase 2",
                value: "1",
              },
            ],
          },
          {
            genre: "config",
            index: "106",
            instance: "1",
            label:
              "External IR relay (BICOM) power threshold settings - maximum power of all phases together",
            max: "60000",
            min: "0",
            size: "2",
            type: "short",
            value: "0",
            Help:
              "This parameter defines a threshold when External IR relay is being turned off. (If Parameter no. 100 is set to the value 1 or 2)",
          },
          {
            genre: "config",
            index: "107",
            instance: "1",
            label:
              "External relay (IKA) power threshold settings - maximum power on phase L2",
            max: "20000",
            min: "0",
            size: "2",
            type: "short",
            value: "0",
            Help:
              "This parameter defines a threshold when External relay is being turned off (if the parameter no. 100 is set to the value 1 or 2).",
          },
          {
            genre: "config",
            index: "112",
            instance: "1",
            label: "Power threshold - Delay before power on",
            max: "32535",
            min: "0",
            size: "2",
            type: "short",
            value: "0",
            Help:
              "External IR relay/ External relay is turned off due to detected overload (as set by parameter 106 and 107) and remains off for a time, defined in this parameter. After that time, the output turns on to check, if the overload is still present.",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "Lifeline", max_associations: "1" }],
          },
        ],
      },
      { action: "remove", id: "32" },
      {
        id: "96",
        Compatibility: [{ MapRootToEndpoint: [true] }],
        Instance: [
          { index: "1", label: "Total Readings" },
          { index: "2", label: "Phase 1" },
          { index: "3", label: "Phase 2" },
          { index: "4", label: "Phase 3" },
          { index: "5", label: "External Relay" },
          { index: "6", label: "External IR Relay" },
        ],
      },
    ],
  },
};

export default config;
