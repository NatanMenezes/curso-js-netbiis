--
-- PostgreSQL database dump
--

-- Dumped from database version 17.0
-- Dumped by pg_dump version 17.0

-- Started on 2024-11-04 18:14:44

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 4 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: pg_database_owner
--

CREATE SCHEMA public;


ALTER SCHEMA public OWNER TO pg_database_owner;

--
-- TOC entry 4909 (class 0 OID 0)
-- Dependencies: 4
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: pg_database_owner
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 218 (class 1259 OID 16819)
-- Name: candidato; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.candidato (
    id integer NOT NULL,
    nome character varying(255),
    numero character varying(11),
    partido character varying(40)
);


ALTER TABLE public.candidato OWNER TO postgres;

--
-- TOC entry 226 (class 1259 OID 16861)
-- Name: candidato_eleicao; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.candidato_eleicao (
    id integer NOT NULL,
    candidato_id integer,
    eleicao_id integer
);


ALTER TABLE public.candidato_eleicao OWNER TO postgres;

--
-- TOC entry 225 (class 1259 OID 16860)
-- Name: candidato_eleicao_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.candidato_eleicao_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.candidato_eleicao_id_seq OWNER TO postgres;

--
-- TOC entry 4910 (class 0 OID 0)
-- Dependencies: 225
-- Name: candidato_eleicao_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.candidato_eleicao_id_seq OWNED BY public.candidato_eleicao.id;


--
-- TOC entry 217 (class 1259 OID 16818)
-- Name: candidato_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.candidato_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.candidato_id_seq OWNER TO postgres;

--
-- TOC entry 4911 (class 0 OID 0)
-- Dependencies: 217
-- Name: candidato_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.candidato_id_seq OWNED BY public.candidato.id;


--
-- TOC entry 222 (class 1259 OID 16835)
-- Name: eleicao; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.eleicao (
    id integer NOT NULL,
    nome character varying(255),
    data date,
    descricao text
);


ALTER TABLE public.eleicao OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 16834)
-- Name: eleicao_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.eleicao_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.eleicao_id_seq OWNER TO postgres;

--
-- TOC entry 4912 (class 0 OID 0)
-- Dependencies: 221
-- Name: eleicao_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.eleicao_id_seq OWNED BY public.eleicao.id;


--
-- TOC entry 220 (class 1259 OID 16826)
-- Name: eleitor; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.eleitor (
    id integer NOT NULL,
    nome character varying(255),
    cpf character varying(11),
    senha character varying(255)
);


ALTER TABLE public.eleitor OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 16825)
-- Name: eleitor_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.eleitor_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.eleitor_id_seq OWNER TO postgres;

--
-- TOC entry 4913 (class 0 OID 0)
-- Dependencies: 219
-- Name: eleitor_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.eleitor_id_seq OWNED BY public.eleitor.id;


--
-- TOC entry 224 (class 1259 OID 16844)
-- Name: voto; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.voto (
    id integer NOT NULL,
    numero character varying(11),
    data_hora timestamp without time zone,
    eleitor_id integer,
    eleicao_id integer
);


ALTER TABLE public.voto OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 16843)
-- Name: voto_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.voto_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.voto_id_seq OWNER TO postgres;

--
-- TOC entry 4914 (class 0 OID 0)
-- Dependencies: 223
-- Name: voto_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.voto_id_seq OWNED BY public.voto.id;


--
-- TOC entry 228 (class 1259 OID 17022)
-- Name: vw_candidato_eleicao; Type: VIEW; Schema: public; Owner: postgres
--

CREATE VIEW public.vw_candidato_eleicao AS
 SELECT candidato.id,
    candidato.nome,
    candidato.numero,
    candidato_eleicao.eleicao_id
   FROM (public.candidato_eleicao
     FULL JOIN public.candidato ON ((candidato.id = candidato_eleicao.candidato_id)));


ALTER VIEW public.vw_candidato_eleicao OWNER TO postgres;

--
-- TOC entry 227 (class 1259 OID 17018)
-- Name: vw_resumo_votos; Type: VIEW; Schema: public; Owner: postgres
--

CREATE VIEW public.vw_resumo_votos AS
 SELECT count(id) AS votos,
    numero,
    eleicao_id
   FROM public.voto
  GROUP BY numero, eleicao_id;


ALTER VIEW public.vw_resumo_votos OWNER TO postgres;

--
-- TOC entry 229 (class 1259 OID 17026)
-- Name: vw_apuracao_final; Type: VIEW; Schema: public; Owner: postgres
--

CREATE VIEW public.vw_apuracao_final AS
 SELECT vw_candidato_eleicao.id,
    vw_candidato_eleicao.nome,
    vw_resumo_votos.votos,
    vw_resumo_votos.eleicao_id
   FROM (public.vw_resumo_votos
     LEFT JOIN public.vw_candidato_eleicao ON (((vw_resumo_votos.eleicao_id = vw_candidato_eleicao.eleicao_id) AND ((vw_candidato_eleicao.numero)::text = (vw_resumo_votos.numero)::text))))
  WHERE (vw_candidato_eleicao.id IS NOT NULL)
UNION ALL
 SELECT 0 AS id,
    'Brancos/Nulos'::character varying AS nome,
    sum(vw_resumo_votos.votos) AS votos,
    vw_resumo_votos.eleicao_id
   FROM (public.vw_resumo_votos
     LEFT JOIN public.vw_candidato_eleicao ON (((vw_resumo_votos.eleicao_id = vw_candidato_eleicao.eleicao_id) AND ((vw_candidato_eleicao.numero)::text = (vw_resumo_votos.numero)::text))))
  WHERE (vw_candidato_eleicao.id IS NULL)
  GROUP BY vw_resumo_votos.eleicao_id;


ALTER VIEW public.vw_apuracao_final OWNER TO postgres;

--
-- TOC entry 4727 (class 2604 OID 16822)
-- Name: candidato id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.candidato ALTER COLUMN id SET DEFAULT nextval('public.candidato_id_seq'::regclass);


--
-- TOC entry 4731 (class 2604 OID 16864)
-- Name: candidato_eleicao id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.candidato_eleicao ALTER COLUMN id SET DEFAULT nextval('public.candidato_eleicao_id_seq'::regclass);


--
-- TOC entry 4729 (class 2604 OID 16838)
-- Name: eleicao id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.eleicao ALTER COLUMN id SET DEFAULT nextval('public.eleicao_id_seq'::regclass);


--
-- TOC entry 4728 (class 2604 OID 16829)
-- Name: eleitor id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.eleitor ALTER COLUMN id SET DEFAULT nextval('public.eleitor_id_seq'::regclass);


--
-- TOC entry 4730 (class 2604 OID 16847)
-- Name: voto id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.voto ALTER COLUMN id SET DEFAULT nextval('public.voto_id_seq'::regclass);


--
-- TOC entry 4895 (class 0 OID 16819)
-- Dependencies: 218
-- Data for Name: candidato; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.candidato VALUES (1, 'Boulos', '50', 'PSOL');
INSERT INTO public.candidato VALUES (2, 'Nunes', '15', 'MDB');
INSERT INTO public.candidato VALUES (3, 'Fernandes', '22', 'PL');
INSERT INTO public.candidato VALUES (4, 'Leitão', '13', 'PT');


--
-- TOC entry 4903 (class 0 OID 16861)
-- Dependencies: 226
-- Data for Name: candidato_eleicao; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.candidato_eleicao VALUES (1, 1, 1);
INSERT INTO public.candidato_eleicao VALUES (2, 2, 1);
INSERT INTO public.candidato_eleicao VALUES (3, 3, 2);
INSERT INTO public.candidato_eleicao VALUES (4, 4, 2);


--
-- TOC entry 4899 (class 0 OID 16835)
-- Dependencies: 222
-- Data for Name: eleicao; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.eleicao VALUES (1, 'São Paulo - SP, Segundo turno', '2024-10-27', 'Segundo turno');
INSERT INTO public.eleicao VALUES (2, 'Fortaleza-CE, Segundo turno', '2024-10-27', 'Segundo turno Fortaleza');


--
-- TOC entry 4897 (class 0 OID 16826)
-- Dependencies: 220
-- Data for Name: eleitor; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 4901 (class 0 OID 16844)
-- Dependencies: 224
-- Data for Name: voto; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.voto VALUES (1, '15', '2024-10-31 22:11:37.233042', NULL, 1);
INSERT INTO public.voto VALUES (2, '15', '2024-10-31 22:11:39.088905', NULL, 1);
INSERT INTO public.voto VALUES (3, '15', '2024-10-31 22:11:39.428819', NULL, 1);
INSERT INTO public.voto VALUES (4, '15', '2024-10-31 22:11:39.745245', NULL, 1);
INSERT INTO public.voto VALUES (5, '15', '2024-10-31 22:11:40.018892', NULL, 1);
INSERT INTO public.voto VALUES (6, '15', '2024-10-31 22:11:40.292215', NULL, 1);
INSERT INTO public.voto VALUES (7, '15', '2024-10-31 22:11:40.812765', NULL, 1);
INSERT INTO public.voto VALUES (8, '15', '2024-10-31 22:11:41.191139', NULL, 1);
INSERT INTO public.voto VALUES (9, '15', '2024-10-31 22:11:41.606142', NULL, 1);
INSERT INTO public.voto VALUES (10, '15', '2024-10-31 22:11:42.086147', NULL, 1);
INSERT INTO public.voto VALUES (11, '15', '2024-10-31 22:11:42.480559', NULL, 1);
INSERT INTO public.voto VALUES (12, '15', '2024-10-31 22:11:42.945736', NULL, 1);
INSERT INTO public.voto VALUES (13, '15', '2024-10-31 22:11:43.374015', NULL, 1);
INSERT INTO public.voto VALUES (14, '15', '2024-10-31 22:11:43.797188', NULL, 1);
INSERT INTO public.voto VALUES (15, '15', '2024-10-31 22:11:44.182135', NULL, 1);
INSERT INTO public.voto VALUES (16, '15', '2024-10-31 22:11:44.527082', NULL, 1);
INSERT INTO public.voto VALUES (17, '50', '2024-10-31 22:11:52.898836', NULL, 1);
INSERT INTO public.voto VALUES (18, '50', '2024-10-31 22:11:53.242966', NULL, 1);
INSERT INTO public.voto VALUES (19, '50', '2024-10-31 22:11:53.560897', NULL, 1);
INSERT INTO public.voto VALUES (20, '50', '2024-10-31 22:11:53.858862', NULL, 1);
INSERT INTO public.voto VALUES (21, '50', '2024-10-31 22:11:54.112356', NULL, 1);
INSERT INTO public.voto VALUES (22, '50', '2024-10-31 22:11:54.3149', NULL, 1);
INSERT INTO public.voto VALUES (23, '50', '2024-10-31 22:11:59.514833', NULL, 1);
INSERT INTO public.voto VALUES (24, '13', '2024-10-31 22:12:04.433091', NULL, 1);
INSERT INTO public.voto VALUES (25, '13', '2024-10-31 22:12:05.090821', NULL, 1);
INSERT INTO public.voto VALUES (26, '22', '2024-10-31 22:12:09.082046', NULL, 1);
INSERT INTO public.voto VALUES (27, '22', '2024-10-31 22:12:09.374392', NULL, 1);
INSERT INTO public.voto VALUES (28, '22', '2024-10-31 22:12:09.629303', NULL, 1);
INSERT INTO public.voto VALUES (29, '13', NULL, NULL, 2);
INSERT INTO public.voto VALUES (30, '13', NULL, NULL, 2);
INSERT INTO public.voto VALUES (31, '13', NULL, NULL, 2);
INSERT INTO public.voto VALUES (32, '13', NULL, NULL, 2);
INSERT INTO public.voto VALUES (33, '13', NULL, NULL, 2);
INSERT INTO public.voto VALUES (34, '13', NULL, NULL, 2);
INSERT INTO public.voto VALUES (35, '13', NULL, NULL, 2);
INSERT INTO public.voto VALUES (36, '13', NULL, NULL, 2);
INSERT INTO public.voto VALUES (37, '13', NULL, NULL, 2);
INSERT INTO public.voto VALUES (38, '13', NULL, NULL, 2);
INSERT INTO public.voto VALUES (39, '13', NULL, NULL, 2);
INSERT INTO public.voto VALUES (40, '13', NULL, NULL, 2);
INSERT INTO public.voto VALUES (41, '13', NULL, NULL, 2);
INSERT INTO public.voto VALUES (42, '13', NULL, NULL, 2);
INSERT INTO public.voto VALUES (43, '13', NULL, NULL, 2);
INSERT INTO public.voto VALUES (44, '13', NULL, NULL, 2);
INSERT INTO public.voto VALUES (45, '22', NULL, NULL, 2);
INSERT INTO public.voto VALUES (46, '22', NULL, NULL, 2);
INSERT INTO public.voto VALUES (47, '22', NULL, NULL, 2);
INSERT INTO public.voto VALUES (48, '22', NULL, NULL, 2);
INSERT INTO public.voto VALUES (49, '22', NULL, NULL, 2);
INSERT INTO public.voto VALUES (50, '22', NULL, NULL, 2);
INSERT INTO public.voto VALUES (51, '22', NULL, NULL, 2);
INSERT INTO public.voto VALUES (52, '22', NULL, NULL, 2);
INSERT INTO public.voto VALUES (53, '22', NULL, NULL, 2);
INSERT INTO public.voto VALUES (54, '22', NULL, NULL, 2);
INSERT INTO public.voto VALUES (55, '15', NULL, NULL, 2);
INSERT INTO public.voto VALUES (56, '15', NULL, NULL, 2);
INSERT INTO public.voto VALUES (57, '17', NULL, NULL, 2);
INSERT INTO public.voto VALUES (58, '17', NULL, NULL, 2);
INSERT INTO public.voto VALUES (59, '99', NULL, NULL, 2);
INSERT INTO public.voto VALUES (60, '99', NULL, NULL, 2);
INSERT INTO public.voto VALUES (61, '99', NULL, NULL, 2);


--
-- TOC entry 4915 (class 0 OID 0)
-- Dependencies: 225
-- Name: candidato_eleicao_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.candidato_eleicao_id_seq', 4, true);


--
-- TOC entry 4916 (class 0 OID 0)
-- Dependencies: 217
-- Name: candidato_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.candidato_id_seq', 4, true);


--
-- TOC entry 4917 (class 0 OID 0)
-- Dependencies: 221
-- Name: eleicao_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.eleicao_id_seq', 2, true);


--
-- TOC entry 4918 (class 0 OID 0)
-- Dependencies: 219
-- Name: eleitor_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.eleitor_id_seq', 1, false);


--
-- TOC entry 4919 (class 0 OID 0)
-- Dependencies: 223
-- Name: voto_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.voto_id_seq', 61, true);


--
-- TOC entry 4741 (class 2606 OID 16866)
-- Name: candidato_eleicao candidato_eleicao_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.candidato_eleicao
    ADD CONSTRAINT candidato_eleicao_pkey PRIMARY KEY (id);


--
-- TOC entry 4733 (class 2606 OID 16824)
-- Name: candidato candidato_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.candidato
    ADD CONSTRAINT candidato_pkey PRIMARY KEY (id);


--
-- TOC entry 4737 (class 2606 OID 16842)
-- Name: eleicao eleicao_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.eleicao
    ADD CONSTRAINT eleicao_pkey PRIMARY KEY (id);


--
-- TOC entry 4735 (class 2606 OID 16833)
-- Name: eleitor eleitor_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.eleitor
    ADD CONSTRAINT eleitor_pkey PRIMARY KEY (id);


--
-- TOC entry 4739 (class 2606 OID 16849)
-- Name: voto voto_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.voto
    ADD CONSTRAINT voto_pkey PRIMARY KEY (id);


--
-- TOC entry 4744 (class 2606 OID 16867)
-- Name: candidato_eleicao candidato_eleicao_candidato_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.candidato_eleicao
    ADD CONSTRAINT candidato_eleicao_candidato_id_fkey FOREIGN KEY (candidato_id) REFERENCES public.candidato(id);


--
-- TOC entry 4745 (class 2606 OID 16872)
-- Name: candidato_eleicao candidato_eleicao_eleicao_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.candidato_eleicao
    ADD CONSTRAINT candidato_eleicao_eleicao_id_fkey FOREIGN KEY (eleicao_id) REFERENCES public.eleicao(id);


--
-- TOC entry 4742 (class 2606 OID 16855)
-- Name: voto voto_eleicao_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.voto
    ADD CONSTRAINT voto_eleicao_id_fkey FOREIGN KEY (eleicao_id) REFERENCES public.eleicao(id);


--
-- TOC entry 4743 (class 2606 OID 16850)
-- Name: voto voto_eleitor_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.voto
    ADD CONSTRAINT voto_eleitor_id_fkey FOREIGN KEY (eleitor_id) REFERENCES public.eleitor(id);


-- Completed on 2024-11-04 18:14:44

--
-- PostgreSQL database dump complete
--

