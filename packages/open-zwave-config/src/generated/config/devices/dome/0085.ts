import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/021F:0085:0003",
            name: "OzwInfoPage",
          },
          { text: "images/dome/0085.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1954/",
            id: "0085",
            name: "ZWProductPage",
            type: "0003",
          },
          {
            text:
              "If needed, the Flood Sensor can be reset locally by following these steps.  Only do this when your Z-Wave controller is disconnected or otherwise unreachable.  Beware that resetting your device will disconnect it from the system:\n1. Remove the MAIN BODY COVER and confirm that your Flood Sensor is powered up.\n2. Press and hold the CONNECT BUTTON for at least 10 seconds then release.  A flashing light indicates a successful factory reset. \n3. The Flood Sensor’s memory will be erased to factory settings.",
            name: "ResetDescription",
          },
          {
            text:
              "Follow the instructions for your Z-Wave Certified Conto enter inclusion mode.  When prompted by the controller:\n1. The Flood Sensor should be within 10’ of your Z-Wave controller for the inclusion process.  After successful pairing, the device can be brought to the desired location.\n2. Remove the MAIN BODY COVER by twisting it apart counter-clockwise.\n3. Remove the BATTERY TAB.\n4. Press the BUTTON quickly 3 times in a row.  \nThe INDICATOR LED will flash five times indicating inclusion.",
            name: "InclusionDescription",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0085",
            name: "FrequencyName",
            type: "0003",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1954/Dome Leak Sensor API Manual.pdf",
            name: "ProductManual",
          },
          { text: "Dome Z-Wave Plus Leak Sensor", name: "Name" },
          {
            text:
              "Because the Flood Sensor is a battery powered device, it wakes up on regular intervals to give battery and other status updates to the controller, as well as to accept configuration settings from the controller.  This helps to extend the battery life.  The device can be forced to wake up to submit these reports or accept new settings immediately by simply pressing and holding the BUTTON for two seconds.  The LED INDICATOR will flash once indicating successful wake up.",
            name: "WakeupDescription",
          },
          {
            text:
              "The Dome™ Home Automation DMWS1 Leak Sensor is purpose built to withstand a wet environment it may find itself in. It is suitable for areas where leaks are likely to occur: sinks, toilets, washing machines and water heaters. The Leak Sensor’s flat design allows it to be easily slid under common household appliances with low clearance from the floor. Additional flexibility is provided with a Remote Sensor extending 4 feet for placing it in hard to reach areas and sump pump pits. Once the leak is detected, the Leak Sensor will alert you by beeping locally and it will send an instant notification to your smarthome system. With a Z-Wave Certified Hub, this sensor can be set up to trigger sirens, lights and custom automation scenes or even turn off the water when used with Dome™ Water Main Shut Off (DMWV1). Extra-long Z-Wave wireless range (up to 150 ft) allows you to place it where it’s needed without worrying if the signal is reaching your Z-Wave Hub. There is a 3-year battery life, so you can always be confident that your sensor has power. Dome™ DMWS1 Leak Sensor comes with a 1-year limited warranty. Measurements in inches: 2.625  x 2.625  x 1.125. Dome™ Home Automation Z-Wave devices give your family peace of mind and security you can count on. With Dome™, you’re always connected and always covered. \n•\tWater resistant design with ultra low profile to fit under appliances. Includes a 4 feet long Remote Probe for hard to reach areas and sump pump pits\n•\tLocal alarm sound with LED visual indicator when leaks are detected. Can be integrated with sirens, lights and compatible water main shut off valves (like Dome™ DMWV1)\n•\tUp to 150-foot range and 3-year battery life (CR14250 Battery Included)\n•\tZ-Wave Plus Certified. Requires a Z-Wave Certified Hub to operate\n•\tTested to work with SmartThings, Vera, Staples Connect, HomeSeer, Nexia, Piper, URC, Harmony. Not supported by Wink, DSC, ADT Pulse, 2Gig, Napco, Interlogix, Honeywell (Dome™ is not associated with listed brands)",
            name: "Description",
          },
          { text: "DMWS1", id: "0085", name: "Identifier", type: "0003" },
          {
            text:
              "Follow the instructions for your Z-Wave Certified Conto enter exclusion mode.  When prompted by the controller:\n1. Remove the MAIN BODY COVER from the MAIN BODY BASE.\n2. Press the CONNECT BUTTON quickly 3 times in a row.\nThe INDICATOR LED will flash five times indicating exclusion/disconnection.",
            name: "ExclusionDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1954/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 2,
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
            label: "Total Alarm Duration",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            units: "Minutes",
            value: "120",
            Help:
              "\n        This parameter sets the total amount of time the Leak Sensor will beep and light its LED in the event of a leak.\n        0 Leak Sensor beeps until water is removed.\n        1 to 255 in Minutes.\n      ",
          },
          {
            genre: "config",
            index: "2",
            label: "Mute Time",
            max: "255",
            min: "1",
            size: "1",
            type: "byte",
            units: "Minutes",
            value: "1",
            Help:
              "\n        This parameter defines the amount of time the Leak Sensor remains quiet between each Reminder Alarm.\n      ",
          },
          {
            genre: "config",
            index: "3",
            label: "Initial Alarm",
            max: "255",
            min: "10",
            size: "1",
            type: "byte",
            units: "Seconds",
            value: "60",
            Help:
              "\n        This parameter sets the amount of time the Leak Sensor beeps before it is muted.\n      ",
          },
          {
            genre: "config",
            index: "4",
            label: "Reminder Alarm",
            max: "255",
            min: "5",
            size: "1",
            type: "byte",
            units: "Seconds",
            value: "5",
            Help:
              "\n        This parameter sets the length of each beep after the Initial Alarm.\n      ",
          },
          {
            genre: "config",
            index: "5",
            label: "Audible Alarm",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "\n        This parameter enables or disables the audible alarm (beeping) functionality of the Leak Sensor.\n      ",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "6",
            label: "Water Detection",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "\n        This parameter enables or disables the Leak Sensor.\n        If disabled, the device will not respond in any way to detected leaks.\n      ",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "7",
            label: "Basic Set Level",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            value: "255",
            Help:
              "\n        This parameter defines the value sent by the BASIC_SET command to Association Group 2.\n        0 Turn Off Device.\n        1 to 99 Set Device to Value.\n        255 Turn On Device.\n      ",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "4",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "5" },
              { index: "2", label: "Basic Set", max_associations: "5" },
              {
                index: "3",
                label: "Notification Report",
                max_associations: "5",
              },
              {
                index: "4",
                label: "Sensor Binary Report",
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
