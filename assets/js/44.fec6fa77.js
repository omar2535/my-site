(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{353:function(e,t,a){"use strict";a.r(t);var s=a(8),i=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"aws-certified-solutions-architect-associate-notes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aws-certified-solutions-architect-associate-notes"}},[e._v("#")]),e._v(" AWS Certified Solutions architect associate notes")]),e._v(" "),t("h2",{attrs:{id:"identiy-access-management-iam"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#identiy-access-management-iam"}},[e._v("#")]),e._v(" Identiy Access Management (IAM)")]),e._v(" "),t("ul",[t("li",[e._v("Users")]),e._v(" "),t("li",[e._v("Groups")]),e._v(" "),t("li",[e._v("Roles")]),e._v(" "),t("li",[e._v("Policies - Stored as a JSON")]),e._v(" "),t("li",[e._v("IAM is universal")]),e._v(" "),t("li",[e._v("New users have "),t("strong",[e._v("NO")]),e._v(" permissions when first created")]),e._v(" "),t("li",[e._v("Always setup MFA on root account")])]),e._v(" "),t("h2",{attrs:{id:"s3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#s3"}},[e._v("#")]),e._v(" S3")]),e._v(" "),t("ul",[t("li",[e._v("Object based, 0 - 5TB files")]),e._v(" "),t("li",[e._v("Read after write consistency for "),t("strong",[e._v("PUTS")]),e._v(" of new objects (can be read right after being created)")]),e._v(" "),t("li",[e._v("Overwrite "),t("strong",[e._v("PUTS")]),e._v(" and "),t("strong",[e._v("DELETES")]),e._v(" are eventual consistency (will have to wait a bit)")]),e._v(" "),t("li",[e._v("Bucket names "),t("strong",[e._v("must")]),e._v(" be unique (global namespace)")]),e._v(" "),t("li",[e._v("Uploading objects to s3 will return "),t("strong",[e._v("HTTP 200")]),e._v(" Code")]),e._v(" "),t("li",[e._v("Control access to buckets using either "),t("strong",[e._v("bucket ACL")]),e._v(" or "),t("strong",[e._v("bucket policies")]),e._v(" "),t("ul",[t("li",[e._v("Bucket Policies operate control down to the bucket level")]),e._v(" "),t("li",[e._v("Access control Lists (ACL) for individual S3 objects")])])]),e._v(" "),t("li",[e._v("Can setup access logs for S3 buckets")]),e._v(" "),t("li",[e._v("Object options:\n"),t("ul",[t("li",[e._v("Key (name of object)")]),e._v(" "),t("li",[e._v("Value (sequence of bytes for object)")]),e._v(" "),t("li",[e._v("Version ID (for versioning)")]),e._v(" "),t("li",[e._v("Metadata (Data about object)")])])])]),e._v(" "),t("h3",{attrs:{id:"types-of-s3-buckets"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#types-of-s3-buckets"}},[e._v("#")]),e._v(" Types of S3 Buckets")]),e._v(" "),t("ul",[t("li",[e._v("S3 Standard.\n"),t("ul",[t("li",[e._v("99.99% availability")]),e._v(" "),t("li",[e._v("99.(11x 9's) durability")]),e._v(" "),t("li",[e._v("Stored redundantly across multiple devices")]),e._v(" "),t("li",[e._v("Designed to sustain loss of 2 facilities concurrently")])])]),e._v(" "),t("li",[e._v("S3 Infrequent Access (S3-IA)\n"),t("ul",[t("li",[e._v("Data accessed less frequency")]),e._v(" "),t("li",[e._v("Rapid access when needed")]),e._v(" "),t("li",[e._v("Lower fee than S3 but charged retrieval fee")])])]),e._v(" "),t("li",[e._v("S3 One Zone - IE\n"),t("ul",[t("li",[e._v("Lower cost option for IA")]),e._v(" "),t("li",[e._v("Don't require multiple availability zone")])])]),e._v(" "),t("li",[e._v("S3 - Intelligent Tiering\n"),t("ul",[t("li",[e._v("Moves object around different tiers of S3 using machine learning")])])]),e._v(" "),t("li",[e._v("S3 - Glacier\n"),t("ul",[t("li",[e._v("Low cost storage class for data archiving")]),e._v(" "),t("li",[e._v("Retrieval can be from minutes to hours")])])]),e._v(" "),t("li",[e._v("S3 - Glacier Deep Archive\n"),t("ul",[t("li",[e._v("Lowest-cost storage system")]),e._v(" "),t("li",[e._v("Retrieval time of 12 hours is acceptable")])])])]),e._v(" "),t("h3",{attrs:{id:"s3-encryption"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#s3-encryption"}},[e._v("#")]),e._v(" S3- Encryption")]),e._v(" "),t("ul",[t("li",[e._v("Encryption in transit\n"),t("ul",[t("li",[e._v("SSL/TLS")])])]),e._v(" "),t("li",[e._v("Encryption at rest (server side)\n"),t("ul",[t("li",[e._v("S3 Managed Keys - SSE(server side encryption)-S3")]),e._v(" "),t("li",[e._v("Managed keys - SSE-KMS")]),e._v(" "),t("li",[e._v("Server sided Encryption with Customer Provided Keys - SSE-C")]),e._v(" "),t("li",[e._v("Client side Encryption")])])])]),e._v(" "),t("h3",{attrs:{id:"versioning"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#versioning"}},[e._v("#")]),e._v(" Versioning")]),e._v(" "),t("ul",[t("li",[e._v("Stores all versions of an object")]),e._v(" "),t("li",[e._v("Good for backup")]),e._v(" "),t("li",[e._v("Cannot be disabled once enabled")]),e._v(" "),t("li",[e._v("Comes with "),t("strong",[e._v("MFA DELETE")]),e._v(" capability (multi-factor to delete a file for additional layer of security)")]),e._v(" "),t("li",[e._v("Lifecycle rules:\n"),t("ul",[t("li",[e._v("Automate transitions between tiers of storage depending on time")]),e._v(" "),t("li",[e._v("Can expire an object after some duration from creation")])])])]),e._v(" "),t("h3",{attrs:{id:"cross-region-replication"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cross-region-replication"}},[e._v("#")]),e._v(" Cross-region replication")]),e._v(" "),t("ul",[t("li",[e._v("Does not replicate "),t("strong",[e._v("DELETE")]),e._v(" markers or deleting individual versions")]),e._v(" "),t("li",[e._v("Versioning must be enabled on both source or destination")]),e._v(" "),t("li",[e._v("Files in existing bucket are not replicated automatically")])]),e._v(" "),t("h2",{attrs:{id:"cloudfront"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cloudfront"}},[e._v("#")]),e._v(" CloudFront")]),e._v(" "),t("ul",[t("li",[e._v("Is a content delivery network (CDN)")]),e._v(" "),t("li",[t("strong",[e._v("Edge Location")]),e._v(": Location where content will be cached when pulled. Seperate to AWS Region / Access Zone\n"),t("ul",[t("li",[e._v("Can be written to as well")]),e._v(" "),t("li",[e._v("Objects are cached until TTL (Time to live)")]),e._v(" "),t("li",[e._v("Can clear (invalidate) cached objects and paths, but will be charged")])])]),e._v(" "),t("li",[t("strong",[e._v("Origin")]),e._v(": Origin of files that the CDN will distribute (EC2 / S3 / ELB / Route 53)")]),e._v(" "),t("li",[e._v("Two types of distributions: RTMP (real time messaging protocol) and Web protocol")]),e._v(" "),t("li",[e._v("Can restrict access using signed URLs / Cookies")])]),e._v(" "),t("h2",{attrs:{id:"storage-gateway"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#storage-gateway"}},[e._v("#")]),e._v(" Storage Gateway")]),e._v(" "),t("ul",[t("li",[e._v("for connecting on premise to cloud")]),e._v(" "),t("li",[e._v("doesn't support access from multiple locations simultaneously")]),e._v(" "),t("li",[t("strong",[e._v("File Gateway")]),e._v(": For flat files, stored directly on S3")]),e._v(" "),t("li",[t("strong",[e._v("Volume Gateway")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Stored Volumes")]),e._v(": Entire Dataset is stored on site and is asyncrhonously backed up to S3")]),e._v(" "),t("li",[t("strong",[e._v("Cached Volumes")]),e._v(": Only most frequency accessed data on site and entire dataset stored on S3")])])])]),e._v(" "),t("h2",{attrs:{id:"elastic-compute-cloud-ec2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#elastic-compute-cloud-ec2"}},[e._v("#")]),e._v(" Elastic Compute Cloud (EC2)")]),e._v(" "),t("ul",[t("li",[e._v("Provides resizable compute capacity in the cloud")]),e._v(" "),t("li",[e._v("Instance Types:\n"),t("ol",[t("li",[t("strong",[e._v("F")]),e._v(" - FPGA (field-programmable gate array)")]),e._v(" "),t("li",[t("strong",[e._v("I")]),e._v(" - IOPS (input/output operations per second)")]),e._v(" "),t("li",[t("strong",[e._v("G")]),e._v(" - Graphics")]),e._v(" "),t("li",[t("strong",[e._v("H")]),e._v(" - High Disk Throughput")]),e._v(" "),t("li",[t("strong",[e._v("T")]),e._v(" - Cheap, general purpose")]),e._v(" "),t("li",[t("strong",[e._v("D")]),e._v(" - Dense storage")]),e._v(" "),t("li",[t("strong",[e._v("R")]),e._v(" - RAM (memory optimized)")]),e._v(" "),t("li",[t("strong",[e._v("M")]),e._v(" - Main choice for general purpose apps")]),e._v(" "),t("li",[t("strong",[e._v("C")]),e._v(" - Compute optimized")]),e._v(" "),t("li",[t("strong",[e._v("P")]),e._v(" - Graphics (PCIE)")]),e._v(" "),t("li",[t("strong",[e._v("X")]),e._v(" - Extreme memory")]),e._v(" "),t("li",[t("strong",[e._v("Z")]),e._v(" - Extreme Memory and CPU")]),e._v(" "),t("li",[t("strong",[e._v("A")]),e._v(" - ARM-based workloads")]),e._v(" "),t("li",[t("strong",[e._v("U")]),e._v(" - Bare Metal")])])]),e._v(" "),t("li",[e._v("Termination protection is turned off by default")]),e._v(" "),t("li",[e._v("amazon machine image (AMI)")])]),e._v(" "),t("h3",{attrs:{id:"security-groups"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#security-groups"}},[e._v("#")]),e._v(" Security Groups")]),e._v(" "),t("ul",[t("li",[e._v("security rule takes effect immediately")]),e._v(" "),t("li",[e._v("Inbound / Outbound rule are "),t("strong",[e._v("stateful")]),e._v(" (means having an inbound will have a corresponding outbound rule automatically)")]),e._v(" "),t("li",[e._v("All "),t("strong",[e._v("inbound")]),e._v(" traffic is blocked by default")]),e._v(" "),t("li",[e._v("All "),t("strong",[e._v("outbound")]),e._v(" traffic is allowed by default")]),e._v(" "),t("li",[e._v("Can have multiple security groups for an EC2 instance")]),e._v(" "),t("li",[e._v("Can have multiple EC2 instances with 1 security group")]),e._v(" "),t("li",[e._v("No "),t("em",[e._v("deny")]),e._v(" rules, only "),t("em",[e._v("allow")]),e._v(" rules")])]),e._v(" "),t("h3",{attrs:{id:"ebs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ebs"}},[e._v("#")]),e._v(" EBS")]),e._v(" "),t("ul",[t("li",[e._v("Will be in the same availablity zone as the EC2 instance")]),e._v(" "),t("li",[e._v("root EBS volume is deleted when EC2 instance is terminated")]),e._v(" "),t("li",[e._v("Can change EBS volume type on the fly without shutting it off")]),e._v(" "),t("li",[e._v("additional EBS volumes that are not the root EBS volume "),t("strong",[e._v("will not")]),e._v(" be automatically deleted when EC2 instance is terminated")]),e._v(" "),t("li",[t("strong",[e._v("Snapshots")]),e._v(" exists on S3\n"),t("ul",[t("li",[e._v("Can create AMI's from snapshots")])])]),e._v(" "),t("li",[t("strong",[e._v("EBS Optimization")]),e._v(":\n"),t("ul",[t("li",[e._v("Optimizes network traffic to the EBS volume")])])]),e._v(" "),t("li",[t("strong",[e._v("HDD")]),e._v(" "),t("ul",[t("li",[e._v("large, sequential operations")]),e._v(" "),t("li",[e._v("can't be used as boot volume")]),e._v(" "),t("li",[e._v("streaming data workloads")]),e._v(" "),t("li",[e._v("low cost")]),e._v(" "),t("li",[e._v("mostly for throughput")])])]),e._v(" "),t("li",[t("strong",[e._v("SSD")]),e._v(" "),t("ul",[t("li",[e._v("small, random operations")]),e._v(" "),t("li",[e._v("can be used as boot volume")]),e._v(" "),t("li",[e._v("moderate / high cost")]),e._v(" "),t("li",[e._v("for IOPS")])])])]),e._v(" "),t("h4",{attrs:{id:"types-of-ebs-volumes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#types-of-ebs-volumes"}},[e._v("#")]),e._v(" Types of EBS Volumes")]),e._v(" "),t("ul",[t("li",[e._v("General Purpose SSD (GP2)\n"),t("ul",[t("li",[e._v("For most workloads")])])]),e._v(" "),t("li",[e._v("Povisioned IOPS SSD (IO1)\n"),t("ul",[t("li",[e._v("For databases")])])]),e._v(" "),t("li",[e._v("Throuput Optimized HDD (ST1)\n"),t("ul",[t("li",[e._v("For big data & data warehouses")])])]),e._v(" "),t("li",[e._v("Cold HDD (SC1)\n"),t("ul",[t("li",[e._v("For File servers")])])]),e._v(" "),t("li",[e._v("EBS Magnetic (Standard)\n"),t("ul",[t("li",[e._v("For infrequenly accessed data")])])])]),e._v(" "),t("h3",{attrs:{id:"instance-store"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#instance-store"}},[e._v("#")]),e._v(" Instance Store")]),e._v(" "),t("ul",[t("li",[e._v("High speed storage physically attached to the EC2 instance")]),e._v(" "),t("li",[e._v("Ephemeral storage")]),e._v(" "),t("li",[e._v("Instance store volumes cannot be stopped. If uderlying host fails, you will lose data")]),e._v(" "),t("li",[e._v("Can be rebooted")]),e._v(" "),t("li",[e._v("Can't keep after EC2 instance termination like EBS")])]),e._v(" "),t("h3",{attrs:{id:"encryption"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#encryption"}},[e._v("#")]),e._v(" Encryption")]),e._v(" "),t("ul",[t("li",[e._v("Can make an encrypted root device volume by:\n"),t("ol",[t("li",[e._v("Create a snapshot of EC2 instance")]),e._v(" "),t("li",[e._v("Copy the created snapshot select the encrypt option")]),e._v(" "),t("li",[e._v("Create an AMI from the snapshot")]),e._v(" "),t("li",[e._v("launch an EC2 instance as an encrypted root device volume")])])]),e._v(" "),t("li",[e._v("Encryption can also be configured at EC2 instance launch")]),e._v(" "),t("li",[e._v("Snapshot of encrypted volumes are encrypted automatically")]),e._v(" "),t("li",[e._v("Volumes restored from encrypted snapshots are encrypted automatically")])]),e._v(" "),t("h3",{attrs:{id:"ec2-q-a"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ec2-q-a"}},[e._v("#")]),e._v(" EC2 Q&A")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Q")]),e._v(": How to move EC2&EBS to another region?")]),e._v(" "),t("li",[t("strong",[e._v("A")]),e._v(": Create a snapshot, then create an amazon machine image (AMI) from the snapshot, copy the AMI from one region to the other, then create a new EC2 instance with the copied AMI.")])]),e._v(" "),t("h2",{attrs:{id:"placement-groups-ec2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#placement-groups-ec2"}},[e._v("#")]),e._v(" Placement groups (EC2)")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Cluster")]),e._v(": places EC2 instances inside an AZ for low latency communication usually used for high performance compute")]),e._v(" "),t("li",[t("strong",[e._v("Partition")]),e._v(": To seperate underlying hardware for groups of instances in a partition typically used by large distributed and replicated workloads")]),e._v(" "),t("li",[t("strong",[e._v("Spread placement group")]),e._v(": places EC2 instances across "),t("strong",[e._v("distinct")]),e._v(" underlying hardware to reduce correlated failures")])]),e._v(" "),t("h2",{attrs:{id:"cloudwatch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cloudwatch"}},[e._v("#")]),e._v(" CloudWatch")]),e._v(" "),t("ul",[t("li",[e._v("Monitors performance and metrics")]),e._v(" "),t("li",[e._v("Can set alarms to perform actions such as invoking actions to start/stop EC2 instances")]),e._v(" "),t("li",[t("strong",[e._v("Standard monitoring")]),e._v(" monitors events every 5 minutes by default")]),e._v(" "),t("li",[t("strong",[e._v("Detailed monitoring")]),e._v(" will have 1 minute intervals")])]),e._v(" "),t("h2",{attrs:{id:"cloudtrail"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cloudtrail"}},[e._v("#")]),e._v(" CloudTrail")]),e._v(" "),t("ul",[t("li",[e._v("Audits account actions")]),e._v(" "),t("li",[e._v("Increased visibility on AWS account logs (IE. who made the S3 bucket)")]),e._v(" "),t("li",[e._v("For monitoring API calls as well")])]),e._v(" "),t("h2",{attrs:{id:"redshift"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redshift"}},[e._v("#")]),e._v(" Redshift")]),e._v(" "),t("ul",[t("li",[e._v("SQL based data warehouse for analytics")]),e._v(" "),t("li",[e._v("Ideal for processing large amounts of data")]),e._v(" "),t("li",[e._v("No multi-AZ deployments")]),e._v(" "),t("li",[e._v("Backups to s3")]),e._v(" "),t("li",[t("strong",[e._v("Redshift spectrum:")]),e._v(" Query data from files directly on s3")]),e._v(" "),t("li",[e._v("More control over performance than athena")])]),e._v(" "),t("h2",{attrs:{id:"athena"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#athena"}},[e._v("#")]),e._v(" Athena")]),e._v(" "),t("ul",[t("li",[e._v("serverless query service to analyze data in S3 via SQL queries")]),e._v(" "),t("li",[e._v("integrates with AWS glue")])]),e._v(" "),t("h2",{attrs:{id:"fsx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fsx"}},[e._v("#")]),e._v(" FSx")]),e._v(" "),t("ul",[t("li",[e._v("Fast performance of commercially available file systems")]),e._v(" "),t("li",[t("strong",[e._v("FSx windows file server")]),e._v(":\n"),t("ul",[t("li",[e._v("built on AD and SMB")]),e._v(" "),t("li",[e._v("for business applications")])])]),e._v(" "),t("li",[t("strong",[e._v("FSx luster")]),e._v(":\n"),t("ul",[t("li",[e._v("High performance storage")])])])]),e._v(" "),t("h2",{attrs:{id:"ecs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ecs"}},[e._v("#")]),e._v(" ECS")]),e._v(" "),t("ul",[t("li",[e._v("Fully managed container orchestration service")]),e._v(" "),t("li",[t("strong",[e._v("Task definition")]),e._v(":\n"),t("ul",[t("li",[e._v("Required to run docker containers in ECS\n"),t("ul",[t("li",[e._v("Needs to specify docker image to use with each instance in your task")]),e._v(" "),t("li",[e._v("How much CPU and memory for each task")]),e._v(" "),t("li",[e._v("The launch type")]),e._v(" "),t("li",[e._v("IAM role tasks in this task definition should use")])])])])]),e._v(" "),t("li",[e._v("Database credentials can be stored in:\n"),t("ul",[t("li",[t("strong",[e._v("AWS Secrets manager")])]),e._v(" "),t("li",[t("strong",[e._v("AWS Systems Manager Parameter")])])])])]),e._v(" "),t("h2",{attrs:{id:"encryption-client-side-vs-server-side"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#encryption-client-side-vs-server-side"}},[e._v("#")]),e._v(" Encryption client side vs server side")]),e._v(" "),t("ul",[t("li",[e._v("Client-side encryption: data is encrypted before being sent to AWS\n"),t("ul",[t("li",[e._v("Use either "),t("strong",[e._v("AWS KMS-managed customer master key")]),e._v(" or **client-side master")])])])]),e._v(" "),t("h2",{attrs:{id:"dynamodb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dynamodb"}},[e._v("#")]),e._v(" DynamoDB")]),e._v(" "),t("ul",[t("li",[e._v("Scalable NoSQL database")]),e._v(" "),t("li",[t("strong",[e._v("Amazon DynamoDB Accelerator (DAX)")]),e._v(":\n"),t("ul",[t("li",[e._v("fully managed in memory cache for dynamoDB")]),e._v(" "),t("li",[e._v("highly scalable")])])]),e._v(" "),t("li",[e._v("No read replicas (doesn't need them)")]),e._v(" "),t("li",[t("strong",[e._v("DynamoDB stream")]),e._v(" is an ordered flow of information that changes to items in a DDB table")])]),e._v(" "),t("h2",{attrs:{id:"aws-web-application-firewall-waf"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aws-web-application-firewall-waf"}},[e._v("#")]),e._v(" AWS Web Application Firewall (WAF)")]),e._v(" "),t("ul",[t("li",[e._v("Blocks common attack patterns ie. SQL injections, XSS, and other custom rules")]),e._v(" "),t("li",[e._v("Can be deployed in cloudfront, ALB, or EC2/APIG.")])]),e._v(" "),t("h2",{attrs:{id:"aws-privatelink"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aws-privatelink"}},[e._v("#")]),e._v(" AWS privatelink")]),e._v(" "),t("ul",[t("li",[e._v("Private connection between VPC's, AWS services, and on-premise applications")]),e._v(" "),t("li",[e._v("Connect services across different accounts and VPC's")]),e._v(" "),t("li",[e._v("Can use "),t("strong",[e._v("VPC endpoints")]),e._v(" with privatelink to privately connect to VPC without the need for internet gateways, NAT devices, VPN connections, or AWS direct connect connections")])]),e._v(" "),t("h2",{attrs:{id:"nat-gateway"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nat-gateway"}},[e._v("#")]),e._v(" NAT gateway")]),e._v(" "),t("ul",[t("li",[e._v("network addrses translation table")]),e._v(" "),t("li",[e._v("enable instances inside a private subnet to connect to the internet or other AWS services")]),e._v(" "),t("li",[e._v("prevents internet from initiating a connection with those instances")]),e._v(" "),t("li",[e._v("highly available")]),e._v(" "),t("li",[e._v("managed for you by aws")]),e._v(" "),t("li",[e._v("charged hourly")])]),e._v(" "),t("h2",{attrs:{id:"internet-gateway"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#internet-gateway"}},[e._v("#")]),e._v(" Internet gateway")]),e._v(" "),t("ul",[t("li",[e._v("Allows connection from the internet to the VPC")]),e._v(" "),t("li",[e._v("horizontally scaled, redundant, highly available")])]),e._v(" "),t("h2",{attrs:{id:"aws-direct-connect"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aws-direct-connect"}},[e._v("#")]),e._v(" AWS direct connect")]),e._v(" "),t("ul",[t("li",[e._v("establish dedicated network connection from premise to AWS")]),e._v(" "),t("li",[e._v("for high throughput workloads")]),e._v(" "),t("li",[e._v("more consistent than internet-based connections")]),e._v(" "),t("li",[e._v("not for VPC's")])]),e._v(" "),t("h2",{attrs:{id:"egress-only-internet-gateway"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#egress-only-internet-gateway"}},[e._v("#")]),e._v(" Egress-only internet gateway")]),e._v(" "),t("ul",[t("li",[e._v("allows only IPV6 internet connection from VPC to internet")]),e._v(" "),t("li",[e._v("denies internet traffic initiating ipv6 connection with VPC")])]),e._v(" "),t("h2",{attrs:{id:"aws-datasync"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aws-datasync"}},[e._v("#")]),e._v(" AWS DataSync")]),e._v(" "),t("ul",[t("li",[e._v("Simple way to move large amounts of data from on-premises storage and S3, EFS, or FSx")]),e._v(" "),t("li",[e._v("Used for migrating data ("),t("strong",[e._v("not databases")]),e._v(")")])]),e._v(" "),t("h2",{attrs:{id:"aws-global-accelerator"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aws-global-accelerator"}},[e._v("#")]),e._v(" AWS global accelerator")]),e._v(" "),t("ul",[t("li",[e._v("provides static ip address that act as a fixed entry point to your application endpoint")]),e._v(" "),t("li",[e._v("single/multiple AWS regions such as ALB, NLB, or EC2 instances")])]),e._v(" "),t("h2",{attrs:{id:"lambda"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lambda"}},[e._v("#")]),e._v(" Lambda")]),e._v(" "),t("ul",[t("li",[e._v("Environment variables are encrypted at rest (after deployment)")]),e._v(" "),t("li",[t("strong",[e._v("Canary")]),e._v(" deployment ensures deployments are shifted in increments")])]),e._v(" "),t("h2",{attrs:{id:"ec2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ec2"}},[e._v("#")]),e._v(" EC2")]),e._v(" "),t("ul",[t("li",[e._v("When doing maintenance, put EC2 on "),t("strong",[e._v("standby")]),e._v(" state (will still be charged)")]),e._v(" "),t("li",[t("strong",[e._v("InsufficientInstanceCapacity")]),e._v(" when AWS does not have enough on-demand instances available")]),e._v(" "),t("li",[t("strong",[e._v("InstanceLimitExceeded")]),e._v(" when limit on number of instances launched in a region is met")]),e._v(" "),t("li",[e._v("Can use "),t("strong",[e._v("launch templates")]),e._v(" to store settings such as AMI ID, instance type, key pairs, and security groups")]),e._v(" "),t("li",[t("strong",[e._v("auto scaling")]),e._v(" "),t("ul",[t("li",[e._v("use "),t("strong",[e._v("launch configurations")]),e._v(" to specify what AMI to launch\n"),t("ul",[t("li",[e._v("must create a new launch config when making changes to AMI")])])]),e._v(" "),t("li",[e._v("Performs rebalancing when number of instances accross AZ's are not balanced")]),e._v(" "),t("li",[e._v("Can send an SNS email")])])]),e._v(" "),t("li",[t("strong",[e._v("Dedicated instance")]),e._v(": instance that runs in a VPC for a single customer")]),e._v(" "),t("li",[t("strong",[e._v("AWS Opswork")]),e._v(" "),t("ul",[t("li",[e._v("provides automatic configuration of servers through chef and puppet")])])]),e._v(" "),t("li",[t("strong",[e._v("AWS runcommand")]),e._v(" "),t("ul",[t("li",[e._v("allows ad-hoc commands to be run across EC2 instances")])])]),e._v(" "),t("li",[t("strong",[e._v("AWS userdata")]),e._v(" "),t("ul",[t("li",[e._v("allows setup scripts to be ran when EC2 instance first launches")])])]),e._v(" "),t("li",[t("strong",[e._v("AWS codedeploy")]),e._v(" "),t("ul",[t("li",[e._v("allows automatic software deployments to EC2, lambda, or servers")])])]),e._v(" "),t("li",[t("strong",[e._v("instance store")]),e._v(" volumes can only be attached when instance is first launched")])]),e._v(" "),t("h2",{attrs:{id:"endpoints"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#endpoints"}},[e._v("#")]),e._v(" Endpoints")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v('Gateway endpoint"')]),e._v(" "),t("ul",[t("li",[e._v("gateway that is target for a specific route")]),e._v(" "),t("li",[e._v("Amazon S3, DynamoDB")]),e._v(" "),t("li",[e._v("VPC endpoint policies")])])]),e._v(" "),t("li",[t("strong",[e._v("Interface endpoint")]),e._v(" "),t("ul",[t("li",[e._v("elastic network interface with private endpoints")]),e._v(" "),t("li",[e._v("APIG, CloudFormation, cloudwatch")]),e._v(" "),t("li",[e._v("Security groups")]),e._v(" "),t("li",[e._v("uses privatelink")])])])]),e._v(" "),t("h2",{attrs:{id:"elasticache"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#elasticache"}},[e._v("#")]),e._v(" Elasticache")]),e._v(" "),t("p",[e._v("In memory database")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Memcached:")]),e._v(" easy to use")]),e._v(" "),t("li",[t("strong",[e._v("Redis:")]),e._v(" Snapshots, replication, transactions, lua scripts, geospatial support")])]),e._v(" "),t("h2",{attrs:{id:"vpc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vpc"}},[e._v("#")]),e._v(" VPC")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Security groups")]),e._v(" act as virtual firewalls for an instance\n"),t("ul",[t("li",[e._v("Only has allow rules")]),e._v(" "),t("li",[e._v("stateful")]),e._v(" "),t("li",[e._v("evaluates all rules")]),e._v(" "),t("li",[e._v("default of deny all inbound, allow all outbound")])])]),e._v(" "),t("li",[t("strong",[e._v("Network ACLs")]),e._v(" act as virtual firewalls within a subnet\n"),t("ul",[t("li",[e._v("Can have allow/deny rules")]),e._v(" "),t("li",[e._v("stateless")]),e._v(" "),t("li",[e._v("process rules in order")]),e._v(" "),t("li",[e._v("default of allow all inbound, allow all outbound")]),e._v(" "),t("li",[e._v("custom of deny all inbound, deny all outbound")])])]),e._v(" "),t("li",[t("strong",[e._v("VPC peering")]),e._v(" allows networking connection between two VPCs")]),e._v(" "),t("li",[e._v("subnets are associated with route tables when created")]),e._v(" "),t("li",[e._v("must provice "),t("strong",[e._v("security group ID")]),e._v(" and "),t("strong",[e._v("subnet ID")]),e._v(" when enabling access to resources inside private VPC")]),e._v(" "),t("li",[t("strong",[e._v("Default VPC")]),e._v(" will be assinged with both a public and private DNS when launched")]),e._v(" "),t("li",[t("strong",[e._v("Non-default VPC")]),e._v(" will be assigned only a private DNS when launched")]),e._v(" "),t("li",[t("strong",[e._v("transit gateways")]),e._v(" allows a centralized place to conenct to all VPCs")]),e._v(" "),t("li",[t("strong",[e._v("flow logs")]),e._v(" is used to capture traffic information to and from network interfaces in VPC")])]),e._v(" "),t("h2",{attrs:{id:"elastic-load-balancer-elb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#elastic-load-balancer-elb"}},[e._v("#")]),e._v(" Elastic load balancer (ELB)")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Application load balancer (ALB):")]),e._v(" "),t("ul",[t("li",[e._v("layer 7 load balancing")]),e._v(" "),t("li",[e._v("Can enable "),t("strong",[e._v("access logs")]),e._v(" to get information about requester and store data in s3")]),e._v(" "),t("li",[e._v("for HTTP/HTTPS traffic")])])]),e._v(" "),t("li",[t("strong",[e._v("Network load balancer (NLB):")]),e._v(" "),t("ul",[t("li",[e._v("layer 4 load balancing")]),e._v(" "),t("li",[e._v("for UDP / TCP traffic")])])]),e._v(" "),t("li",[e._v("closes connections cleanly via "),t("strong",[e._v("connection draining")])]),e._v(" "),t("li",[e._v("Target groups can be used to specify which microservice a load balancer routes to")])]),e._v(" "),t("h2",{attrs:{id:"load-balancing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#load-balancing"}},[e._v("#")]),e._v(" Load balancing")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Weighted routing route53")]),e._v(": when you want to unevenly split traffic based on route53")]),e._v(" "),t("li",[t("strong",[e._v("Cross zone load balancing")]),e._v(": when you want to evenly split traffic between all EC2 instances (if there are more instances in one AZ than the other, traffic will still be evenly split among all instances)")])]),e._v(" "),t("h2",{attrs:{id:"ec2-networking"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ec2-networking"}},[e._v("#")]),e._v(" EC2 networking")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("ENI")]),e._v(": Basic networking")]),e._v(" "),t("li",[t("strong",[e._v("ENA")]),e._v(": elastic network adapter: betwen 10gbps or 100gbps")]),e._v(" "),t("li",[t("strong",[e._v("EFA")]),e._v(": lastic fabric adapter: for HPC or OS by-pass")])]),e._v(" "),t("h2",{attrs:{id:"aws-batch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aws-batch"}},[e._v("#")]),e._v(" AWS batch")]),e._v(" "),t("ul",[t("li",[e._v("used for batch processing operations without need to manage servers")])]),e._v(" "),t("h2",{attrs:{id:"aws-elastic-beanstalk"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aws-elastic-beanstalk"}},[e._v("#")]),e._v(" AWS Elastic beanstalk")]),e._v(" "),t("ul",[t("li",[e._v("Deploys and scales web applications and services developed in Java, .NET, python, ruby, and others.")]),e._v(" "),t("li",[e._v("Deploys, load balances, auto-scales, and health monitors for you")]),e._v(" "),t("li",[e._v("is a platform-as-a-service (PaaS) - means that scaling is handled for us")]),e._v(" "),t("li",[e._v("different from cloudFormation in that we don't need to manage scaling ourselves")])]),e._v(" "),t("h2",{attrs:{id:"aws-step-functions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aws-step-functions"}},[e._v("#")]),e._v(" AWS step functions")]),e._v(" "),t("ul",[t("li",[e._v("Cordinates workflows to sequence lambda functions and multiple AWS services into business-critical applications")])]),e._v(" "),t("h2",{attrs:{id:"aws-config"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aws-config"}},[e._v("#")]),e._v(" AWS config")]),e._v(" "),t("ul",[t("li",[e._v("assess and evaluate configurations of AWS resources")])]),e._v(" "),t("h2",{attrs:{id:"rds"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rds"}},[e._v("#")]),e._v(" RDS")]),e._v(" "),t("ul",[t("li",[e._v("Snapshot encryption is only available if the database itself is encrypted or the encrypt database option is selected when first created")]),e._v(" "),t("li",[t("strong",[e._v("Atomic, consistent, isolated, durable (ACID)")]),e._v(" compliant")]),e._v(" "),t("li",[e._v("IAM DB authentication: allows only authenticated calls to the database (works with "),t("strong",[e._v("MySQL")]),e._v(" and "),t("strong",[e._v("Postgresql")]),e._v(")")])]),e._v(" "),t("h2",{attrs:{id:"aws-emr"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aws-emr"}},[e._v("#")]),e._v(" AWS EMR")]),e._v(" "),t("ul",[t("li",[e._v("process vast amounts of data")]),e._v(" "),t("li",[e._v("uses hadoop")]),e._v(" "),t("li",[e._v("on demand")]),e._v(" "),t("li",[e._v("elasticity is important")]),e._v(" "),t("li",[e._v("can access ec2 instances that were created by EMR")]),e._v(" "),t("li",[t("strong",[e._v("Hive")]),e._v(" uses SQL queries to interact with data")])]),e._v(" "),t("h2",{attrs:{id:"aws-kinesis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aws-kinesis"}},[e._v("#")]),e._v(" AWS kinesis")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Kinesis data streams")]),e._v(": collect log events in real time")]),e._v(" "),t("li",[t("strong",[e._v("Kinesis data firehose")]),e._v(": reliably load data into datalakes\n"),t("ul",[t("li",[e._v("Can load into the following: S3, redshift, elasticsearch, and splunk")])])])]),e._v(" "),t("h2",{attrs:{id:"sqs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sqs"}},[e._v("#")]),e._v(" SQS")]),e._v(" "),t("ul",[t("li",[e._v("Queue for processing information or decoupling stacks")]),e._v(" "),t("li",[e._v("defaults with "),t("strong",[e._v("short polling")]),e._v(" so only samples a subset of servers to find messages")]),e._v(" "),t("li",[t("strong",[e._v("long polling")]),e._v(" will query all servers for messages until timeout expires")])]),e._v(" "),t("h2",{attrs:{id:"misc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#misc"}},[e._v("#")]),e._v(" Misc")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("AWS Macie:")]),e._v(" ML powered security service that helps prevent data loss in S3")]),e._v(" "),t("li",[t("strong",[e._v("AWS directory service AD connector:")]),e._v(" easy integration with microsoft AD")]),e._v(" "),t("li",[t("strong",[e._v("AWS shield:")]),e._v(" DDOS protection at no additional cost")]),e._v(" "),t("li",[t("strong",[e._v("AWS x-ray:")]),e._v(" helps developers analyze and debug distributed applications built using the microservice architecture")]),e._v(" "),t("li",[t("strong",[e._v("AWS SWF:")]),e._v(" able to coordinate work across distributed application components")]),e._v(" "),t("li",[t("strong",[e._v("Decoupled architecture")]),e._v(" requres "),t("strong",[e._v("SQS")]),e._v(" and "),t("strong",[e._v("SWF")])]),e._v(" "),t("li",[t("strong",[e._v("AWS Resource Access Manager (RAM")]),e._v(") is a service that enables you to easily and securely share AWS resources with any AWS account or within your AWS Organization")]),e._v(" "),t("li",[t("strong",[e._v("AWS Parameter store:")]),e._v(" allows you to store data such as passwords, database strings, AMI ids, and license codes as parameter values.")]),e._v(" "),t("li",[t("strong",[e._v("AWS config:")]),e._v(" enables you to assess, audit, and evaluate configurations of AWS resources")])])])}),[],!1,null,null,null);t.default=i.exports}}]);