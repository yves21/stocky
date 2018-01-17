-- Table avec les articles standards
create table articles(
  barcode varchar(10) PRIMARY KEY,
  name varchar(50),
  local varchar(2),
  lane varchar(1),
  shelf varchar(1),
  level varchar(1),
  drawer varchar(1),
  quantity integer
);


-- Table avec les chaussures
create table shoes(
  barcode varchar(10) PRIMARY KEY,
  size varchar(2),
  quantity integer
);

-- Table avec les agents
create table agents(
  id varchar(9) PRIMARY KEY,
  firstname varchar(50),
  lastname varchar(50),
  grade varchar(10),
  shoes_size varchar(2),
  shoes_date date
);

-- Table avec les vêtements
create table clothes(
  barcode varchar(10) PRIMARY KEY,
  name varchar(50),
  size varchar(3),
  quantity integer,
  agent_id varchar(9),
  FOREIGN KEY(agent_id) REFERENCES agents(id)
);
