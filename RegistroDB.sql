--
-- PostgreSQL database dump
--

-- Dumped from database version 16.3
-- Dumped by pg_dump version 16.0

-- Started on 2024-06-19 01:13:43

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 2 (class 3079 OID 16384)
-- Name: adminpack; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS adminpack WITH SCHEMA pg_catalog;


--
-- TOC entry 4909 (class 0 OID 0)
-- Dependencies: 2
-- Name: EXTENSION adminpack; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION adminpack IS 'administrative functions for PostgreSQL';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 227 (class 1259 OID 16606)
-- Name: carrera; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.carrera (
    id integer NOT NULL,
    nombre character varying
);


ALTER TABLE public.carrera OWNER TO postgres;

--
-- TOC entry 229 (class 1259 OID 16615)
-- Name: carrera_clases; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.carrera_clases (
    id integer NOT NULL,
    id_carrera integer,
    id_clases integer
);


ALTER TABLE public.carrera_clases OWNER TO postgres;

--
-- TOC entry 228 (class 1259 OID 16614)
-- Name: carrera_clases_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.carrera_clases_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.carrera_clases_id_seq OWNER TO postgres;

--
-- TOC entry 4910 (class 0 OID 0)
-- Dependencies: 228
-- Name: carrera_clases_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.carrera_clases_id_seq OWNED BY public.carrera_clases.id;


--
-- TOC entry 226 (class 1259 OID 16605)
-- Name: carrera_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.carrera_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.carrera_id_seq OWNER TO postgres;

--
-- TOC entry 4911 (class 0 OID 0)
-- Dependencies: 226
-- Name: carrera_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.carrera_id_seq OWNED BY public.carrera.id;


--
-- TOC entry 217 (class 1259 OID 16565)
-- Name: clases; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.clases (
    id integer NOT NULL,
    nombre character varying,
    unidades_valorativas integer,
    timestamps timestamp(0) without time zone DEFAULT now()
);


ALTER TABLE public.clases OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 16564)
-- Name: clases_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.clases_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.clases_id_seq OWNER TO postgres;

--
-- TOC entry 4912 (class 0 OID 0)
-- Dependencies: 216
-- Name: clases_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.clases_id_seq OWNED BY public.clases.id;


--
-- TOC entry 225 (class 1259 OID 16599)
-- Name: clases_organigrama; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.clases_organigrama (
    id integer NOT NULL,
    padre integer DEFAULT 0,
    id_clase bigint
);


ALTER TABLE public.clases_organigrama OWNER TO postgres;

--
-- TOC entry 224 (class 1259 OID 16598)
-- Name: clases_organigrama_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.clases_organigrama_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.clases_organigrama_id_seq OWNER TO postgres;

--
-- TOC entry 4913 (class 0 OID 0)
-- Dependencies: 224
-- Name: clases_organigrama_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.clases_organigrama_id_seq OWNED BY public.clases_organigrama.id;


--
-- TOC entry 219 (class 1259 OID 16574)
-- Name: clasess_aprovadas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.clasess_aprovadas (
    id integer NOT NULL,
    id_clase integer,
    id_user integer,
    estado integer
);


ALTER TABLE public.clasess_aprovadas OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 16573)
-- Name: clasess_aprovadas_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.clasess_aprovadas_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.clasess_aprovadas_id_seq OWNER TO postgres;

--
-- TOC entry 4914 (class 0 OID 0)
-- Dependencies: 218
-- Name: clasess_aprovadas_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.clasess_aprovadas_id_seq OWNED BY public.clasess_aprovadas.id;


--
-- TOC entry 221 (class 1259 OID 16581)
-- Name: estados_clases; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.estados_clases (
    id integer NOT NULL,
    name_estado character varying
);


ALTER TABLE public.estados_clases OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 16580)
-- Name: estados_clases_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.estados_clases_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.estados_clases_id_seq OWNER TO postgres;

--
-- TOC entry 4915 (class 0 OID 0)
-- Dependencies: 220
-- Name: estados_clases_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.estados_clases_id_seq OWNED BY public.estados_clases.id;


--
-- TOC entry 223 (class 1259 OID 16590)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    id_carrera integer,
    username character varying,
    role character varying,
    clases_aprovadas integer,
    password character varying,
    created_at timestamp without time zone,
    timestamps timestamp(0) without time zone DEFAULT now()
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 222 (class 1259 OID 16589)
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.users_id_seq OWNER TO postgres;

--
-- TOC entry 4916 (class 0 OID 0)
-- Dependencies: 222
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- TOC entry 4727 (class 2604 OID 16609)
-- Name: carrera id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.carrera ALTER COLUMN id SET DEFAULT nextval('public.carrera_id_seq'::regclass);


--
-- TOC entry 4728 (class 2604 OID 16618)
-- Name: carrera_clases id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.carrera_clases ALTER COLUMN id SET DEFAULT nextval('public.carrera_clases_id_seq'::regclass);


--
-- TOC entry 4719 (class 2604 OID 16568)
-- Name: clases id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.clases ALTER COLUMN id SET DEFAULT nextval('public.clases_id_seq'::regclass);


--
-- TOC entry 4725 (class 2604 OID 16602)
-- Name: clases_organigrama id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.clases_organigrama ALTER COLUMN id SET DEFAULT nextval('public.clases_organigrama_id_seq'::regclass);


--
-- TOC entry 4721 (class 2604 OID 16577)
-- Name: clasess_aprovadas id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.clasess_aprovadas ALTER COLUMN id SET DEFAULT nextval('public.clasess_aprovadas_id_seq'::regclass);


--
-- TOC entry 4722 (class 2604 OID 16584)
-- Name: estados_clases id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.estados_clases ALTER COLUMN id SET DEFAULT nextval('public.estados_clases_id_seq'::regclass);


--
-- TOC entry 4723 (class 2604 OID 16593)
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- TOC entry 4901 (class 0 OID 16606)
-- Dependencies: 227
-- Data for Name: carrera; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.carrera (id, nombre) FROM stdin;
2	Ingeniería en Sistemas
3	Ingeniería Industrial
4	Administración de Empresas
5	Licenciatura en Derecho
\.


--
-- TOC entry 4903 (class 0 OID 16615)
-- Dependencies: 229
-- Data for Name: carrera_clases; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.carrera_clases (id, id_carrera, id_clases) FROM stdin;
17	2	0
18	2	1
19	2	2
20	2	3
21	2	4
22	2	5
23	2	6
24	2	7
25	2	8
26	2	9
27	2	10
\.


--
-- TOC entry 4891 (class 0 OID 16565)
-- Dependencies: 217
-- Data for Name: clases; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.clases (id, nombre, unidades_valorativas, timestamps) FROM stdin;
0	Aritmetica	4	2024-06-18 21:21:30
1	Español	2	2024-06-18 21:40:33
2	Deportes	2	2024-06-18 21:44:52
3	Fisica	3	2024-06-18 22:41:34
4	Fisica II	3	2024-06-18 22:41:44
5	Ingles	3	2024-06-18 22:41:53
6	Ingles II	3	2024-06-18 22:42:14
7	Programacion	4	2024-06-18 22:44:26
8	Programacion II	4	2024-06-18 22:44:44
9	Programacion III	4	2024-06-18 22:45:07
10	Matematica Discreta	4	2024-06-18 23:07:17
\.


--
-- TOC entry 4899 (class 0 OID 16599)
-- Dependencies: 225
-- Data for Name: clases_organigrama; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.clases_organigrama (id, padre, id_clase) FROM stdin;
10	0	1
11	0	2
12	0	3
13	3	4
15	5	6
14	0	5
16	0	7
17	7	8
18	8	9
19	0	10
\.


--
-- TOC entry 4893 (class 0 OID 16574)
-- Dependencies: 219
-- Data for Name: clasess_aprovadas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.clasess_aprovadas (id, id_clase, id_user, estado) FROM stdin;
9	0	1	1
12	7	1	1
14	3	1	1
15	4	1	1
16	6	1	1
17	8	1	1
18	5	1	1
10	2	1	1
11	1	1	1
13	9	1	3
\.


--
-- TOC entry 4895 (class 0 OID 16581)
-- Dependencies: 221
-- Data for Name: estados_clases; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.estados_clases (id, name_estado) FROM stdin;
2	reprobado
3	pendiente
1	aprobado
\.


--
-- TOC entry 4897 (class 0 OID 16590)
-- Dependencies: 223
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, id_carrera, username, role, clases_aprovadas, password, created_at, timestamps) FROM stdin;
1	2	Carlos	\N	\N	$2b$10$qRDeWPOsM90TuDLD4QSf5eY5qJDcoF4leE3e85FzrKz.BG7dKbtje	\N	2024-06-17 22:03:40
\.


--
-- TOC entry 4917 (class 0 OID 0)
-- Dependencies: 228
-- Name: carrera_clases_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.carrera_clases_id_seq', 27, true);


--
-- TOC entry 4918 (class 0 OID 0)
-- Dependencies: 226
-- Name: carrera_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.carrera_id_seq', 6, true);


--
-- TOC entry 4919 (class 0 OID 0)
-- Dependencies: 216
-- Name: clases_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.clases_id_seq', 10, true);


--
-- TOC entry 4920 (class 0 OID 0)
-- Dependencies: 224
-- Name: clases_organigrama_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.clases_organigrama_id_seq', 19, true);


--
-- TOC entry 4921 (class 0 OID 0)
-- Dependencies: 218
-- Name: clasess_aprovadas_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.clasess_aprovadas_id_seq', 18, true);


--
-- TOC entry 4922 (class 0 OID 0)
-- Dependencies: 220
-- Name: estados_clases_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.estados_clases_id_seq', 4, true);


--
-- TOC entry 4923 (class 0 OID 0)
-- Dependencies: 222
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 1, true);


--
-- TOC entry 4742 (class 2606 OID 16620)
-- Name: carrera_clases carrera_clases_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.carrera_clases
    ADD CONSTRAINT carrera_clases_pkey PRIMARY KEY (id);


--
-- TOC entry 4740 (class 2606 OID 16613)
-- Name: carrera carrera_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.carrera
    ADD CONSTRAINT carrera_pkey PRIMARY KEY (id);


--
-- TOC entry 4738 (class 2606 OID 16604)
-- Name: clases_organigrama clases_organigrama_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.clases_organigrama
    ADD CONSTRAINT clases_organigrama_pkey PRIMARY KEY (id);


--
-- TOC entry 4730 (class 2606 OID 16572)
-- Name: clases clases_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.clases
    ADD CONSTRAINT clases_pkey PRIMARY KEY (id);


--
-- TOC entry 4732 (class 2606 OID 16579)
-- Name: clasess_aprovadas clasess_aprovadas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.clasess_aprovadas
    ADD CONSTRAINT clasess_aprovadas_pkey PRIMARY KEY (id);


--
-- TOC entry 4734 (class 2606 OID 16588)
-- Name: estados_clases estados_clases_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.estados_clases
    ADD CONSTRAINT estados_clases_pkey PRIMARY KEY (id);


--
-- TOC entry 4736 (class 2606 OID 16597)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- TOC entry 4743 (class 2606 OID 16631)
-- Name: clasess_aprovadas clasess_aprovadas_estado_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.clasess_aprovadas
    ADD CONSTRAINT clasess_aprovadas_estado_fkey FOREIGN KEY (estado) REFERENCES public.estados_clases(id);


--
-- TOC entry 4744 (class 2606 OID 16626)
-- Name: clasess_aprovadas clasess_aprovadas_id_clase_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.clasess_aprovadas
    ADD CONSTRAINT clasess_aprovadas_id_clase_fkey FOREIGN KEY (id_clase) REFERENCES public.clases(id);


--
-- TOC entry 4745 (class 2606 OID 16621)
-- Name: clasess_aprovadas clasess_aprovadas_id_user_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.clasess_aprovadas
    ADD CONSTRAINT clasess_aprovadas_id_user_fkey FOREIGN KEY (id_user) REFERENCES public.users(id);


--
-- TOC entry 4746 (class 2606 OID 16636)
-- Name: users users_id_carrera_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_id_carrera_fkey FOREIGN KEY (id_carrera) REFERENCES public.carrera(id);


-- Completed on 2024-06-19 01:13:43

--
-- PostgreSQL database dump complete
--

