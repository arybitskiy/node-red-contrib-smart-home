import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/014A:0001:0004",
            name: "OzwInfoPage",
          },
          { text: "images/ecolink/motion.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2928/",
            id: "0001",
            name: "ZWProductPage",
            type: "0004",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2928/EU Z-wave PIR H214101 ZWAVE_Ver02.pdf",
            name: "ProductManual",
          },
          {
            text:
              "The sensor must be added to a Z-Wave network prior to use. To include the sensor in a network, both the sensor and the network controller must be in inclusion mode at the same time. \n\nActivate inclusion mode for the sensor by removing the battery isolation pull tab, or by inserting the battery (see next section for battery installation tips). When the inclusion process is complete the red LED will turn on for approximately 10 seconds and then it will go out. If the LED continues to flash repeat the inclusion process.\n\nRefer to the instructions provided by the manufacturer of your specific controller for details on initiating the controller’s inclusion mode. \n\n\t\nSTEP ONE    \tStart by placing the controller into inclusion mode.\n\nSTEP TWO\tActivate inclusion mode for the sensor by removing the battery isolation pull tab, or by inserting the battery (see next section for battery installation tips). When the inclusion process is complete the red LED will turn on for approximately 10 seconds and then it will go out.  If the LED continues to flash repeat the inclusion process.   \nSTEP THREE  \tTest the motion sensor before mounting it.  Place the sensor in an unoccupied room.  Leave the room for at least 4 minutes.  Return to the room and pass in front of the sensor lens.  The LED will flash once to indicate that motion was detected.",
            name: "InclusionDescription",
          },
          { text: "H214101", id: "0001", name: "Identifier", type: "0004" },
          {
            text:
              "To restore this sensor to factory default settings, follow the instructions in this manual to exclude this sensor from the Z-Wave network.  Upon completion of removal from the network the sensor will restore itself to factory default settings automatically.  Use this procedure only in the event that the network primary controller is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
          {
            text:
              "•\tFor indoor use only \n•\tOperating frequency: 908.42 MHz \n•\tOperating range: Up to 100 feet (30.5 meters) line-of-sight \n•\tOperating temperature: 0˚C to 49˚C, 32˚F to 120˚F (ambient temperature) \n•\tDetection radius: 39 feet (see detection region diagram) \n•\tDetection angle: 45 degrees in either direction from the sensor’s center \n•\tBattery type: 3V Lithium CR123A \n•\tBattery life: approximately 3 years \n•\tPassive Infrared (PIR) based technology",
            name: "Description",
          },
          { text: "EU Z-WAVE PIR MOTION SENSOR", name: "Name" },
          {
            text:
              "To save power, this sensor sleeps most of the time and is therefore not awake to receive messages from a gateway for testing. Removing the top case from the sensor will put in device into a tampered mode in which the sensor will stay awake and able to receive messages. Most of the time an end user would not do this, but if the sensor needs to be configured after inclusion, an end user can follow the instructions below for sending Wake-Up notifications.",
            name: "WakeupDescription",
          },
          {
            text: "U.S. / Canada / Mexico / CEPT (Europe)",
            id: "0001",
            name: "FrequencyName",
            type: "0004",
          },
          {
            text:
              "Exclusion mode on the sensor is initiated following the same exact procedure as inclusion.",
            name: "ExclusionDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1500/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2928/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 4,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      { id: "32", Compatibility: [{ SetAsReport: [true] }] },
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "1",
            instance: "1",
            label: "Basic Set Report when sensor is restored",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n\t\t\tConfigures the sensor to send or not send Basic Set commands of 0x00 to nodes in Association group 2 turning the devices off when the sensor is in a restored state (i.e. motion not detected).  \n\t\t\tBy default the sensor does NOT send Basic Set commands of 0x00.\n\t\t\t",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "255" },
            ],
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "Basic Set Report",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n\t\t\tConfigures the sensor to either to send or not to send Sensor Binary Report commands to Association Group 1 when the sensor is faulted and restored.  \n\t\t\t",
            Item: [
              { label: "Enable Binary Reports", value: "0" },
              { label: "Disable Binary Reports", value: "255" },
            ],
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "2",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "5" },
              { index: "2", label: "Basic Report", max_associations: "5" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
