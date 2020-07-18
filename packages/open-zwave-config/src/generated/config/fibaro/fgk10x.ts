import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/010F:2001:0701",
            name: "OzwInfoPage",
          },
          { text: "images/fibaro/fgk10x.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1620/",
            id: "2001",
            name: "ZWProductPage",
            type: "0701",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1620/FGK-10x-US-T-v1.0.pdf",
            name: "ProductManual",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "2001",
            name: "FrequencyName",
            type: "0701",
          },
          {
            text:
              "Resetting the device is not the recommended way of removing the device from the Z-Wave network. Use reset procedure only if the primary controller is missing or inoperable.\n\n1) Take off the Sensor's cover and remove battery.\n2) Install the battery while holding both TMP buttons (after mounting the device, one button is constantly pressed by the cover).\n3) Release the TMP button within 5 seconds.\n4) LED will blink 3 times to confirm launching of reset procedure.\n5) Reset procedure may last up to 30 seconds. Do not remove the battery until reset is complete.\n6) Reset will be confirmed by the six blinks of the LED.",
            name: "ResetDescription",
          },
          {
            text:
              "1) Open the cover.\n2) Remove the battery blocker.\n3) Close the cover.\n4) Locate the sensor nearby the main Z-Wave controller.\n5) Set the main Z-Wave controller into adding mode (see main controller’s operating manual).\n6) Quickly, triple click the TMP button located on the bottom of the casing.\n7) Wait for the device to be added to the system. \n8) Successful adding will be confirmed by the controller.\n9) Install the device using the attached self-adhesive pads.",
            name: "InclusionDescription",
          },
          {
            text:
              "FIBARO Door/Window Sensor is a wireless, battery powered reed sensor compatible with the Z-Wave Plus standard. Changing the device’s status will automatically send signal to the Z-Wave controller and associated devices.\nSensor can be used to trigger scenes and everywhere there is a need for information about opening or closing of doors, windows, garage doors, etc. Opening is detected by separating the sensor’s body and the magnet.\nIn addition the FIBARO Door/Window Sensor supports one DS18B20 temperature sensor and has one potential free input.\n\nThe FIBARO Door / Window Sensor is available in seven colors: white, silver, black, pearl powder, cappuccino, truffle surprise and dark chocolate.\n\n\nhttps://www.youtube.com/watch?v=K35uFXoa5c0",
            name: "Description",
          },
          { text: "FGK-10X", id: "2001", name: "Identifier", type: "0701" },
          {
            text:
              "1) Place the device within direct reange of the Z-Wave controller.\n2) Make sure that Sensor's cover is closed.\n3) Set the main Z-Wave controller into learning mode (see main controller’s operating manual).\n4) Quickly, triple click the TMP button.\n5) Wait for the device to be excluded from the system. Successful exclusion will be confirmed by the controller.",
            name: "ExclusionDescription",
          },
          { text: "FIBARO Door/Window Sensor", name: "Name" },
          {
            text:
              "FIBARO Door/Window Sensor will wake up at a defined time interval and will ALWAYS try to communicate with the main controller. Setting wake up interval to 0 disables sending Wake Up Notification frame automatically. There is a possibility to wake up the device manually by a single TMP button click.",
            name: "WakeupDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1620/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
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
            index: "1",
            instance: "1",
            label: "Operation Mode",
            size: "1",
            type: "list",
            value: "0",
            Help: "Parameter defines device operation mode.",
            Item: [
              {
                label: "Door/Window Sensor or external alarm sensor",
                value: "0",
              },
              { label: "External switch", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "DOOR/WINDOW/ALARM",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "Parameter defines state of the sensor when the magnet is close. \n\t\t\t\tIf you connect the alarm sensor, it determines the output type. \n\t\t\t\tParameter inactive in Switch Mode (parameter 1 set to 1).",
            Item: [
              { label: "Closed", value: "0" },
              { label: "Opened", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "Visual LED indications",
            max: "7",
            min: "1",
            size: "1",
            type: "byte",
            value: "6",
            Help:
              "This parameter defines events indicated by the visual LED indicator. \n\t\t\t\tDisabling events might extend battery life.\n\t\t\t\t0 - no indications\n\t\t\t\t1 - indication of opening/closing status change (input IN)\n\t\t\t\t2 - indication of wake up (1 x click or periodical)\n\t\t\t\t4 - indication of device tampering\t\t\t\n\t\t\t",
          },
          {
            genre: "config",
            index: "4",
            instance: "1",
            label: "Range test after double click",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Parameter defines state of the sensor when the magnet is close. \n\t\t\t\tIf you connect the alarm sensor, it determines the output type. \n\t\t\t\tParameter inactive in Switch Mode (parameter 1 set to 1).",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "10",
            instance: "1",
            label: "2nd association group triggers",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Parameter defines events which result in sending on/off commands to devices added to the 2nd association group. \n\t\t\t\tThese commands are sent alternately to switch the devices on and off. \n\t\t\t\tCommands represent the values of BASIC SET command frames. \n\t\t\t\tParameter is inactive in external button mode (parameter 1 set to 1). ",
            Item: [
              { label: "Switch after opening and closing", value: "0" },
              { label: "Switch after opening", value: "1" },
              { label: "Switch after closing", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "11",
            instance: "1",
            label: "Commands sent to 2nd association group",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Command frames sent to devices added to the 2nd association group. ",
            Item: [
              { label: "ON", value: "0" },
              { label: "OFF", value: "1" },
              { label: "ON and OFF", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "12",
            instance: "1",
            label: "Value of ON command frame sent to 2nd association group",
            max: "255",
            min: "0",
            size: "2",
            type: "short",
            value: "255",
            Help:
              "The value of 0 turns OFF the device, 255 turns it ON. \n\t\t\t\tIn case of associating the Dimmer or Roller Shutter module, values 1-99 allow to set an associated device to a specified level.\t\t\t\n\t\t\t",
          },
          {
            genre: "config",
            index: "13",
            instance: "1",
            label: "Value of OFF command frame sent to 2nd association group",
            max: "255",
            min: "0",
            size: "2",
            type: "short",
            value: "0",
            Help:
              "The value of 0 turns OFF the device, 255 turns it ON. \n\t\t\t\tIn case of associating the Dimmer or Roller Shutter module, values 1-99 allow to set an associated device to a specified level.\t\t\t\n\t\t\t",
          },
          {
            genre: "config",
            index: "14",
            instance: "1",
            label: "Time delay of ON command frame",
            max: "32400",
            min: "0",
            size: "2",
            type: "short",
            units: "seconds",
            value: "0",
            Help:
              "Time period after which ON command frame will be sent.\t\t\t\n\t\t\t",
          },
          {
            genre: "config",
            index: "15",
            instance: "1",
            label: "Time delay of OFF command frame",
            max: "32400",
            min: "0",
            size: "2",
            type: "short",
            units: "seconds",
            value: "0",
            Help:
              "Time period after which OFF command frame will be sent.\t\t\t\n\t\t\t",
          },
          {
            genre: "config",
            index: "20",
            instance: "1",
            label: "Type of sent alarm frames",
            max: "5",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Type of control frames transmitted to the main controller and 3rd association group Alarm. \n\t\t\t\tIf an external sensor is connected to IN input, it is possible to choose its functionality. \n\t\t\t\tOtherwise it is recommended to set this parameter to default value.",
            Item: [
              {
                label: "Door/Window Sensor (General Purpose Alarm)",
                value: "0",
              },
              { label: "Smoke sensor (Smoke Alarm)", value: "1" },
              { label: "CO detector (CO Alarm)", value: "2" },
              { label: "CO2 detector (CO2 Alarm)", value: "3" },
              { label: "High temperature sensor (Heat Alarm)", value: "4" },
              { label: "Flood sensor (Water Alarm)", value: "5" },
            ],
          },
          {
            genre: "config",
            index: "30",
            instance: "1",
            label: "Delay of tamper alarm cancellation",
            max: "32400",
            min: "0",
            size: "2",
            type: "short",
            units: "seconds",
            value: "5",
            Help:
              "Time period after which a tamper alarm will be cancelled.\t\t\n\t\t\t",
          },
          {
            genre: "config",
            index: "31",
            instance: "1",
            label: "Reporting tamper alarm cancellation",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Reporting cancellation of tamper alarm to the controller and 5th association group.",
            Item: [
              { label: "Do not send tamper cancellation report", value: "0" },
              { label: "Send tamper cancellation report", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "50",
            instance: "1",
            label: "Interval of temperature measurements",
            max: "32400",
            min: "0",
            size: "2",
            type: "short",
            units: "seconds",
            value: "300",
            Help:
              "This parameter defines how often the temperature will be measured. \n\t\t\t\tThe shorter the time, the more frequently the temperature will be measured, but the battery life will shorten.\t\n\t\t\t\t0 - temperature measurements disabled\n\t\t\t\t5-32400 - time in seconds\t\t\n\t\t\t",
          },
          {
            genre: "config",
            index: "51",
            instance: "1",
            label: "Temperature reports threshold",
            max: "300",
            min: "0",
            size: "2",
            type: "short",
            value: "10",
            Help:
              "This parameter defines the change of temperature in comparison with last reported, resulting in temperature report being sent to the main controller.\n\t\t\t\t0 - temperature reports based on threshold disabled\n\t\t\t\t1-300 - temperature threshold (0.1-30C, 0.1C step)\t\t\n\t\t\t",
          },
          {
            genre: "config",
            index: "52",
            instance: "1",
            label: "Interval of temperature reports",
            max: "32400",
            min: "0",
            size: "2",
            type: "short",
            units: "seconds",
            value: "0",
            Help:
              "This parameter determines how often the temperature reports will be sent to the main controller.\n\t\t\t\t0 - periodic temperature reports disabled\n\t\t\t\t5-32400 - time in seconds\t\t\n\t\t\t",
          },
          {
            genre: "config",
            index: "53",
            instance: "1",
            label: "Temperature offset",
            max: "1000",
            min: "-1000",
            size: "4",
            type: "int",
            value: "0",
            Help:
              "The value to be added to the actual temperature, measured by the sensor (temperature compensation). (0,1C steps)\t\t\n\t\t\t",
          },
          {
            genre: "config",
            index: "54",
            instance: "1",
            label: "Temperature alarm reports",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Temperature alarms reported to the Z-Wave controller. \n\t\t\t\tThresholds are set in parameters 55 and 56.",
            Item: [
              { label: "Temperature alarms disabled", value: "0" },
              { label: "High temperature alarm", value: "1" },
              { label: "Low temperature alarm", value: "2" },
              { label: "High and low temperature alarms", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "55",
            instance: "1",
            label: "High temperature alarm threshold",
            max: "1000",
            min: "0",
            size: "2",
            type: "short",
            value: "540",
            Help:
              "If temperature is higher than set value, overheat notification will be sent and high temperature scene will be triggered (if activated).\n\t\t\t\t0-1000 (0-100C, 0.1C step).\n\t\t\t",
          },
          {
            genre: "config",
            index: "56",
            instance: "1",
            label: "Low temperature alarm threshold",
            max: "700",
            min: "-300",
            size: "2",
            type: "short",
            value: "40",
            Help:
              "If temperature is lower than the set value, underheat notification will be sent and low temperature scene will be triggered (if activated).\n\t\t\t\t300-700 (-30-70C, 0.1C step)\n\t\t\t",
          },
          {
            genre: "config",
            index: "70",
            instance: "1",
            label: "Scene activation functionality",
            max: "3903",
            min: "0",
            size: "2",
            type: "short",
            value: "0",
            Help:
              "The device can trigger scenes using scene IDs assigned to different events.\n\t\t\t\tTo deactivate all scenes set the value to 0. \n\t\t\t\tTo activate all scenes set the value to 3903.\n\t\t\t\t1    - [ID 10] opening door/window (single click).\n\t\t\t\t2    - [ID 11] closing door/window (single click).\n\t\t\t\t4    - [ID 12] holding.\n\t\t\t\t8    - [ID 13] releasing.\n\t\t\t\t16   - [ID 14] double click.\n\t\t\t\t32   - [ID 15] triple click.\n\t\t\t\t256  - [ID 50] high temperature - door/window opened.\n\t\t\t\t512  - [ID 50] high temperature - door/window closed.\n\t\t\t\t1024 - [ID 51] low temperature  - door/window opened.\n\t\t\t\t2048 - [ID 51] low temperature  - door/window closed.\n\t\t\t",
          },
          {
            genre: "config",
            index: "71",
            instance: "1",
            label: "Alarm broadcast",
            max: "7",
            min: "0",
            size: "1",
            type: "byte",
            value: "0",
            Help:
              "Settings for broadcasting ON/OFF commands, sensor alarm and tamper alarm. \n\t\t\t\tValue other than 0 means alarms are sent in Broadcast Mode, to all devices only within the range of the device. \n\t\t\t\tThey are not repeated by the mesh network.\n\t\t\t0 - broadcasts inactive.\n\t\t\t1 - ON/OFF commands broadcast active.\n\t\t\t2 - sensor alarm broadcast active.\n\t\t\t4 - tamper alarm broadcast active.\n\t\t\t",
          },
          {
            genre: "config",
            index: "72",
            instance: "1",
            label: "Associations in Z-Wave network Security Mode",
            max: "15",
            min: "0",
            size: "1",
            type: "byte",
            value: "15",
            Help:
              "This parameter defines how commands are sent in specified association groups: as secure or non-secure. \n\t\t\t\tParameter is active only in Z-Wave network security mode. It does not apply to 1st group Lifeline\n\t\t\t0 - none of the groups sent as secure.\n\t\t\t1 - 2nd group Control sent as secure.\n\t\t\t2 - 3rd group Alarm sent as secure.\n\t\t\t4 - 4th group Sensor ZW3 sent as secure.\n\t\t\t8 - 5th group Tamper ZW3 sent as secure.\n\t\t\t",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "5",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "1" },
              {
                index: "2",
                label: "Control BASIC SET reports",
                max_associations: "5",
              },
              { index: "3", label: "Alarm reports", max_associations: "5" },
              {
                auto: "true",
                index: "4",
                label: "Sensor ZW3 BASIC SET reports",
                max_associations: "5",
              },
              {
                index: "5",
                label: "Tamper ZW3 tamper alarm",
                max_associations: "5",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
