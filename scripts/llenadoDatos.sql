use trailerflix; 

-- Inserción de categorías
INSERT INTO categories (id, nombre_categoria) VALUES
(1, 'Serie'),
(2, 'Película');

-- Inserción de géneros
INSERT INTO genres (id, nombre_genero) VALUES
(1, 'Ciencia Ficción'),
(2, 'Drama'),
(3, 'Suceso Real'),
(4, 'Suspenso'),
(5, 'Fantasía'),
(6, 'Comedia'),
(7, 'Familia');

-- Inserción de títulos
INSERT INTO titles (id, nombre_titulo, id_categoria, id_genero, temporadas, calificacion) VALUES
(1, 'The Crown', 1, 3, 4, 6),
(2, 'Riverdale', 1, 2, 5, 2),
(3, 'The Mandalorian', 1, 1, 2, 4),
(4, 'The Umbrella Academy', 1, 1, 1, 6),
(5, 'Gambito de Dama', 1, 2, 1, 8),
(6, 'Enola Holmes', 2, 2, 0, 4),
(7, 'Guasón', 2, 4, 0, 9),
(8, 'Avengers: End Game', 2, 1, 0, 5),
(9, 'Juego de tronos', 1, 5, 8, 5),
(10, 'The Flash', 1, 1, 6, 9),
(11, 'The Big Bang Theory', 1, 6, 12, 8),
(12, 'Friends', 1, 6, 10, 3),
(13, 'Anne with an \'E\'', 1, 7, 2, 6),
(14, 'Expedientes Secretos \'X\'', 1, 1, 11, 7),
(15, 'Chernobyl', 1, 3, 1, 4);

-- Inserción de actores y relación con títulos

INSERT INTO actors (nombre, apellido)values 
('Pedro', 'Pascal'),
    ('Carl', 'Weathers'),
    ('Misty', 'Rosas'),
    ('Chris', 'Bartlett'),
    ('Rio', 'Hackford'),
    ('Giancarlo', 'Esposito'),
    ('Tom', 'Hopper'),
    ('David', 'Castañeda'),
    ('Emmy', 'Raver-Lampman'),
    ('Robert', 'Sheehan'),
    ('Aidan', 'Gallagher'),
    ('Elliot', 'Page'),
    ('Anya', 'Taylor-Joy'),
    ('Thomas', 'Brodie-Sangster'),
    ('Harry', 'Melling'),
    ('Moses', 'Ingram'),
    ('Chloe', 'Pirrie'),
    ('Janina', 'Elkin'),
    ('Lili', 'Reinhart'),
    ('Casey', 'Cott'),
    ('Camila', 'Mendes'),
    ('Marisol', 'Nichols'),
    ('Madelaine', 'Petsch'),
    ('Mädchen', 'Amick'),
    ('Claire', 'Foy'),
    ('Olivia', 'Colman'),
    ('Matt', 'Smith'),
    ('Tobias', 'Menzies'),
    ('Vanessa', 'Kirby'),
    ('Helena', 'Bonham Carter'),
    ('Millie Bobby', 'Brown'),
    ('Henry', 'Cavill'),
    ('Sam', 'Claflin'),
    ('Louis', 'Partridge'),
    ('Adeel', 'Akhtar'),
    ('Joaquin', 'Phoenix'),
    ('Robert', 'De Niro'),
    ('Zazie', 'Beetz'),
    ('Frances', 'Conroy'),
    ('Brett', 'Cullen'),
    ('Shea', 'Whigham'),
    ('Robert', 'Downey Jr.'),
    ('Chris', 'Evans'),
    ('Mark', 'Ruffalo'),
    ('Chris', 'Hemsworth'),
    ('Scarlett', 'Johansson'),
    ('Jeremy', 'Renner'),
    ('Emilia', 'Clarke'),
    ('Lena', 'Headey'),
    ('Sophie', 'Turner'),
    ('Kit', 'Harington'),
    ('Peter', 'Dinklage'),
    ('Nikolaj', 'Coster-Waldau'),
    ('Grant', 'Gustin'),
    ('Carlos', 'Valdes'),
    ('Danielle', 'Panabaker'),
    ('Candice', 'Patton'),
    ('Jesse L.', 'Martin'),
    ('Tom', 'Cavanagh'),
    ('Jim', 'Parsons'),
    ('Johnny', 'Galecki'),
    ('Kaley', 'Cuoco'),
    ('Simon', 'Helberg'),
    ('Kunal', 'Nayyar'),
    ('Melissa', 'Rauch'),
    ('Mayim', 'Bialik'),
    ('Jennifer', 'Aniston'),
    ('Courteney', 'Cox'),
    ('Lisa', 'Kudrow'),
    ('David', 'Schwimmer'),
    ('Matthew', 'Perry'),
    ('Matt', 'LeBlanc'),
    ('Amybeth', 'McNulty'),
    ('Geraldine', 'James'),
    ('R. H.', 'Thomson'),
    ('Corrine', 'Koslo'),
    ('Dalila', 'Bela'),
    ('Lucas Jade', 'Zumann'),
    ('Gillian', 'Anderson'),
    ('David', 'Duchovny'),
    ('Mitch', 'Pileggi'),
    ('Paul', 'Ritter'),
    ('Jessie', 'Buckley'),
    ('Emily', 'Watson'),
    ('David', 'Wilmot'),
    ('Alexander', 'Skarsgård'),
    ('Bill', 'Skarsgård'),
    ('Valter', 'Skarsgård'),
    ('Gregory', 'Itzin'),
    ('Jean', 'Smart'),
    ('Mary', 'McDonnell'),
    ('G.W.', 'Bailey'),
    ('Tony', 'Denison'),
    ('Michael Paul', 'Chan'),
    ('Raymond', 'Cruz');

-- Insertar relaciones entre actores y títulos en la tabla ActoresTitulos
INSERT INTO actorestitulos (id_actor, id_titulo)
VALUES
(1, 1), -- Pedro Pascal - Título 1
(1, 5), -- Pedro Pascal - Título 5 ficticio
(1, 9), -- Pedro Pascal - Título 9 ficticio
(2, 1), -- Carl Weathers - Título 1
(3, 1), -- Misty Rosas - Título 1
(4, 1), -- Chris Bartlett - Título 1
(5, 1), -- Rio Hackford - Título 1
(6, 1), -- Giancarlo Esposito - Título 1
(7, 2), -- Tom Hopper - Título 2
(8, 2), -- David Castañeda - Título 2
(9, 2), -- Emmy Raver-Lampman - Título 2
(10, 2), -- Robert Sheehan - Título 2
(11, 2), -- Aidan Gallagher - Título 2
(12, 2), -- Elliot Page - Título 2
(13, 3), -- Anya Taylor-Joy - Título 3
(14, 3), -- Thomas Brodie-Sangster - Título 3
(15, 3), -- Harry Melling - Título 3
(16, 3), -- Moses Ingram - Título 3
(17, 3), -- Chloe Pirrie - Título 3
(18, 3), -- Janina Elkin - Título 3
(19, 4), -- Lili Reinhart - Título 4
(20, 4), -- Casey Cott - Título 4
(21, 4), -- Camila Mendes - Título 4
(22, 4), -- Marisol Nichols - Título 4
(23, 4), -- Madelaine Petsch - Título 4
(24, 4), -- Mädchen Amick - Título 4
(25, 5), -- Claire Foy - Título 5
(26, 5), -- Olivia Colman - Título 5
(27, 5), -- Matt Smith - Título 5
(28, 5), -- Tobias Menzies - Título 5
(29, 5), -- Vanessa Kirby - Título 5
(30, 5), -- Helena Bonham Carter - Título 5
(31, 6), -- Millie Bobby Brown - Título 6
(32, 6), -- Henry Cavill - Título 6
(33, 6), -- Sam Claflin - Título 6
(34, 6), -- Louis Partridge - Título 6
(35, 6), -- Adeel Akhtar - Título 6
(36, 7), -- Joaquin Phoenix - Título 7
(37, 7), -- Robert De Niro - Título 7
(38, 7), -- Zazie Beetz - Título 7
(39, 7), -- Frances Conroy - Título 7
(40, 7), -- Brett Cullen - Título 7
(41, 7), -- Shea Whigham - Título 7
(42, 8), -- Robert Downey Jr. - Título 8
(43, 8), -- Chris Evans - Título 8
(44, 8), -- Mark Ruffalo - Título 8
(45, 8), -- Chris Hemsworth - Título 8
(46, 8), -- Scarlett Johansson - Título 8
(47, 8), -- Jeremy Renner - Título 8
(48, 9), -- Emilia Clarke - Título 9
(49, 9), -- Lena Headey - Título 9
(50, 9), -- Sophie Turner - Título 9
(51, 9), -- Kit Harington - Título 9
(52, 9), -- Peter Dinklage - Título 9
(53, 9), -- Nikolaj Coster-Waldau - Título 9
(54, 10), -- Grant Gustin - Título 10
(55, 10), -- Carlos Valdes - Título 10
(56, 10), -- Danielle Panabaker - Título 10
(57, 10), -- Candice Patton - Título 10
(58, 10), -- Jesse L. Martin - Título 10
(59, 10), -- Tom Cavanagh - Título 10
(60, 11), -- Jim Parsons - Título 11
(61, 11), -- Johnny Galecki - Título 11
(62, 11), -- Kaley Cuoco - Título 11
(63, 11), -- Simon Helberg - Título 11
(64, 11), -- Kunal Nayyar - Título 11
(65, 11), -- Melissa Rauch - Título 11
(66, 11), -- Mayim Bialik - Título 11
(67, 12), -- Jennifer Aniston - Título 12
(68, 12), -- Courteney Cox - Título 12
(69, 12), -- Lisa Kudrow - Título 12
(70, 12), -- David Schwimmer - Título 12
(71, 12), -- Matthew Perry - Título 12
(72, 12), -- Matt LeBlanc - Título 12
(73, 13), -- Amybeth McNulty - Título 13
(74, 13), -- Geraldine James - Título 13
(75, 13), -- R. H. Thomson - Título 13
(76, 13), -- Corrine Koslo - Título 13
(77, 13), -- Dalila Bela - Título 13
(78, 13), -- Lucas Jade Zumann - Título 13
(79, 14), -- Gillian Anderson - Título 14
(80, 14), -- David Duchovny - Título 14
(81, 14), -- Mitch Pileggi - Título 14
(82, 15), -- Paul Ritter - Título 15
(83, 15), -- Jessie Buckley - Título 15
(84, 15), -- Emily Watson - Título 15
(85, 15) -- David Wilmot - Título 15
; 

